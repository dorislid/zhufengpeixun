var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/iphone7', function(req, res, next) {
  res.render('index', { title: 'iphone7' });
});

module.exports = router;
