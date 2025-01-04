import Todo, { todoLoader as myLoader, Done} from "./todo.js";

app.complete = Done;

document
    .getElementById("todoSection")
    .insertAdjacentHTML("beforeend",
        (await myLoader())
            .map(t => (new Todo(t))
                .render())
            .join("")
);



