class NumProductNew extends HTMLElement {
    constructor() {
        super();
        const tmpl = document.getElementById("tmplProduct");
        this.appendChild(tmpl.content);
    }

    AddProduct() { 
        const evnt = new CustomEvent("Sagsand", { detail: {id:1, name:"asdf"} });
        window.dispatchEvent(evnt);
    }
    connectedCallback() {
        
    }

    disconnectedCallback() {
        
    }

    attributeChangedCallback(name, oldVal, newVal) {
        
    }

    adoptedCallback() {
        
    }

}

window.customElements.define('num-product-new', NumProductNew);