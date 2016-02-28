DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS pets CASCADE;
DROP TABLE IF EXISTS users_events_join CASCADE;

CREATE TABLE users (
       users_id serial UNIQUE PRIMARY KEY,
       email VARCHAR(255),
       password TEXT
);


CREATE TABLE events (
       events_id serial UNIQUE PRIMARY KEY,
       name VARCHAR(255),
       users_id integer REFERENCES users,
       img_url VARCHAR(255),
       date DATE,
       time time with time zone,
       location TEXT,
       description TEXT
);

CREATE TABLE pets (
       pets_id serial UNIQUE PRIMARY KEY,
       users_id integer REFERENCES users,
       name VARCHAR(255),
       imgurl VARCHAR(255),
       breed VARCHAR(255),
       funfact TEXT
);
CREATE TABLE users_events_join (
       users_id integer REFERENCES users,
       events_id integer REFERENCES events
);
