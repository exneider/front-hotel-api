"use strict"

let config = {
  basePath: "http://localhost",
  port: 3000,
  db: "mongodb://localhost:27017/hotel",
  cors: {
    credentials: true,
    origins: ['http://localhost:8080']
  }
}

module.exports = config
