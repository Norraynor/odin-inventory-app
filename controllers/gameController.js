// const db = require("../storages/usersStorage");
const createCustomNotFoundError = require("../errors/CustomNotFoundError");
const { body, validationResult } = require("express-validator");
const db = require("../storages/db/queries");

async function getGameById(req, res) {
	const { gameId } = req.params;

	const game = await db.getGameById(Number(gameId));

	if (!game) {
		throw createCustomNotFoundError("Game not found");
	}

	res.send(`Game Title: ${game.title}`);
}
module.exports = {
	getGameById,
};
