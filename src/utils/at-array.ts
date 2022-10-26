export const atArray = <T>(array: Array<T>, pos: number) => {
  try {
    if (pos === -1) pos = array.length - 1;
    return array[pos];
  } catch {
    return undefined;
  }
};
