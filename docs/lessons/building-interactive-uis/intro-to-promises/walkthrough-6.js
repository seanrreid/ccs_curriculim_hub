const getJSON = response => {
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('Bad status code');
  }
};

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

const reportError = (err) => {
  console.error('There was an error', err);
  return 0;
};

const printSummary = (howMany) => {
  console.log(`We printed ${howMany} aliases`);
};

fetch(`https://anapioficeandfire.com/api/characters/58399`)
  .then(getJSON)
  .then(logData)
  .then(extractAliases)
  .then(printAliases)
  .catch(reportError)
  .then(printSummary)
