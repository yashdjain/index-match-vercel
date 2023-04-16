var express = require('express');
var router = express.Router();
const { getLogs } = require('../database')

/* */
router.get('/', async function(req, res, next) {
    res.send(await getLogs())
//   .then(logs => {
//     // Handle the retrieved logs data
//     res.send(logs);
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the fetch
//     console.error('Failed to fetch logs:', error);
//   });
});

module.exports = router;