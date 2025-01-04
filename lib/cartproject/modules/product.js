export default class Product {
    constructor(prodObj) {
        this.id = prodObj.id;
        this.une = prodObj.price;
        this.ner = prodObj.title;
        this.img = prodObj.thumbnail;
    }

    render() { 
        return ` <article class="baraa">
                    <img src="${this.img}">
                    <h4>${this.ner}</h4>
                    <p>${this.une}</p>
                    <button onclick="app.removeProduct(${this.id})">Remove</button>
                </article>`
    }
}