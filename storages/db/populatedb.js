#! /usr/bin/env node

// const { Client } = require("pg");
const pool = require("./pool");

const SQL = `
CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  year INTEGER,
  genre VARCHAR ( 255 ),
  platform VARCHAR ( 255 ),
  developer TEXT[],
  generation VARCHAR ( 255 ),
  pokemon_range VARCHAR ( 255 )
);
CREATE TABLE IF NOT EXISTS developers(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
);

CREATE TABLE IF NOT EXISTS platforms(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
);

CREATE TABLE IF NOT EXISTS genres(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
);

CREATE TABLE IF NOT EXISTS generations(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 ),
  year TEXT[2],
);
INSERT INTO games (name, year, genre, platform, developer, generation, pokemon_range) 
VALUES
  ('Red and Green', 1996, 'RPG', 'Game Boy', ARRAY['Satoshi Tajiri'], 'First', '0-151'),
  ('Red and Blue', 1996, 'RPG', 'Game Boy', ARRAY['Satoshi Tajiri'], 'First', '0-151'),
  ('Yellow', 1998, 'RPG', 'Game Boy Color', ARRAY['Satoshi Tajiri'], 'First', '0-151');

INSERT INTO developers (name) VALUES
  ('Satoshi Tajiri');

 INSERT INTO platforms (name) VALUES
('Game Boy'),
('Game Boy Color');

INSERT INTO genres (name) VALUES
('RPG');
INSERT INTO generations(name,year) VALUES
('First', ARRAY['1996','1998']);
  `;

async function main() {
	console.log("seeding...");
	// const client = new Client({
	// 	connectionString:
	// 		"postgresql://<role_name>:<role_password>@localhost:5432/top_users",
	// });
	// await client.connect();
	await pool.query(SQL);
	// await client.end();
	console.log("done");
}

main();
