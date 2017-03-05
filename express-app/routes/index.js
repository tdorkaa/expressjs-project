var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test/:name', function(req, res, next) {
  res.render('test', {output: req.params.name});
});

router.post('/test/submit', function(req, res, next) {
  var name = req.body.name;
  res.redirect('/test/' + name);
});

module.exports = router;