var express = require('express');
var router = express.Router();
const { getLogs } = require('../database')

/* */
router.get('/', function(req, res, next) {
    const result = getLogs()
    res.send(result);
});


module.exports = router;