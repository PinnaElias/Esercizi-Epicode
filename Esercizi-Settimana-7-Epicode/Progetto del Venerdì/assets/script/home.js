const url = `https://striveschool-api.herokuapp.com/api/computers/`
const authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTg5MDJkN2IxMTAwMTkwZTZmNjAiLCJpYXQiOjE3MDk4OTM3NzYsImV4cCI6MTcxMTEwMzM3Nn0.3j7w5UhmneRJZMuumLX7WEp6l09ojfahRrt1uS6xurY"
const products = []


async function retrieveData() {

    await fetch(url, {
        headers: {
            "Authorization": authorization
        }
    }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Errore nella chiamata API: ${response.status}`);
        }}).then
    then(data => {
        products = data;
        print();
    })
        .catch(err => {
            console.log(err);
        });
}