const BLOCK = {
  SQUARE: [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ],
  LEFT_BOTTOM: [
    [2, 0, 0],
    [2, 2, 2],
    [0, 0, 0],
  ],
  RIGHT_BOTTOM: [
    [0, 0, 3],
    [3, 3, 3],
    [0, 0, 0],
  ],
  LEFT_UP: [
    [4, 0, 0],
    [4, 4, 0],
    [0, 4, 0],
  ],
  RIGHT_UP: [
    [0, 5, 0],
    [5, 5, 0],
    [5, 0, 0],
  ],
  MIDDLE: [
    [0, 6, 0],
    [6, 6, 6],
    [0, 0, 0],
  ],
  BAR: [
    [0, 7, 0, 0],
    [0, 7, 0, 0],
    [0, 7, 0, 0],
    [0, 7, 0, 0],
  ],
};

export const getNextBlock = () => {
  const blocks = [
    BLOCK.SQUARE,
    BLOCK.LEFT_BOTTOM,
    BLOCK.RIGHT_BOTTOM,
    BLOCK.LEFT_UP,
    BLOCK.RIGHT_UP,
    BLOCK.MIDDLE,
    BLOCK.BAR
  ];
  return blocks[Math.floor(Math.random() * 7)];
};