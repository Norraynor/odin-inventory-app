const { Router } = require("express");
const gameRouter = Router();
const { getGameById } = require("../controllers/gameController");
// gameRouter.get("/:id", (req, res) =>
// 	res.render("game", {
// 		message: "Game: " + req.params.id,
// 	})
// );
gameRouter.get("/:id", getGameById);
module.exports = gameRouter;
