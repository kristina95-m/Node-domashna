var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', countries: [ {name:'Macedonia'}, {name:'Italy'}, {name:'France'}]});
});

module.exports = router;
