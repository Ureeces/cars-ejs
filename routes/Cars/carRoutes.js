const router = require('express').Router();

const {
    getAllCars,
    createCarr
} = require('./controllers/carController');

// GET Routes
// *******************************************************************
router.get('/', (req, res) => {
    return res.redirect('/cars/get-cars');
});

router.get('/get-cars', getAllCars);

router.get('add-car', (req, res) => {
    return res.render('main/add-car');
});

// *******************************************************************
// POST Routes
router.post('/add-car', createCarr);

module.exports = router;

// *******************************************************************