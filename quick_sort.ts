function quickSort(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  const pivot = arr[0];

  const greaterSub = [];
  const lessSub = [];

  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];
    if (value > pivot) {
      greaterSub.push(value);
    } else {
      lessSub.push(value);
    }
  }

  return [...quickSort(lessSub), pivot, ...quickSort(greaterSub)];
}

const qTest = [7, 2, 9, 222, 3, 0];

console.log(quickSort(qTest));
