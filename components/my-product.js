class MyProduct extends HTMLElement {
    constructor() {
        super();
        this.ner = this.getAttribute("name");
        console.log(this.ner);
    
        // this.myRoot = this.attachShadow({mode:"open"});
        // this.myRoot.innerHTML= this.#render();
        this.temp = document.getElementsById("myProd").content;
        this.appendChild(temp.cloneNode(true));
    }

    #render() { 
        console.log("rendering...")
        return `
        <style>
        h3{color:var(--color-main);}
        p{color:grey;}
        </style>
        <article>
         <h3>
          ${this.ner}
          </h3>
          <p>desc</p>
        </article>`;
    }
    set baraaName(shineNer) { 
        this.ner = shineNer;
        this.myRoot.innerHTML = this.#render();
    }
    get baraaName() { 

        return this.ner;
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

window.customElements.define('my-product', MyProduct);