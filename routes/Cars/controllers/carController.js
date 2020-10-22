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
        Car.findOne({ name: req.body.name })
        .then((existingCar) => {
            if(existingCar) {
                res.send('Car already exists within list.');
            } else {
                if(!req.body.name || req.body.type || req.body.year) {
                    return res.send('All Inputs Are Required.');
                }

                let newCar = new Car({
                    name: req.body.name,
                    type: req.body.type,
                    year: req.body.year,
                });

                newCar.save()
                .then((createdCar) => {
                    return res.redirect('/cars/get-cars');
                })
                .catch((err) => res.status(500).json({ message: 'Word Was Not Created:', err })) 
            }
        })
    }
}