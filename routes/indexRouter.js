const { Router } = require("express");
// const { getUserById } = require("../controllers/indexController");
const gameRouter = require("./gameRouter");
const indexRouter = Router();

const games = [
	{ id: 1, title: "Red" },
	{ id: 2, title: "Green" },
	{ id: 3, title: "Blue" },
];

indexRouter.get("/", (req, res) =>
	res.render("index", {
		title: "Game List",
		message: "All games",
		links: res.locals.links,
		games: games,
	})
);
// indexRouter.get("/:userId", getUserById);
indexRouter.get("/game", gameRouter);
indexRouter.get("/about", (req, res) =>
	res.render("about", {
		title: "About",
		message: "This is the about page",
		links: res.locals.links,
	})
);
// usersRouter.post("/create", usersController.usersCreatePost);
// usersRouter.get("/:id/update", usersController.usersUpdateGet);
// usersRouter.post("/:id/update", usersController.usersUpdatePost);
// usersRouter.post("/:id/delete", usersController.usersDeletePost);

module.exports = indexRouter;
