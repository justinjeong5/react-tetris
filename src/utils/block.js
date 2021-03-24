const BLOCK = {
  SQUARE1: [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ],
  SQUARE2: [
    [2, 2, 0],
    [2, 2, 0],
    [0, 0, 0],
  ],
  SQUARE3: [
    [3, 3, 0],
    [3, 3, 0],
    [0, 0, 0],
  ],
  SQUARE4: [
    [4, 4, 0],
    [4, 4, 0],
    [0, 0, 0],
  ],
  SQUARE5: [
    [5, 5, 0],
    [5, 5, 0],
    [0, 0, 0],
  ],
  SQUARE6: [
    [6, 6, 0],
    [6, 6, 0],
    [0, 0, 0],
  ],
  SQUARE7: [
    [7, 7, 0],
    [7, 7, 0],
    [0, 0, 0],
  ],
};

export const colors = [
  '',
  'Coral',
  'DarkKhaki',
  'MediumPurple',
  'MediumSeaGreen',
  'SkyBlue',
  'SandyBrown',
  'DarkGray',
];

let count = -1;

export const getNextBlock = () => {
  const blocks = [
    BLOCK.SQUARE1,
    BLOCK.SQUARE2,
    BLOCK.SQUARE3,
    BLOCK.SQUARE4,
    BLOCK.SQUARE5,
    BLOCK.SQUARE6,
    BLOCK.SQUARE7,
  ];
  count = (count + 1) % 7;
  return blocks[count];
};