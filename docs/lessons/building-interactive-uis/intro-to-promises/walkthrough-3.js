const getJSON = response => response.json();

const logData = data => {
  console.log(data);
  return data;
};

const extractAliases = character => {
  const {aliases} = character;
  return aliases;
};

const printAliases = aliases => {
  for (let a of aliases) {
    console.log(a);
  }
};

fetch(`https://anapioficeandfire.com/api/characters/583`)
  .then(getJSON)
  .then(logData)
  .then(extractAliases)
  .then(printAliases)
