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
  return aliases.length;
};

const reportError = () => {
  console.error('There was an error');
  return 0;
};

const printSummary = (howMany) => {
  console.log(`We printed ${howMany} aliases`);
};

fetch(`https://anapioficeandfire.com/api/characters/583`)
  .then(getJSON)
  .then(logData)
  .then(extractAliases)
  .then(printAliases)
  .catch(reportError)
  .then(printSummary)
