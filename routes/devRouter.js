const { Router } = require("express");
const devRouter = Router();
const { getDevById } = require("../controllers/devController");
// gameRouter.get("/:id", (req, res) =>
// 	res.render("game", {
// 		message: "Game: " + req.params.id,
// 	})
// );
devRouter.get("/:id", getDevById);
module.exports = devRouter;
