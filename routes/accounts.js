var express = require('express');
var router = express.Router();
const { createNewAccount } = require('../database')

/* Create new accounts listing. */
router.get('/', function(req, res, next) {
  res.send('Accounts Endpoint');
});
 
router.post('/create', function(req, res, next) {
  const details = Object.values(req.body)
  createNewAccount(details)
  res.send('Tried to create account');
});

module.exports = router;