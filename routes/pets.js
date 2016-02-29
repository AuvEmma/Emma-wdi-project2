var express = require('express');
var pets = express.Router();
var bodyParser = require('body-parser');
var db = require('./../db/pg');
pry = require('pryjs');

pets.get('/all',db.allPets,function(req,res){
  var allPets = res.rows;

  res.render('pets/allpets', {
    allPets: allPets,
    user: req.session.user.email,
    id  : req.session.user.users_id});

})

pets.get('/', db.myPets, function(req,res){
  var myPets = res.rows;
  res.render('pets/mypets', {
    myPets: myPets,
    user: req.session.user.email,
    id  : req.session.user.users_id});
})

pets.get('/new', function(req,res){
  res.render('pets/newpets', {
    user: req.session.user.email,
    id  : req.session.user.users_id});
})

pets.post('/new', db.addPets, function(req,res){
  res.redirect('/pets')
})


module.exports = pets;
