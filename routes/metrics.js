var express = require('express');
var router = express.Router();
const { calculateSum } = require('../database')

/* Create new accounts listing. */
router.get('/', function(req, res, next) {
  res.send('Metrics Endpoint');
});
 
router.get('/sum', async function(req, res, next) {
  const columnName = req.query.columnName.toString()
  res.send(await calculateSum(columnName))
});

module.exports = router;