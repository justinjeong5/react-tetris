import { movePlayer, resetPlayer } from '../actions/player';
import { mergeBoard, updateBoard } from '../actions/board';
import { setScore } from '../actions/score';
import { getNextBlock } from './block';

export default class Tetris {
  constructor({ context, player, board, dispatch }) {
    this.context = context;
    this.player = JSON.parse(JSON.stringify(player));
    this.player.block = getNextBlock();
    this.board = JSON.parse(JSON.stringify(board));
    this.dispatch = dispatch;
    this.lastTime = 0;
    this.timer = 0;

    this.init();
    this.addHandler();
    console.log('START Game');
    this.render();
  }

  init() {
    this.context.fillStyle = '#000000';
    this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
  }

  addHandler() {
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
      }
    });
    this.isDraging = false;
    this.semaphore = true;
    document.querySelector('#canvas').addEventListener('mouseenter', () => this.isDraging = true);
    document.querySelector('#canvas').addEventListener('mouseleave', () => this.isDraging = false);
    document.querySelector('#canvas').addEventListener('mousemove', this.handleMouse.bind(this));
  }

  handleMouse(e) {
    if (!this.semaphore) return;
    this.semaphore = false;
    if (!this.isDraging) return;
    const { offsetX } = e;
    const { width } = e.target;
    const targetIndex = Math.floor(10 * (offsetX / width));
    if (this.player.position.x > targetIndex) {
      this.playerMove({ y: 0, x: -1 });
    } else if (this.player.position.x < targetIndex) {
      this.playerMove({ y: 0, x: 1 });
    }
    setTimeout(() => {
      this.semaphore = true;
    }, 16);
  }

  eleminate() {
    cancelAnimationFrame(this.animationFrameKey);
  }

  drawBlock(target, offset = { y: 0, x: 0 }) {
    target.forEach((rowData, y) => {
      rowData.forEach((value, x) => {
        if (value) {
          this.context.fillStyle = 'red';
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
    const SIZ = this.board[0].length;

    for (let y = this.board.length - 1; y >= 0; --y) {
      let toRemove = true;
      for (let x = 0; x < this.board[0].length; ++x) {
        if (this.board[y][x] === 0) {
          toRemove = false;
          break;
        }
      }
      if (toRemove) {
        this.board.splice(y, 1);
        const row = Array.from(Array(SIZ)).fill(0);
        this.board.unshift(row);
        score += multiple * SIZ;
        multiple++;
        ++y;
      }
    }
    if (score > 0) {
      this.dispatch(setScore(score));
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
    const block = getNextBlock();

    this.dispatch(resetPlayer(block));
    this.dispatch(updateBoard(this.board));

    this.player.position = { y: 0, x: 4 };
    this.player.block = block;
    if (this.collision()) {
      console.log('End Game');
      this.eleminate();
    }
  }

  playerMove(position, option = false) {
    this.dispatch(movePlayer(position));
    this.player.position.y += position.y;
    this.player.position.x += position.x;
    if (this.collision()) {
      this.player.position.y -= position.y;
      this.player.position.x -= position.x;
      if (option) {
        this.playerMoveDone();
      }
      return false;
    }
    return true;
  }

  render(time = 0) {
    const timePass = time - this.lastTime;
    this.lastTime = time;
    this.timer += timePass;
    if (this.timer > 1000) {
      this.playerMove({ y: 1, x: 0 }, true);
      this.timer = 0;
    }
    this.draw();
    this.animationFrameKey = requestAnimationFrame(this.render.bind(this));
  }
}