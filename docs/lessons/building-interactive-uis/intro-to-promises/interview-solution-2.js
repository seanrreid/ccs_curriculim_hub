const SOURCE_URL = "https://first.api.com";
const SAVE_TO_URL = "https://other.api.com";

const saveData = (data) => {
    return fetch(SAVE_TO_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(() => {
        return data;
    });
};

const retrieveData = () => {
    return fetch(SOURCE_URL)
             .then(response => response.json());
};

const main = () => {
    retrieveData()
        .then(saveData)
        .then(data => {
            console.log(data);
        });
};

main();
