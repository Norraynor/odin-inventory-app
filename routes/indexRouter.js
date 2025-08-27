const { Router } = require("express");
const { gamesListGet, aboutGet } = require("../controllers/indexController");
const gameRouter = require("./gameRouter");
const indexRouter = Router();

const games = [
	{ id: 1, title: "Red" },
	{ id: 2, title: "Green" },
	{ id: 3, title: "Blue" },
];

// indexRouter.get("/:userId", getUserById);
indexRouter.use("/game", gameRouter);
indexRouter.use("/about", aboutGet);
indexRouter.use("/", gamesListGet);
// usersRouter.post("/create", usersController.usersCreatePost);
// usersRouter.get("/:id/update", usersController.usersUpdateGet);
// usersRouter.post("/:id/update", usersController.usersUpdatePost);
// usersRouter.post("/:id/delete", usersController.usersDeletePost);

module.exports = indexRouter;
