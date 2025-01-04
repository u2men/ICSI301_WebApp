class MyBook extends HTMLElement {
    
    static observedAttributes = ['price'];
    
    constructor() {
        super();
        this.garchig = this.getAttribute("title");
        this.tailbar = this.getAttribute("desc");
        this.une = this.getAttribute("price");

        this.#render();
    }

    #render() { 
       this.innerHTML = `<article>
            <h2> ${this.garchig} </h2>
            <p> ${ this.une } </p>
            <p> ${ this.tailbar } </p>
        </article>`;
    }
    connectedCallback() {
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case "price":
                    this.une = this.getAttribute("price");
                break;    
            default:
                break;
        }
        
        this.#render();
    }

    adoptedCallback() {
    }

}

window.customElements.define('my-book', MyBook);