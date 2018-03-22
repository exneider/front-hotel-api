"use strict"

const BluebirdPromise = require('bluebird')
const Mongoose = BluebirdPromise.promisifyAll(require('mongoose'))

const HotelSchema = Mongoose.Schema({
  name: { type: String, required: true },
  stars: { type: Number, required: true },
  price: { type: Number, required: true },
  amenities: { type: Array },
  mealplan: { type: String }
})

module.exports = Mongoose.model('Hotel', HotelSchema)
