type Person = {
  name: string;
  field: string;
};

type FriendShips = {
  [key: string]: Person[];
};

const p1 = {
  name: "Ali",
  field: "Marketing",
};

const p2 = {
  name: "Mohammad",
  field: "IT",
};

const p3 = {
  name: "Hossein",
  field: "Management",
};

const p4 = {
  name: "Ahmad",
  field: "Medicine",
};

const p5 = {
  name: "Ahmad",
  field: "IT",
};

const p6 = {
  name: "Mohammad Reza",
  field: "agriculture",
};

const p7 = {
  name: "Yousef",
  field: "IT",
};

const p8 = {
  name: "Reza",
  field: "Medicine",
};

const friendShips: FriendShips = {};

friendShips[p1.name] = [p3, p2];
friendShips[p2.name] = [p1, p4, p5];
friendShips[p3.name] = [p7, p8];

// Finds the first person who has the targetField by using breadth first algorithm
// Names are unique
function findByBreadthFirst(
  startPersonName: string,
  targetField: string
): string {
  const connections = friendShips[startPersonName] || [];
  const persons = [...connections];
  const checked: string[] = [];

  while (persons.length > 0) {
    const p = persons.pop();

    if (p && checked.includes(p.name)) continue;

    if (p?.field === targetField) {
      return p.name;
    }

    if (p) {
      persons.push(...friendShips[p.name]);
      checked.push(p.name);
    }
  }

  return "Nobody found!!";
}

console.log(findByBreadthFirst("Ali", "IT"));
