const pool = require("./pool");

async function getAllGames() {
	const { rows } = await pool.query("SELECT * FROM games ORDER BY id");
	return rows;
}

async function getGameById(id) {
	const { rows } = await pool.query("SELECT * FROM games WHERE id = $1", [id]);
	return rows;
}
async function insertUsername(username) {
	await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

module.exports = {
	getAllGames,
	getGameById,
	insertUsername,
};
