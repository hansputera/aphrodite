export const unsetProp = <T extends Record<K, unknown>, K extends keyof T>(
  obj: T,
  ...props: K[]
): Omit<T, keyof typeof props> => {
  for (const key of props) {
    delete obj[key];
  }

  return obj;
};
