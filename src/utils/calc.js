const winningMatrix = {
  0: [
    [1, 2],
    [3, 6],
    [4, 8],
  ],
  1: [
    [0, 2],
    [4, 7],
  ],
  2: [
    [0, 1],
    [5, 8],
    [4, 6],
  ],
  3: [
    [0, 6],
    [4, 5],
  ],
  4: [
    [2, 6],
    [3, 5],
    [1, 7],
    [0, 8],
  ],
  5: [
    [3, 4],
    [2, 8],
  ],
  6: [
    [7, 8],
    [0, 3],
    [2, 4],
  ],
  7: [
    [6, 8],
    [1, 4],
  ],
  8: [
    [6, 7],
    [2, 5],
    [0, 4],
  ],
};

export const calcWin = (cellValues, turnLeft, cellIndex) => {
  const winRanges = winningMatrix[cellIndex];

  for (let i = 0; i < winRanges.length; i++) {
    const curValue = cellValues[cellIndex];
    const firstOpt = cellValues[winRanges[i][0]];
    const secOpt = cellValues[winRanges[i][1]];

    if (curValue === firstOpt && firstOpt === secOpt) {
      return {
        win: [cellIndex, winningMatrix[i][0], winningMatrix[i][1]],
        hasRel: true,
        winner: curValue,
      };
    }
  }
  if (turnLeft === 0) {
    return {
      win: [],
      hasRel: true,
      winner: undefined,
    };
  }
  return {
    win: [],
    hasRel: false,
    winner: undefined,
  };
};
