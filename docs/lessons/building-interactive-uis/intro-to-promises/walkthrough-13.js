const loadFromStorage = key => {
  return new Promise((resolve, reject) => {
    const raw = localStorage.getItem(key);
    if (raw) {
      const data = JSON.parse(raw);
      resolve(data);          
    } else {
      reject(key);
    }
  });
};

const retrieveCharacterFromAPI = key => {
  return fetch(`https://anapioficeandfire.com/api/characters/${key}`)
    .then(getJSON);
};

const extractHousesFromCharacter = character => {
  const {houses} = character;
  return houses;
};

const retrieveHousesFromAPI = houses => {
  const fetchArray = houses.map(houseURL =>
                                fetch(`https://anapioficeandfire.com/api/houses/${houseURL}`)
                                .then(getJSON));
  return Promise.all(fetchArray);
};

const addHousesToCharacter = character => {
  return retrieveHousesFromAPI(extractHousesFromCharacter(character))
    .then(houseArray => {
      character.houses = houseArray;
      return character;
    });
};

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

loadFromStorage('583')
  .catch(retrieveCharacterFromAPI)
  .then(logData)
  .then(addHousesToCharacter)
  .then(extractAliases)
  .then(printAliases)
  .catch(reportError)
  .then(printSummary)
