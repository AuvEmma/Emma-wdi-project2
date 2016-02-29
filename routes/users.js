var express = require('express');
var users = express.Router();
var bodyParser = require('body-parser');
var db = require('./../db/pg');
pry = require('pryjs');



users.post('/',db.createUser, function(req,res){
  res.redirect('/');
})

users.post('/mypage/', db.loginUser, function(req,res){
  req.session.user = res.rows;
  req.session.save(function() {
    res.redirect(`/users/mypage/${req.session.user.users_id}`)
  });
})

users.get('/mypage/:id', db.myEvents,function(req,res){
  var eventArr = res.rows;
  res.render('users/mypage', {user: req.session.user.email,
                              id  : req.params.id,
                              events: eventArr,
                              });
})

users.delete('/logout', function(req, res) {
  req.session.destroy(function(err){
    res.redirect('/');
  })
})


module.exports = users;
