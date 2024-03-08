let name = document.getElementById('name');
let brand = document.getElementById('brand');
let price = document.getElementById('cost');
let imageUrl = document.getElementById('imageUrl');
let description = document.getElementById('description')

let addProduct = document.getElementById('add');
let lista = []

const url = "https://striveschool-api.herokuapp.com/api/product/"
const authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTg5MDJkN2IxMTAwMTkwZTZmNjAiLCJpYXQiOjE3MDk5MTIzMzAsImV4cCI6MTcxMTEyMTkzMH0.WBYPTNkocZbl5Jys2TCf4ccpKXb0MAm1LCqprjqMGlw"


class ProductItem {
    constructor(name, description, brand, imageUrl, price) {
        this.name = name;
        this.description = description
        this.brand = brand;
        this.imageUrl = imageUrl;
        this.price = price;
    }
}

let newProduct = new ProductItem(
    name.value = ProductItem.name, //name è deprecato ma è il nome che richiede la API
    description.value = ProductItem.description,
    brand.value = ProductItem.brand,
    imageUrl.value = ProductItem.imageUrl,
    price.value = ProductItem.value,
)


const options = new Headers({
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": authorization,
    },
    body: JSON.stringify(ProductItem),
});


addProduct.addEventListener('click', function(newProduct) {
    newProduct.preventDefault();
    tryPost(newProduct);
});


async function tryPost() {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": authorization
            },
            body: JSON.stringify(newProduct),
        });

        if (!response.ok) {
            throw new Error(response.status);
        } else {

            await response.json();
            alert("Prodotto inserito con successo!");
            location.href = "index.html";
            name.value = ''
            brand.value = ''
            cost.value = ''
            imageUrl.value = ''
            description.value = ''
        }
    } catch (error) {
        console.error(error.message);
        alert("Operazione non riuscita");
    }
}