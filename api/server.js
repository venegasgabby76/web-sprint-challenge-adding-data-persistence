// build your server here
const express = require("express");
const helmet = require("helmet")

const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router")
const taskRouter = require("./task/router")

const server = express();

server.use(express.json())
server.use(helmet())


server.use("/api/projects", projectRouter)
server.use("/api/resources", resourceRouter)
server.use("/api/tasks", taskRouter)

module.exports = server;