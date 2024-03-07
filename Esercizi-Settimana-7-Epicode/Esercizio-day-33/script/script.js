const libreria = [];
const link = "https://striveschool-api.herokuapp.com/books"

/*async function requestData() {
    fetch(link);
    if (result.status === 200) {
        return await result.json();
    } else {
        throw new Error('Errore nella chiamata API: ' + response.status);
    }
}
  .then(data => {
    libreria = data;
    print();
})
    .catch(err => {
        console.log(err);
    });


async function requestData() {
  const result = await fetch(link);
 
  if (result.status === 200) {
    return await result.json();
  } else {
    throw new Error('Errore nella chiamata API: ' + response.status);
  }
}
async function saveData() {
  for (const item of dataSet) {
    libreria.push(item);
  }
  let dataSet = await saveData()
  localStorage.setItem('my-array', JSON.stringify(myArray));
}*/

async function requestData() {
    await fetch(link).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Errore nella chiamata API: ${response.status}`);
        }
    }).then(data => {
        libreria = data;
        print();
    })
        .catch(err => {
            console.log(err);
        });
}