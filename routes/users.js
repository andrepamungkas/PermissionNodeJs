var express = require('express');
var router = express.Router();
var models = require('../models');
var jwt = require('jsonwebtoken');
var expressjwt = require('express-jwt');
var permissions = require('express-jwt-permissions')()

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

router.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    models.User.findOne({
        where: {
            username: username,
            password: password
        }
    }).then(function (user) {
        console.log(user)
        var token = jwt.sign({
            username: user.username,
            permissions: [
                user.role
            ]}, 'super-aman');
        res.json({token: token});
    });
});

router.get('/admin', expressjwt({secret: 'super-aman'}), permissions.check('admin'), function (req, res) {
    res.json({
        status: 'anda admin ya'
    })
});

router.get('/contributor', expressjwt({secret: 'super-aman'}), permissions.check('contributor'), function (req, res) {
    res.json({
        status: 'anda contributor ya'
    })
});

router.get('/reader', expressjwt({secret: 'super-aman'}), permissions.check('reader'), function (req, res) {
    res.json({
        status: 'anda reader ya'
    })
});

module.exports = router;
