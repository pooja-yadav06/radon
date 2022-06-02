const express = require('express');
const externalModule = require('../logger/logger')
const helper =require('../util/helper')
const format=require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
   externalModule.welcome();
   helper.abc();
   helper.xyz();
   helper.ijk();
   format.trimy();
   

    

    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    

    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason