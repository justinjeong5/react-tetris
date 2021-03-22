const BLOCK = {
  SQUARE: [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ],
  LEFT_BOTTOM: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  RIGHT_BOTTOM: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  LEFT_UP: [
    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0],
  ],
  RIGHT_UP: [
    [0, 0, 1],
    [0, 1, 1],
    [0, 1, 0],
  ],
  MIDDLE: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  BAR: [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
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
  return blocks[Math.floor(Math.random() * 0)];
};