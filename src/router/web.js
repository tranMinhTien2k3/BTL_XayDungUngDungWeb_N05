const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('main');
});
router.get('/login_register', (req, res) => {
    res.render('login_register');
});

module.exports = router