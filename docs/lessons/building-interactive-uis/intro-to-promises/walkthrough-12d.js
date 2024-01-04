const retrieveCharacterFromAPI = key => {
  return fetch(`https://anapioficeandfire.com/api/characters/${key}`)
    .then(getJSON);
};

const extractHousesFromCharacter = character => {
  const {allegiances} = character;
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
      character.allegiances = houseArray;
      return character;
    });
};

loadFromStorage('583')
  .catch(retrieveCharacterFromAPI)
  .then(logData)
  .then(addHousesToCharacter)
  .then(extractAliases)
  .then(printAliases)
  .catch(reportError)
  .then(printSummary)
