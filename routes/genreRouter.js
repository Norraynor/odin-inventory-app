const { Router } = require("express");
const genreRouter = Router();
const { getGenreById } = require("../controllers/genreController");
// gameRouter.get("/:id", (req, res) =>
// 	res.render("game", {
// 		message: "Game: " + req.params.id,
// 	})
// );
genreRouter.get("/:id", getGenreById);
module.exports = genreRouter;
