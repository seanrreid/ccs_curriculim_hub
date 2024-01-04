new Promise();

// Immediately resolves
new Promise((resolve, reject) => {
  resolve();
})

// Immediately rejects
new Promise((resolve, reject) => {
  reject();
})

new Promise((resolve, reject) => {
  resolve();
  reject(); // won't execute
})

// Resolves after 1 second (1000ms)
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
})

