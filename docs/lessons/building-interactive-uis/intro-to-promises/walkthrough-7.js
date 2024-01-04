const promise = new Promise((resolve, reject) => {
  resolve(42);
});

promise.then(value => console.log(value));
// 42
