require('dotenv').config()

const express = require("express");

import http from "http"
import helmet from "helmet"


import apollo from "~/core/apollo";





(async function () {
  const {
    PORT = 8080
  } = process.env






  // console.log(dataBase.read());

  const app = express()

  //security
  app.use(helmet())


  apollo.applyMiddleware({ app })


  const httpServer = http.createServer(app)
  httpServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
})().catch(console.error)
