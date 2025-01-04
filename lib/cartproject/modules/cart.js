import Product from './product.js';

export default class Cart {
    constructor(cartObj) {
        this.id = cartObj.id;
        this.baraanuud = cartObj.products;
        this.niitUne = cartObj.total;
    }
    render() {
        return `<article class="cart">
                   <section>
                        <h3>baraanuud</h3>
                        ${this
                            .baraanuud
                            .map(p => (new Product(p)).render())
                            .join("")
                        }
                    </section> 
                </article>`;
    }
    get uneMNT() { return Number(this.niitUne) * 3800; }
}
export let count = 10;
export async function loader() {
    const rs = await fetch("https://dummyjson.com/carts");
    const data = await rs.json();
    return data;
    // return fetch("https://dummyjson.com/carts")
    //     .then(rs=>rs.json())
    //     .then(data=>data);
}
export function removeProduct(productId) { 
    alert("Product removed "+productId);
}
