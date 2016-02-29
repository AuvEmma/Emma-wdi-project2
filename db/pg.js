var pg = require('pg');
var connectionString = "postgres://emmahou:900118@localhost/petmeetup";
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var session = require('express-session');
pry = require('pryjs')

function loginUser(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    pg.connect(connectionString, function(err, client, done) {
      if (err) {
        done()
        console.log(err)
        return res.status(500).json({success: false, data: err})
      }

      var query = client.query("SELECT * FROM users WHERE email LIKE ($1);", [email], function(err, results) {
        done()
        if (err) {
          return console.error('error running query', err)
        }

        if (results.rows.length === 0) {
          res.status(204).json({success: true, data: 'no content'})
        }else if (bcrypt.compareSync(password, results.rows[0].password) ){
          res.rows = results.rows[0]
          next()
        }
      })
    })
}


function createSecure(email, password, callback) {
  //hashing the password given by the user at sign up
  bcrypt.genSalt(function(err, salt){
    bcrypt.hash(password, salt, function(err, hash){
      //this call back save the user to our database with hashed password
      callback(email,hash);
    })
  })
}

function createUser(req, res, next) {
    createSecure(req.body.email, req.body.password, saveUser);
  function saveUser(email, hash){
    pg.connect(connectionString, function(err,client,done){
      if(err){
        done()
        console.log(err);
        return res.status(500).json({success:false, data: err})
      }

      var query = client.query("INSERT INTO users(email, password) VALUES ($1, $2);", [email, hash], function(err, result){
        done()
        if(err){
          return console.error('error running query', err);
        }
        next()
      })
    })
  }
}

function createEvents(req, res, next) {

    var name = req.body.name;
    var users_id = req.body.users_id;
    var img_url = req.body.img_url;
    var date = req.body.date;
    var time = req.body.time;
    var location = req.body.location;
    var description = req.body.description;
    var email = req.body.email;

    pg.connect(connectionString, function(err, client, done){
      if (err) {
        done()
        console.log(err)
        return res.status(500).json({success: false, data: err})
      }

      var query = client.query("INSERT INTO events(name, users_id, img_url, date,time,location, description, email) VALUES ($1,$2,$3,$4,$5,$6,$7,$8);",[name, users_id, img_url, date,time,location, description, email], function(err, results) {
        done()
        if (err) {
          return console.error('error running query', err)
        }
          next()
        })
      })
    }

function myEvents(req,res,next){
      var users_id = req.session.user.users_id
      pg.connect(connectionString, function(err, client, done){
        if (err) {
          done()
          console.log(err)
          return res.status(500).json({success: false, data: err})
        }

        var query = client.query("SELECT * from events WHERE users_id=($1);",[users_id], function(err, results) {
          done()
          if (err) {
            return console.error('error running query', err)
          }
            res.rows = results.rows;
            next()
          })
        })

}

function allEvents(req,res,next){
  pg.connect(connectionString, function(err, client, done){
    if (err) {
      done()
      console.log(err)
      return res.status(500).json({success: false, data: err})
    }

    var query = client.query("SELECT * from events;",function(err, results) {
      done()
      if (err) {
        return console.error('error running query', err)
      }
        res.rows = results.rows;
        next()
      })
    })
}

function allPets(req,res,next){
  pg.connect(connectionString, function(err, client, done){
    if (err) {
      done()
      console.log(err)
      return res.status(500).json({success: false, data: err})
    }

    var query = client.query("SELECT * from pets;",function(err, results) {
      done()
      if (err) {
        return console.error('error running query', err)
      }
        res.rows = results.rows;
        next()
      })
    })
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.createEvents = createEvents;
module.exports.myEvents = myEvents;
module.exports.allEvents = allEvents;
module.exports.allPets = allPets;
