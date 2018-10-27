var randomWords = require('random-words');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var objectList = []
    for (let i = 0; i < 100; i++) {
        var str = randomWords(1).toString()
        str = str.charAt(0).toUpperCase() + str.slice(1)
        objectList[i] = {
            material: str,
            quantity: Math.round(Math.random() * 120),
            price: Math.round(Math.random() * 1000 + 1) / 100
        };

    }
    res.render('index', {
        title: 'Express',
        list: objectList,
    });
});

module.exports = router;