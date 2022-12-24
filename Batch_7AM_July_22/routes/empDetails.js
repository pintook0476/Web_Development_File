var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data1 = {
    empname: 'Raj',
    gender: 'Male'
  }
  data1 = JSON.stringify(data1);
  res.send(data1);
});

module.exports = router;
