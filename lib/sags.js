import Baraa from "./baraa.js";

export default class Sags {
    constructor(sagsData) {
        this.id = sagsData.id;
        this.baraa = sagsData.products;
        this.niitUne = sagsData.total;
    }
    render() { 
        return `
        <article class="sags">
            <section>
                ${this.renderProducts()}
            </section>
        </article>`;
    }

    renderProducts() { 
        return this
            .baraa
            .map(b => (new Baraa(b)).render())
            .reduce((p, c) => p + c);
    }
}
export async function loadData() { 
    const result = await fetch("https://dummyjson.com/carts");
    const data = await result.json();
    return data.carts;
    // return fetch("https://dummyjson.com/carts")
    //     .then(result => result.json())
    //     .then(data => data);
    
}
export function removeBaraa(id) { 
    alert("Removed!");
}
export let count;