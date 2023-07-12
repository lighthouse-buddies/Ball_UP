DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Courts CASCADE;
DROP TABLE IF EXISTS Games CASCADE;

CREATE TABLE courts (
  id SERIAL PRIMARY KEY ,
  latitude  FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  number_backboards integer,
  full_court boolean NOT NULL,
  lights boolean ,
  created_by integer references Users(id)
);

CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  user_id integer references Users(id),
  courts_id integer references Courts(id),
  created_at timestamp NOT NULL DEFAULT NOW(),
  time_start timestamp NOT NULL,  ,
  time_end timestamp NOT NULL,
  capacity INTEGER CHECK (capacity >= 1 AND capacity <= 10)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL UNIQUE,
  password varchar(255) NOT NULL
);

