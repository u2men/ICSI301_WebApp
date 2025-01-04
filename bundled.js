class Todo {
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
function Done(todoId) { 
    alert("DONE!");
}
async function todoLoader() {
    const result = await fetch("https://dummyjson.com/todos");      
    const data = await result.json();
    return data.todos;
}

app.complete = Done;

document
    .getElementById("todoSection")
    .insertAdjacentHTML("beforeend",
        (await todoLoader())
            .map(t => (new Todo(t))
                .render())
            .join("")
);
