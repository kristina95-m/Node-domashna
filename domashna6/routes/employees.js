var express = require('express');
var router = express.Router();

const employees = [];

router
    .get('/', (req, res) => {
        res.render('employees', { employees:employees });
    })
    .post('/', (req, res) => {
        employees.push(req.body);
        res.redirect('/employees');
    });

module.exports = router;
