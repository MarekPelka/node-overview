var randomWords = require('random-words');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var columns = [
        { name: 'Material', numeric: false },
        { name: 'Description', numeric: false },
        { name: 'Quantity', numeric: true },
        { name: 'Price', numeric: true },
        { name: 'Value', numeric: false },
    ]
    var objectList = []
    for (let i = 0; i < 100; i++) {
        objectList[i] = {}
        columns.forEach(function(col) {
            // str = str.charAt(0).toUpperCase() + str.slice(1)
            if (col.name == 'Quantity')
                objectList[i][col.name] = Math.round(Math.random() * 120)
            else if (col.name == 'Price')
                objectList[i][col.name] = Math.round(Math.random() * 1000 + 1) / 100
            else if (col.name == 'Value')
                objectList[i][col.name] = Math.round(Math.random() * 1) ? 'high' : 'low'
            else
                objectList[i][col.name] = randomWords(5).toString().split(',').join(' ')
        })
    }
    res.render('index', {
        title: 'Express',
        columns: columns,
        list: objectList,
    });
});

module.exports = router;