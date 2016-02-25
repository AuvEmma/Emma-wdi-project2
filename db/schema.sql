DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS pets;
DROP TABLE IF EXISTS users_events_join;

CREATE TABLE users (
       users_id INTEGER UNIQUE PRIMARY KEY,
       email VARCHAR(255),
       password TEXT
);


CREATE TABLE events (
       events_id INTEGER UNIQUE PRIMARY KEY,
       name VARCHAR(255),
       date DATE,
       time time with time zone,
       location TEXT,
       description TEXT
);

CREATE TABLE pets (
       pets_id INTEGER UNIQUE PRIMARY KEY,
       users_id INTEGER REFERENCES users,
       name VARCHAR(255),
       imgurl VARCHAR(255),
       breed VARCHAR(255),
       funfact TEXT
);
CREATE TABLE users_events_join (
       users_id integer REFERENCES users,
       events_id integer REFERENCES events
);
