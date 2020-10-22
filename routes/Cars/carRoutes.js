const router = require('express').Router();

const {
    getAllCars,
    createCarr
} = require('./controllers/carController');

router.get('/get-cars', getAllCars);

router.post('/add-car', createCarr);

module.exports = router;
