var pg = require('pg');
var connectionString = "postgres://emmahou:900118@localhost/petmeetup";
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var session = require('express-session');
