// build your `Task` model here

const db = require("../../data/dbConfig");

module.exports = {
    find,
    add,
}

function find() {
    return db("tasks")
}

async function add(task) {
    const [id] = await db('tasks').insert(task)
    return id;
}