type Costs = {
  [key: string]: number;
};

type Graph = {
  [key: string]: {
    [key: string]: number;
  };
};

type Parents = {
  [key: string]: string | null;
};

const graph1: Graph = {
  start: {
    a: 6,
    b: 2,
  },
  a: {
    fin: 1,
  },
  b: {
    a: 3,
    fin: 5,
  },
  fin: {},
};

const costs: Costs = {
  a: 6,
  b: 2,
  fin: Infinity,
};

const parents: Parents = {
  a: "start",
  b: "start",
  fin: null,
};

const processed: String[] = [];

const getNodeWithLowestCost = (costs: Costs) => {
  let lowestNode = null;
  let lowestCost = Infinity;
  const keys = Object.keys(costs);
  let lowest = null;

  for (let key of keys) {
    if (costs[key] < lowestCost && !processed.includes(key)) {
      lowestNode = key;
      lowestCost = costs[key];
    }
  }

  return lowest;
};

const findPathWithLeastCostByDijkstra = (costs: Costs) => {
  let node = getNodeWithLowestCost(costs);

  while (node) {
    let cost = costs[node];

    let neighbors = graph1[node];

    for (let n in neighbors) {
      let newCost = cost + neighbors[n];
      if (newCost < costs[n]) {
        costs[n] = newCost;
        parents[n] = node;
      }

      processed.push(node);
    }

    node = getNodeWithLowestCost(costs);
  }
};

findPathWithLeastCostByDijkstra(costs);
