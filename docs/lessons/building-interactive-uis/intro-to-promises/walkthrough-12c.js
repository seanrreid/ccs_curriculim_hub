const fetchHouse = houseURL => fetch(`https://anapioficeandfire.com/api/houses/${houseURL}`)
  .then(getJSON);

const retrieveHousesFromAPI = houses => {
  const fetchArray = houses.map(houseURL => fetchHouse(houseURL));
  return Promise.all(fetchArray);
};

const extractHousesFromCharacter = character => {
  const {allegiances} = character;
  return houses;
};

const addHousesToCharacter = character => {
  return retrieveHousesFromAPI(extractHousesFromCharacter(character))
    .then(houseArray => {
      character.allegiances = houseArray;
      return character;
    });
};
