import './num-product.js';
import './num-cart.js';

class NumApp extends HTMLElement {
    constructor() {
        super();

    }

    connectedCallback() {
        this.innerHTML = `
        <div style="display:flex; flex-flow:row wrap; justify-content: space-between;">
            <div id="prods"></div>
            <div id="sags"></div>
        </div>`;

        const prod = document.createElement('num-product');
        prod.setAttribute("pid", 3);
        prod.setAttribute("pname", "Baraa 1");
        prod.setAttribute("price", 5000);

        document.getElementById("prods").appendChild(prod);

        const prod1 = document.createElement('num-product');
        prod1.setAttribute("pid", 4);
        prod1.setAttribute("pname", "Baraa 2");
        prod1.setAttribute("price", 10000);

        document.getElementById("prods").appendChild(prod1);

        const cart = document.createElement("num-cart");
        cart.setAttribute("id", "mysags");

        document.getElementById("sags").appendChild(cart);
    }

    disconnectedCallback() {
        
    }

    attributeChangedCallback(name, oldVal, newVal) {
        
    }

    adoptedCallback() {
        
    }

}

window.customElements.define('num-app', NumApp);