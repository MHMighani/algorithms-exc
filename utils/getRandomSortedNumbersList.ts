function compareNumbers(a: number, b: number) {
  return a - b;
}

export default function getRandomSortedNumbersList(
  listLength: number,
  max: number = 100
) {
  const list: number[] = [];

  while (list.length < listLength) {
    const randomNumber = Math.round(Math.random() * max);

    if (!list.includes(randomNumber)) {
      list.push(randomNumber);
    }
  }
  const sortedList = list.sort(compareNumbers);

  return sortedList;
}
