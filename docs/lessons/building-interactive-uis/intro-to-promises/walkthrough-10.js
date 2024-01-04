const retrieveFromAPI = key => {
  return fetch(`https://anapioficeandfire.com/api/characters/${key}`);
};

//...code omitted

loadFromStorage('583')
  .catch(retrieveFromAPI)
  .then(getJSON) // This will *not* work the way we expect.
  .then(logData)
  .then(extractAliases)
  .then(printAliases)
  .catch(reportError)
  .then(printSummary)
