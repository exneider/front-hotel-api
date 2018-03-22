'use strict'

const hotelController = require('../controllers/hotele.controller');
module.exports = function (app) {

  app.get('/api/hotels', hotelController.getHotels);
  app.get('/api/hotel/:id', hotelController.getHotelById);
  app.post('/api/hotel', hotelController.saveteHotel);
  app.put('/api/hotel', hotelController.updateHotel);
  app.delete('/api/hotel/:id', hotelController.deleteHotel);

};