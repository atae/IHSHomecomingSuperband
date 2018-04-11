var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json([{
        id: 1,
        title:"New Website Created!",
        content: "Let's get some content on here!"
    }, {
        id: 2,
        title:"More Announcements",
        content: "Let's get more content on here!"
    }]);
});

module.exports = router;
