require('module-alias/register')
require('dotenv').config()
const express = require("express");
const http = require("http");
const helmet = require("helmet");

const {apollo} = require("@src/core/apollo");

const {
  PORT = 8080,
} = process.env


const app = express()


app.use(helmet())
apollo.applyMiddleware({ app })


const httpServer = http.createServer(app)
httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
