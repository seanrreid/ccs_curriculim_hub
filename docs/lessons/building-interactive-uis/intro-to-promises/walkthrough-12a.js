const fetchHouse = houseURL => fetch(`https://anapioficeandfire.com/api/houses/${houseURL}`)
  .then(getJSON);
