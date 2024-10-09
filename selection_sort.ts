type ArrType = number[];

function findIndexOfSmallestItem(arr: ArrType): number {
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[smallestIndex]) {
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function sortBySelectionSort(arr: ArrType) {
  const cloned = [...arr];
  const sortedArray = [];

  for (let i = 0; i < arr.length; i++) {
    const index = findIndexOfSmallestItem(cloned);

    sortedArray.push(cloned[index]);

    cloned.splice(index, 1);
  }

  return sortedArray;
}

const test = [22, 3, 1, 4, 102];

console.log(sortBySelectionSort(test));
