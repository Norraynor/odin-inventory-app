const express = require("express");
const app = express();
const path = require("node:path");
const { body, validationResult } = require("express-validator");

const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);

// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
	console.error(err);
	res
		.status(err.statusCode || 500)
		.send(err.message || "Internal Server Error");
});

const PORT = 3000;
app.listen(PORT, (error) => {
	// This is important!
	// Without this, any startup errors will silently fail
	// instead of giving you a helpful error message.
	if (error) {
		throw error;
	}
	console.log(`My first Express app - listening on port ${PORT}!`);
});
