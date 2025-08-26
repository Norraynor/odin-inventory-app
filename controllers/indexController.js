// const db = require("../storages/usersStorage");
const createCustomNotFoundError = require("../errors/CustomNotFoundError");
const { body, validationResult } = require("express-validator");
const db = require("../storages/db/queries");

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

const validateUser = [
	body("firstName")
		.trim()
		.isAlpha()
		.withMessage(`First name ${alphaErr}`)
		.isLength({ min: 1, max: 10 })
		.withMessage(`First name ${lengthErr}`),
	body("lastName")
		.trim()
		.isAlpha()
		.withMessage(`Last name ${alphaErr}`)
		.isLength({ min: 1, max: 10 })
		.withMessage(`Last name ${lengthErr}`),
];
async function getUserById(req, res) {
	const { userId } = req.params;

	const user = await db.getUserById(Number(userId));

	if (!user) {
		throw createCustomNotFoundError("User not found");
	}

	res.send(`User Name: ${user.name}`);
}
function usersListGet(req, res) {
	res.render("index", {
		title: "User list",
		users: usersStorage.getUsers(),
	});
}
function aboutGet(req, res) {
	res.render("about", {
		title: "About",
		message: "This is the about page",
		links: res.locals.links,
	});
}
function usersCreateGet(req, res) {
	res.render("createUser", {
		title: "Create user",
	});
}
async function getUsernames(req, res) {
	const usernames = await db.getAllUsernames();
	console.log("Usernames: ", usernames);
	res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function createUsernameGet(req, res) {
	// render the form
}

async function createUsernamePost(req, res) {
	const { username } = req.body;
	await db.insertUsername(username);
	res.redirect("/");
}

exports.usersCreatePost = [
	validateUser,
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).render("createUser", {
				title: "Create user",
				errors: errors.array(),
			});
		}
		const { firstName, lastName } = req.body;
		usersStorage.addUser({ firstName, lastName });
		res.redirect("/");
	},
];

exports.usersUpdateGet = (req, res) => {
	const user = usersStorage.getUser(req.params.id);
	res.render("updateUser", {
		title: "Update user",
		user: user,
	});
};

exports.usersUpdatePost = [
	validateUser,
	(req, res) => {
		const user = usersStorage.getUser(req.params.id);
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).render("updateUser", {
				title: "Update user",
				user: user,
				errors: errors.array(),
			});
		}
		const { firstName, lastName } = req.body;
		usersStorage.updateUser(req.params.id, { firstName, lastName });
		res.redirect("/");
	},
];
// Tell the server to delete a matching user, if any. Otherwise, respond with an error.
exports.usersDeletePost = (req, res) => {
	usersStorage.deleteUser(req.params.id);
	res.redirect("/");
};

module.exports = {
	getUserById,
	usersListGet,
	usersCreateGet,
	getUsernames,
	createUsernameGet,
	createUsernamePost,
};
