export const asBoolean = (str: 'True' | 'False' | string | undefined): boolean | undefined => {
  if (str) {
    const strNormalized = str.toLowerCase();
    if (['true', 'false'].includes(strNormalized)) {
      return strNormalized === 'true';
    }
  }

  return;
};
