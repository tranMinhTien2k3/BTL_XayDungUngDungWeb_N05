const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('main');
});
router.get('/home', (req, res) => {
    res.render('main');
});
router.get('/login_register', (req, res) => {
    res.render('login_register');
});

router.get('/introduce', (req, res) => {
    res.render('intro');
});

router.get('/location', (req, res) => {
    res.render('loca');
});

router.get('/experience', (req, res) => {
    res.render('exp');
});



module.exports = router