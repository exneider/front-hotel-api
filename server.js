
const config = require('./api/config/api.config')
const mongoose = require('mongoose')

const express = require('express')
const app = express()
const Hotel = require('./api/models/hotel.model') //created model loading here
const bodyParser = require('body-parser')

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
// use it before all route definitions

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const routes = require('./api/routes/hotel.routes'); //importing route
routes(app); //register the route

mongoose.connect(config.db, (err) => {
  if (err)
    return console.error("Error al conectar con la base de datos")

  app.listen(config.port, () => {
    console.log(`API Rest corriendo en http://localhost:${config.port}`)
  })
})
 