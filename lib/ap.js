import Comment, {load as commentLoader } from "./comment.js";

app.comments = await commentLoader();

const htmlComments = app
    .comments
    .map(
        c => (new Comment(c.postid, c.user, c.body, c.likes))
            .render())
    .join("");

const coms = document.getElementById("coms");
coms.innerHTML = htmlComments;