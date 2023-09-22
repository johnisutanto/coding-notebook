/**
 * Create an array and fill with some value
 *
 * @param arraySize size of the array
 * @param fillValue value to fill on each element of the array
 * @returns One dimension array filled with {fillValue}
 */
function createAndFillArray<T>(arraySize: number, fillValue: T) {
  const arr: T[] = Array(arraySize).fill(fillValue);
  return arr;
}

/**
 * Create a two dimension array and fill with some value
 *
 * @param row number of rows
 * @param col number of columns
 * @param fillValue value to fill on each element of the array
 * @returns Two dimension array with size of {row} x {column} filled with {fillValue}
 */
function createAndFillTwoDimArray<T>(row: number, col: number, fillValue: T) {
  const arr: T[][] = Array.from({ length: row }, (_) =>
    Array(col).fill(fillValue)
  );
  return arr;
}

console.log(createAndFillArray<number>(5, -1));
console.log(createAndFillTwoDimArray<number>(3, 3, -1));
