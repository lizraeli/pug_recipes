const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    res.render('layout', {greeting: 'Welcome to my recipe page'})
})
  
module.exports = router;