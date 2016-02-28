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











module.exports = events;
