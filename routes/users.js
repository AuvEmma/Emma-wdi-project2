var express = require('express');
var users = express.Router();
var bodyParser = require('body-parser');
var db = require('./../db/pg');
pry = require('pryjs');



users.post('/',db.createUser, function(req,res){
  res.redirect('/');
})

users.post('/mypage/:id', db.loginUser, function(req,res){
  req.session.user = res.rows;
  req.session.save(function() {
    res.redirect(`/users/mypage/${req.session.user.users_id}`)
  });
})

users.get('/mypage/:id', function(req,res){
  res.render('users/mypage', {user: req.session.user.email,
                              id  : req.params.id});
})





module.exports = users;
