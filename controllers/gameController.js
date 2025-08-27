// const db = require("../storages/usersStorage");
const createCustomNotFoundError = require("../errors/CustomNotFoundError");
const { body, validationResult } = require("express-validator");
const db = require("../storages/db/queries");

async function getGameById(req, res) {
	const { gameId } = req.params.id;
	console.log(gameId);
	const game = await db.getGameById(Number(req.params.id));
	console.log(game[0]);
	if (!game) {
		throw createCustomNotFoundError("Game not found");
	}
	const selectedGame = game[0];

	// res.send(`Game Title: ${game.title}`);
	res.render("gameView", {
		title: "Viewing: " + selectedGame.name,
		message: "Currently viewing: " + selectedGame.name,
		game: selectedGame,
		links: res.locals.links,
	});
}
module.exports = {
	getGameById,
};
