const { Router } = require("express");
const { getUserById } = require("../controllers/indexController");
const indexRouter = Router();

const links = [
	{ href: "/", text: "Home" },
	{ href: "about", text: "About" },
];
const users = ["Rose", "Cake", "Biff"];

indexRouter.get("/", (req, res) =>
	res.render("index", { message: "All users", links: links, users: users })
);
indexRouter.get("/:userId", getUserById);
indexRouter.get("/create", indexController.usersCreateGet);
usersRouter.post("/create", usersController.usersCreatePost);
usersRouter.get("/:id/update", usersController.usersUpdateGet);
usersRouter.post("/:id/update", usersController.usersUpdatePost);
usersRouter.post("/:id/delete", usersController.usersDeletePost);

module.exports = indexRouter;
