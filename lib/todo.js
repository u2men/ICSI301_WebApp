export default class Todo {
    constructor(todoObj) {
        this.id = todoObj.id;
        this.task = todoObj.todo;
        this.done = todoObj.completed;
    }
    render() { 
        return `
            <article>
                <h4>${this.task}</h4>
                <input onclick="Done(${this.id})" type="checkbox" ${this.done?"checked":""}>
            </article>`
    }

}
export function fx() { alert("hereggui"); }
export function Done(todoId) { 
    alert("DONE!");
}
export async function todoLoader() {
    const result = await fetch("https://dummyjson.com/todos");      
    const data = await result.json();
    return data.todos;
}

class Validation {
    constructor(parameters) {

    }
}