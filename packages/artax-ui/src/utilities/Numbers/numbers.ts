export const toOrdinalSuffix = (
  num: number | string,
  wrapWithSuper: boolean,
): string => {
  const int = typeof num === 'string' ? parseInt(num) : num,
    digits = [int % 10, int % 100],
    ordinals = ['st', 'nd', 'rd', 'th'],
    ordinalArray = (ordinalArray: string[]) =>
      wrapWithSuper
        ? ordinalArray.map(ordinal => {
            return `<sup>${ordinal}</sup>`
          })
        : ordinalArray,
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19]
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinalArray(ordinals)[digits[0] - 1]
    : int + ordinalArray(ordinals)[3]
}
