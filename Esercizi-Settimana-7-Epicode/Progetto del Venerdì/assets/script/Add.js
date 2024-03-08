let _name = document.getElementById('name');
let _brand = document.getElementById('brand');
let _cost = document.getElementById('cost');
let _source = document.getElementById('source');
let _description = document.getElementById('description')

let list = document.getElementById('listPublisher');
let addProduct = document.getElementById('add');


class ProductItem {
    constructor(_name, _brand, _cost, _source, _description) {
        this._name = _name;
        this._brand = _brand;
        this._cost = _cost;
        this._source = _source;
        this._description = _description
    }}


addProduct.onclick = function () {
    let newProduct = new ProductItem(
        _name.value,
        _brand.value,
        _cost.value,
        _source.value,
        _description.value
    )

    _name.value = ''
    _brand.value = ''
    _cost.value = ''
    _source.value = ''

}