const Car = require('../models/Car');

module.exports = {
    getAllCars: (req, res) => {
        Car.find()
        .then((allCars) => {
            return res.render('main/index', { carsList: allCars });
        })
        .catch((err) => res.send('Something went wrong:', err));
    },

    createCarr: (req, res) => {

    }
}