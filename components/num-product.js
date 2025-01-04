export default class NumProduct extends HTMLElement {
    static observedAttributes = ["pname"];

    constructor() {
        super();
    }

    set name(value) { this.productName = value; }
    set pprice(value) { this.une = value; }
    get pprice() { return this.une; }
    get productWeight() {

    }

    #render() {
        this.innerHTML =
            `<article class="product">
            <img src="http://picsum.photos/50" alt="">
            <h2>${this.productName}</h2>
            <p>${this.une}</p>
            <button>🛒</button>
        </article>`;
    }
    connectedCallback() {
        this.productName = this.getAttribute("pname");
        this.une = this.getAttribute("price");
        this.pid = this.getAttribute("pid");
        this.#render();

        this.querySelector("button").addEventListener('click', e => {
            this.onSags();
        })
    }

    onSags() {
        const evnt = new CustomEvent("Sagsand", { detail: { productname: this.productName } });
        const mysags = document.getElementById("mysags")
        mysags.dispatchEvent(evnt);
    }
    disconnectedCallback() {

    }

    attributeChangedCallback(name, oldVal, newVal) {
        this.productName = newVal;
        this.#render();
    }

    adoptedCallback() {

    }

}

window.customElements.define('num-product', NumProduct);