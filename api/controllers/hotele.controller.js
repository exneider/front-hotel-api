'use strict';

var mongoose = require('mongoose'),
    Hotel = mongoose.model('Hotel');

exports.getHotels = function (req, res) {
    Hotel.find({}, function (err, hotels) {
        if (err) {
            return res.json(err);
        } else if (hotels.length === 0) {
            res.statusCode = 204;
        }
        res.json(hotels);

    });
};

exports.saveteHotel = function (req, res) {
    var new_hotel = new Hotel(req.body);
    new_hotel.save(function (err, hotel) {
        if (err) {
            return res.json(err);
        }
        res.json(hotel);
    });
};

exports.getHotelById = function (req, res) {
    Hotel.findById(req.params.id, function (err, hotel) {
        console.log(req.params.id);
        if (err) {
            return res.json(err);
        } else if (hotel === null) {
            res.statusCode = 204;
        }
        res.json(hotel);
    });
};

exports.updateHotel = function (req, res) {
    var new_hotel = new Hotel(req.body);
    Hotel.findOneAndUpdate({ _id: new_hotel._id }, req.body, { new: true }, function (err, hotel) {
        if (err) {
            res.json(err);
        }
        res.json(hotel);
    });
};

exports.deleteHotel = function (req, res) {
    Hotel.remove({
        _id: req.params.id
    }, function (err, hotel) {
        if (err) {
            res.json(err);
        }  
        res.json(hotel);
    });
};