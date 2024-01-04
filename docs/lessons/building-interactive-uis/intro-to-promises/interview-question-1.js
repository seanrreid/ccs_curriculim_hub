const getUsers = () => {
    fetch(API)
      .then(r => r.json());
};

const main = () => {
    getUsers()
      .then(users => {
        console.log(users);
      });
};

main();
