const url = "https://striveschool-api.herokuapp.com/api/product/"
const authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZTg5MDJkN2IxMTAwMTkwZTZmNjAiLCJpYXQiOjE3MDk5MTIzMzAsImV4cCI6MTcxMTEyMTkzMH0.WBYPTNkocZbl5Jys2TCf4ccpKXb0MAm1LCqprjqMGlw"
const products = document.getElementById("productList");
let list = [];

window.addEventListener('load', function () {
    loadProducts();
});

const loadProducts = async () => {
    try {
        let response = await fetch(Url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": authorization,
            }
        });
        list = await response.json();
        printData();
    } catch (error) {
        console.log(error);
    }
}

const vetrina = () => {
    products.innerHTML += `
<div class="card" style="width: 18rem;">
  <img src="${newProduct.imageUrl}" class="card-img-top" alt="${newProduct.description}">
  <div class="card-body">
    <h5 class="card-title">${newProduct.name}</h5>
    <p class="card-text">${newProduct.description}.</p>
    <a href="./backoffice_modify.html" class="btn btn-primary">Modifica</a>
  </div>
</div>
`
}