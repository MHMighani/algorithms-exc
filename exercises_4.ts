// 4.1
function sum(arr: number[]): number {
  if (arr.length === 1) {
    return arr[0];
  }

  const lastItem = Number(arr.pop());
  return lastItem + sum(arr);
}

// 4.2
function countListItems(arr: number[]): number {
  if (arr.length === 1) return 1;

  arr.pop();
  return 1 + countListItems(arr);
}

// 4.3
function findMaxNumber(arr: number[], max: number = 0) {
  let newMax = Number(max);
  const num = Number(arr.pop());

  if (num > max) newMax = num;
  if (arr.length === 0) return newMax;

  return findMaxNumber(arr, newMax);
}
