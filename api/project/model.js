// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = {
    find,
    add,
}

function find() {
    return db("projects")
}

async function add(project) {
    const id = await db('projects').insert(project)
    return id;
}