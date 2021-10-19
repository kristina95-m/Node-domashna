var express = require('express');
var router = express.Router();

const cars = [];


router
    .get('/', (req, res) => {
        res.render('cars', { cars:cars });
    })
    .post('/', (req, res) => {
        cars.push(req.body);
        res.redirect('/cars');
    });

module.exports = router;
