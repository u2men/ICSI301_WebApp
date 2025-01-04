export default class Comment {
    constructor(pid, usr, set, ogn) {
        this.id = 0;
        this.productid = pid;
        this.user = usr;//{ id: 1, name: "" };
        this.setgegdel = set;
        this.ognoo = ogn;//"2024-11-19 16:44:00";    
    }

    render() { 
        return `
        <article class="comment">
            <h4>${this.user.fullName}</h4>
            <div>${this.ognoo}</div>
            <p>${this.setgegdel}</p>
        </article>`;
    }
    
}

export async function load()
{
    const result = await fetch("https://dummyjson.com/comments");
    const data = await result.json();
    return data.comments;
}