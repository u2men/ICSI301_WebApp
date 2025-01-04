class NumCart extends HTMLElement {
    constructor() {
        super();
        this.cart = new Map();

    }

    #render() {
        let htmlString = `Сагс хоосон байна`;
        this.cart.forEach((too, ner) => { htmlString += `<article><h3>${ner}</h3><p>${too}</p></article>` });
        // this.innerHTML = `<style>
        // article {border:10px dashed blue;}
        // </style>`+ htmlString;
        this.shdw.innerHTML =
            `<style>
            article { border: 2px solid blue; margin:8px; padding:8px;}
        </style>`+ htmlString;
    }

    get too() {
        return this.cart.size;
    }

    connectedCallback() {
        this.shdw = this.attachShadow({ mode: 'open' });
        this.#render();
        this.addEventListener("Sagsand", this.addProduct)
    }

    addProduct(e) {
        console.log("Sagsand event handled")
        console.log(e)
        const key = e.detail.productname;
        let count = 1;
        if (this.cart.has(key))
            count = this.cart.get(key) + 1;

        this.cart.set(key, count);
        this.#render();
    }
    disconnectedCallback() {

    }

    attributeChangedCallback(name, oldVal, newVal) {

    }

    adoptedCallback() {

    }

}

window.customElements.define('num-cart', NumCart);