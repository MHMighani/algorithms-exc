// stations set covering problem
type Station = {
  [key: string]: string[];
};

// keys are stations and values are arrays of covering states
const stations: Station = {
  kone: ["ID", "NV", "UT"],
  ktwo: ["WA", "ID", "MT"],
  kthree: ["OR", "NV", "CA"],
  kfour: ["NV", "UT"],
  kfive: ["CA", "AZ"],
};

// Figure out the smallest set of stations to play on to cover all states?
// should get solved by approximation greedy strategy algorithm

// Strategy: find the station that covers most of uncovered states and continue it untill all states are covered
const covered = new Set();
const uncovered = new Set(Object.values(stations).flatMap((item) => item));
const availableStations = new Set(Object.keys(stations));
const chosenStations = new Set();

while (uncovered.size) {
  let mostCoveringStation = "";
  let diffSize = 0;

  for (let st of availableStations) {
    const stationStates = new Set(stations[st]);
    const difference = stationStates.difference(covered);
    if (difference.size > diffSize) {
      mostCoveringStation = st;
      diffSize = difference.size;
    }
  }

  for (let item of stations[mostCoveringStation]) {
    uncovered.delete(item);
    covered.add(item);
  }

  availableStations.delete(mostCoveringStation);
  chosenStations.add(mostCoveringStation);
}

console.log(chosenStations);
