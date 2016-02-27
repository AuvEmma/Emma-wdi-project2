var express = require('express');
var users = express.Router();
var bodyParser = require('body-parser');
var db = require('./../db/pg');
pry = require('pryjs');



users.post('/',db.createUser, function(req,res){
  // eval(pry.it)
  res.redirect('/');
})

users.post('/mypage', db.loginUser, function(req,res){
  req.session.user = res.rows;
  req.session.save(function() {
    res.redirect('/mypage')
  });
})

users.get('/mypage', function(req,res){
  res.render('users/mypage');
})





module.exports = users;
