var express = require('express');
var router = express.Router();
const { applyForLoan } = require('../database')

/* Create new accounts listing. */
router.get('/', function(req, res, next) {
  res.send('Loans Endpoint');
});
 
router.post('/apply', function(req, res, next) {
  const details = Object.values(req.body)
  applyForLoan(details)
  res.send('Tried to apply for loan');
});

module.exports = router;