const fetchHouse = houseURL => fetch(`https://anapioficeandfire.com/api/houses/${houseURL}`)
  .then(getJSON);

const retrieveHousesFromAPI = houses => {
  const fetchArray = houses.map(houseURL => fetchHouse(houseURL));
  return Promise.all(fetchArray);
};
