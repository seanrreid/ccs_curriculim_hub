const SOURCE_URL = "https://first.api.com";

const retrieveData = () => {
    return fetch(SOURCE_URL)
             .then(response => response.json());
};

const main = () => {
    retrieveData()
        .then(data => {
            console.log(data);
        });
};

main();
