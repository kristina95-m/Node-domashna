var express = require('express');
var router = express.Router();

const countries = [];

/* GET users listing. */
router
    .get('/', (req, res) => {
        res.render('countries/index', {countries: countries})
    })
    .get('/create', (req, res) => {
        res.render('countries/create');
})
    .post('/', (req, res) => {
        countries.push(req.body);
        res.redirect('/countries');
    })

module.exports = router;