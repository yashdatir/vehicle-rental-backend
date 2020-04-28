var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  var token = jwt.sign({ username: req.body.username,password: req.body.password }, 'abcd');
  res.send(JSON.stringify({ username: req.body.username,token: token }));
});

module.exports = router;
