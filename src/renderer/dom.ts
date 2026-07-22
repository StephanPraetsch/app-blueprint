export const getRequiredElement = <T extends Element>(id: string): T => {
  const element = document.getElementById(id);
  if (!(element instanceof Element)) {
    throw new Error(`Required element with id '${id}' was not found.`);
  }
  return element as unknown as T;
};

