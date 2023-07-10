DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Courts CASCADE;
DROP TABLE IF EXISTS Games CASCADE;

CREATE TABLE Courts (
  id SERIAL PRIMARY KEY ,
  location point NOT NULL,
  number_backboards integer,
  full_court boolean NOT NULL,
  lights boolean ,
  created_by integer references Users(id)
);

CREATE TABLE Games (
  id SERIAL PRIMARY KEY,
  user_id integer references Users(id),
  courts_id integer references Courts(id),
  time_start time  ,
  time_end time,
  capacity INTEGER CHECK (capacity >= 1 AND capacity <= 10)
);

CREATE TABLE Users (
  id SERIAL PRIMARY KEY,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL UNIQUE,
  password varchar(255) NOT NULL
);

