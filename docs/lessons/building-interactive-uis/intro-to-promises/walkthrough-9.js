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

const retrieveFromAPI = key => {
  return fetch(`https://anapioficeandfire.com/api/characters/${key}`)
    .then(getJSON);
};

//...code omitted

loadFromStorage('583')
  .catch(retrieveFromAPI)
  .then(logData)
  .then(extractAliases)
  .then(printAliases)
  .catch(reportError)
  .then(printSummary)
