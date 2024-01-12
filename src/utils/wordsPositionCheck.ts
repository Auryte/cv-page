const everyThird = 3;
const everyFourth = 4;

export const hasGreyBackground = (index: number) => (index + 1) % everyThird === 0;

export const hasBlackBackground = (index: number) => (index + 1) % everyFourth === 0;

export const interpolateString = (input: string, key: string, replacer: string) => {
  const regEx = new RegExp(key);

  return input.replace(regEx, replacer);
};
