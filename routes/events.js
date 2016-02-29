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
  for(var i = 0;i<allEvents.length;i++){
    var options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short'};
    allEvents[i].date = allEvents[i].date.toLocaleDateString('en-US', options);
  }
  res.render('events/all', {allEvents: allEvents,
                            user     : req.session.user.email,
                            id       : req.session.user.users_id});
})

module.exports = events;
