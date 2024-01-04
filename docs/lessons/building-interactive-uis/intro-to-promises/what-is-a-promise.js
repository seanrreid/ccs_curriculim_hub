var between1and10secs = Math.floor(Math.random() * 10 + 1);

var examplePromise = new Promise((resolve, reject) => {
  setTimeout(
    () => resolve(`resolved after ${between1and10secs} seconds`),
    between1and10secs
  );
});

examplePromise.then(value => console.log(value));
console.log("logged after promise");
