var express = require('express');
var events = express.Router();
var bodyParser = require('body-parser');
var db = require('./../db/pg');
pry = require('pryjs');

events.get('/new', function(req,res){
  res.render('events/new', {
    user: req.session.user.email,
    id  : req.session.user.users_id});
})

events.post('/new', db.createEvents, function(req,res){
  res.redirect(`/users/mypage/${req.session.user.users_id}`)
})

events.get('/all', db.allEvents, function(req,res){
  var allEvents = res.rows;
  res.render('events/all', {allEvents: allEvents});
})

module.exports = events;
