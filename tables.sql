DROP TABLE IF EXISTS pokemon;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pokemon_users;

CREATE TABLE IF NOT EXISTS pokemon (
  id serial PRIMARY KEY,
  name text,
  img text,
  weight varchar,
	height varchar
);

CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  name text
);

CREATE TABLE IF NOT EXISTS pokemon_users (
  id serial PRIMARY KEY,
  pokemon_id integer,
  users_id integer
);

