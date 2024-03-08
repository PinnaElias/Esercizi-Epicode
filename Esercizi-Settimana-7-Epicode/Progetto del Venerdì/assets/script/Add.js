let name = document.getElementById('name');
let brand = document.getElementById('brand');
let price = document.getElementById('cost');
let imageUrl = document.getElementById('imageUrl');
let description = document.getElementById('description')

let addProduct = document.getElementById('add');
let lista = []

const url = "https://striveschool-api.herokuapp.com/api/product/"
const authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTg5MDJkN2IxMTAwMTkwZTZmNjAiLCJpYXQiOjE3MDk4OTM3NzYsImV4cCI6MTcxMTEwMzM3Nn0.3j7w5UhmneRJZMuumLX7WEp6l09ojfahRrt1uS6xurY"


class ProductItem {
    constructor(name, description, brand, imageUrl, price) {
        this.name = name;
        this.description = description
        this.brand = brand;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}

addProduct.onclick = function () {
    let newProduct = new ProductItem(
        name = name.value, //name è deprecato ma è il nome che richiede la API
        description = description.value,
        imageUrl = imageUrl.value,
        brand = brand.value,
        price = price.value,
    )
    lista.push(createdProduct)


    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTg5MDJkN2IxMTAwMTkwZTZmNjAiLCJpYXQiOjE3MDk5MDQwMDgsImV4cCI6MTcxMTExMzYwOH0.1AWVftalBVG1Ro5ruuKSP51mM3qrb_ogBTdhIS7a7qA",
        },
        body: JSON.stringify(newProduct),
    };


    fetch(url, options)
        .then((response) => response.json())
        .then(data => {
            const createdProduct = data;
            lista.push(createdProduct)
        })
        .catch(Error => {
            console.log(Error);
        });
    /*
        name.value = '' //svuotamento del form
    brand.value = ''
    cost.value = ''
    imageUrl.value = ''
    description.value = ''
    */

}
