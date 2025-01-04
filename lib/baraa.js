
export default class Baraa {
    constructor(baraaObj) {
        this.id = baraaObj.id;
        this.ner = baraaObj.title;
        this.une = baraaObj.price;
        this.zurag = baraaObj.thumbnail;
    }
    render() { 
    return `<article class="baraa">
                    <img src="${this.zurag}" popovertarget="pops">
                    <h3>${this.ner}</h3>
                    <p>${this.une}</p>
                    <button class="rmvbutton" onclick="app.removeFx(${this.id})">Remove</button>
                </article>`
    }
}