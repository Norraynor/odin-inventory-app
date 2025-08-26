// const db = require("../storages/usersStorage");
const createCustomNotFoundError = require("../errors/CustomNotFoundError");
const { body, validationResult } = require("express-validator");
const db = require("../storages/db/queries");

async function getGenreById(req, res) {
	const { genreId } = req.params;

	const genre = await db.getGenreById(Number(genreId));

	if (!genre) {
		throw createCustomNotFoundError("Game not found");
	}

	res.send(`Genre Title: ${genre.title}`);
}
module.exports = {
	getGenreById,
};
