import getRandomSortedNumbersList from "./utils/getRandomSortedNumbersList";

const LIST_LENGTH = 100;
const MAX_VALUE = 10000;

const list1 = getRandomSortedNumbersList(LIST_LENGTH, MAX_VALUE);
const randomPosition = Math.floor(Math.random() * LIST_LENGTH);
const randomValue = list1[randomPosition];

function findPositionByBinarySearch(list: number[], value: number) {
  let highPosition = list.length - 1;
  let lowPosition = 0;
  let midPosition = Math.floor((lowPosition + highPosition) / 2);

  while (list[midPosition] !== value) {
    midPosition = Math.floor((highPosition + lowPosition) / 2);

    if (list[midPosition] > value) {
      highPosition = midPosition;

      continue;
    }

    lowPosition = midPosition;
  }

  return midPosition;
}

const foundPosition = findPositionByBinarySearch(list1, randomValue);

console.log(`Found position => ${foundPosition}
RealPosition => ${randomPosition}
Are equal? ${foundPosition === randomPosition ? "Yes" : "No"}
`);
