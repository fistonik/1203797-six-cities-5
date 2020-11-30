export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const raitingToPercent = (raiting) => raiting / 5 * 100;
