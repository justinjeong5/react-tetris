import { movePlayer, resetPlayer } from '../actions/player';
import { mergeBoard, updateBoard, finishGame, pushNext } from '../actions/board';
import { setScore, updateHighScore } from '../actions/score';
import { getNextBlock, colors } from './block';

export default class Tetris {
  constructor({ context, player, board, dispatch }) {
    this.context = context;
    this.dispatch = dispatch;

    this.nextBlock = [];
    this.pushNextBlock();
    this.player = JSON.parse(JSON.stringify(player));
    this.player.block = this.nextBlock[0];
    this.board = JSON.parse(JSON.stringify(board));
    this.lastTime = 0;
    this.timer = 0;
    this.gameEnd = false;
    this.score = 0;
    this.ROW = board.length;
    this.COL = board[0].length;

    this.init();
    this.initNextBlock();
    this.initHandler();
    console.log('START Game');
    this.render();
  }

  init() {
    let height = document.documentElement.clientHeight;
    const ratio = (this.COL / this.ROW);
    const scale = height * ratio * 0.8 * 0.1;
    this.context.canvas.width = (height * ratio * 0.8);
    this.context.canvas.height = (height * 0.8);
    this.context.scale(scale, scale);

    this.context.fillStyle = '#000000';
    this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }
  initBoard() {
    return Array.from(Array(this.ROW)).map(() => Array.from(Array(this.COL)).fill(0));
  }
  initNextBlock() {
    Array.from(Array(4)).forEach(() => this.pushNextBlock());
  }
  initHandler() {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case 37:
          this.playerMove({ y: 0, x: -1 });
          break;
        case 39:
          this.playerMove({ y: 0, x: 1 });
          break;
        case 40:
          this.playerMove({ y: 1, x: 0 }, true);
          this.timer = 0;
          break;
        case 32:
          while (this.playerMove({ y: 1, x: 0 }, true)) continue;
          break;
        default:
          break;
      }
    });
    this.isDraging = false;
    this.mouseTimer = true;
    document.querySelector('#canvas').addEventListener('mouseenter', () => this.isDraging = true);
    document.querySelector('#canvas').addEventListener('mouseleave', () => this.isDraging = false);
    document.querySelector('#canvas').addEventListener('mousemove', this.handleMouse.bind(this));
  }

  pushNextBlock() {
    const block = getNextBlock();
    this.nextBlock.push(block);
    this.dispatch(pushNext(block));
  }
  popNextBlock() {
    this.pushNextBlock();
    return this.nextBlock.splice(0, 1)[0];
  }

  resume() {
    console.log('Reset Game');
    this.gameEnd = false;
    this.pushNextBlock();
    const block = getNextBlock();
    const position = { y: 0, x: 4 };
    this.player.block = block;
    this.dispatch(resetPlayer(position, block));
    this.player.position = position;

    const board = this.initBoard();
    this.board = board;
    this.dispatch(updateBoard(board));

    this.dispatch(updateHighScore(this.score));
    this.score = 0;

    this.render();
  }

  handleMouse(e) {
    if (!this.mouseTimer || !this.isDraging) {
      return;
    }
    this.mouseTimer = setTimeout(() => {
      const { offsetX } = e;
      const { width } = e.target;
      const targetIndex = Math.floor(10 * (offsetX / width)) - 1;
      if (this.player.position.x > targetIndex) {
        this.playerMove({ y: 0, x: -1 });
      } else if (this.player.position.x < targetIndex) {
        this.playerMove({ y: 0, x: 1 });
      }
    }, 16);
  }

  drawBlock(target, offset = { y: 0, x: 0 }) {
    target.forEach((rowData, y) => {
      rowData.forEach((value, x) => {
        if (value) {
          this.context.fillStyle = colors[value];
          this.context.fillRect(x + offset.x, y + offset.y, 1, 1);
        }
      });
    });
  }

  draw() {
    this.init();
    this.drawBlock(this.board, { y: 0, x: 0 });
    this.drawBlock(this.player.block, this.player.position);
  }

  boomLine() {
    let score = 0;
    let multiple = 1;

    for (let y = this.ROW - 1; y >= 0; --y) {
      let toRemove = true;
      for (let x = 0; x < this.COL; ++x) {
        if (this.board[y][x] === 0) {
          toRemove = false;
          break;
        }
      }
      if (toRemove) {
        this.board.splice(y, 1);
        const row = Array.from(Array(this.COL)).fill(0);
        this.board.unshift(row);
        score += multiple * this.COL;
        multiple++;
        ++y;
      }
    }
    if (score > 0) {
      this.dispatch(setScore(score));
      this.score += score;
    }
  }

  merge() {
    const { block, position } = this.player;
    const { y, x } = position;
    block.forEach((rowData, row) => {
      rowData.forEach((value, col) => {
        if (value !== 0) {
          const temp = JSON.parse(JSON.stringify(this.board));
          temp[row + y][col + x] = value;
          this.board = temp;
          mergeBoard({ y: row + y, x: col + x }, value);
        }
      });
    });
  }

  collision() {
    const { block, position } = this.player;
    for (let y = 0; y < block.length; ++y) {
      for (let x = 0; x < block[y].length; ++x) {
        if (block[y][x] !== 0 && (this.board[y + position.y] &&
          this.board[y + position.y][x + position.x]) !== 0) {
          return true;
        }
      }
    }
    return false;
  }

  playerMoveDone() {
    this.merge();
    this.boomLine();
    const block = this.popNextBlock();
    this.dispatch(updateBoard(this.board));
    const position = { y: 0, x: 4 };
    this.dispatch(resetPlayer(position, block));
    this.player.position = position;
    this.player.block = block;
    if (this.collision()) {
      console.log('End Game');
      this.gameEnd = true;
      this.dispatch(finishGame(this.score));
      this.dispatch(updateHighScore(this.score));
    }
  }

  playerMove(position, option = false) {
    this.dispatch(movePlayer(position));
    this.player.position.y += position.y;
    this.player.position.x += position.x;
    if (this.collision()) {
      this.player.position.y -= position.y;
      this.player.position.x -= position.x;
      option && this.playerMoveDone();
      return false;
    }
    return true;
  }

  render(time = 0) {
    if (this.gameEnd) return;
    const timePass = time - this.lastTime;
    this.lastTime = time;
    this.timer += timePass;
    if (this.timer > 1000) {
      this.playerMove({ y: 1, x: 0 }, true);
      this.timer = 0;
    }
    this.draw();
    requestAnimationFrame(this.render.bind(this));
  }
}