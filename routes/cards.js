var express = require('express');
var router = express.Router();

/* GET cards page. */
router.get('/', function(req, res, next) {
    res.render('cards', { title: 'Express' });
});

module.exports = router;