require('dotenv').config()

const express = require("express");
const FileSync = require('lowdb/adapters/FileSync')

import low from 'lowdb';
import http from "http"
import helmet from "helmet"


import apollo from "~/core/apollo";

(async function () {
  //load Database
  const jobsDbAdapt = new FileSync('../docs/jobs.json'),
        characterDbAdapt = new FileSync('../docs/characteristics.json'),
        characterDb = low(characterDbAdapt),
        jobsDb = await low(jobsDbAdapt)

  const {
    PORT = 8080,
  } = process.env


  const app = express()

  //security
  app.use(helmet())


  apollo.applyMiddleware({ app })


  const httpServer = http.createServer(app)
  httpServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
})().catch(console.error)
