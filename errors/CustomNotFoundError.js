function createCustomNotFoundError(message) {
	const error = new Error(message);
	error.statusCode = 404;
	error.name = "NotFoundError";
	return error;
}

module.exports = createCustomNotFoundError;
