import Sags, { count, loadData as loadSags, removeBaraa } from "./sags.js";
// import Product, { count, loadData as loadProds } from "./prods.js";

//data duudna
const sagsData = await loadSags();
app.sagsData = sagsData;
//datag renderlene
const sagsHtml = sagsData
                        .map(sd => (new Sags(sd)).render())
                        .reduce((p, c)=>p+c);
//domd hine
document
    .getElementById("cart")
    .insertAdjacentHTML("beforeEnd", sagsHtml);

app.removeFx = removeBaraa;