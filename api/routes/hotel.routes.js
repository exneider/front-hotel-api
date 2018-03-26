'use strict'

const hotelController = require('../controllers/hotele.controller');
module.exports = function (app) {

  app.get('/api/hotels', hotelController.getHotels);
  app.get('/api/hotel/:id', hotelController.getHotelById);
  app.get('/api/hotels/:name', hotelController.getHotelsByName);
  app.get('/api/hotels/stars/:star1/:star2/:star3/:star4/:star5', hotelController.getHotelsByStars);
  app.post('/api/hotel', hotelController.saveteHotel);
  app.put('/api/hotel', hotelController.updateHotel);
  app.delete('/api/hotel/:id', hotelController.deleteHotel);

};