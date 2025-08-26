// const db = require("../storages/usersStorage");
const createCustomNotFoundError = require("../errors/CustomNotFoundError");
const { body, validationResult } = require("express-validator");
const db = require("../storages/db/queries");

async function getDevById(req, res) {
	const { devId } = req.params;

	const dev = await db.getDevById(Number(devId));

	if (!dev) {
		throw createCustomNotFoundError("Dev not found");
	}

	res.send(`Dev Title: ${dev.title}`);
}
module.exports = {
	getDevById,
};
