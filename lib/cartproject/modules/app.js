import Cart, { loader as cartLoader, removeProduct as ustgah } from "./cart.js";
// import { loader as userLoader} from "./user.js";

const cartData = await cartLoader();

const htmlCart =
    cartData
        .carts
        .map(c => (new Cart(c)).render())
        .reduce((p, c) => p + c);
        // .join("");

document.getElementById("orders")
    .insertAdjacentHTML("beforeend", htmlCart);
    
app.cartData = cartData.carts;
app.removeProduct = ustgah;