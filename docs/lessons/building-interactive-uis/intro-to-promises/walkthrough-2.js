fetch(`https://anapioficeandfire.com/api/characters/583`)
  .then(response => response.json())
  .then(data => console.log(data))
