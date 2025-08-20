function createUsersStorage() {
	let storage = {};
	let id = 0;

	function addUser({ firstName, lastName }) {
		storage[id] = { id, firstName, lastName };
		id++;
	}
	function getUsers() {
		return Object.values(storage);
	}
	function getUser(id) {
		return storage[id];
	}

	function updateUser(id, { firstName, lastName }) {
		storage[id] = { id, firstName, lastName };
	}

	function deleteUser(id) {
		delete storage[id];
	}
	return {
		addUser,
		getUsers,
		getUser,
		updateUser,
		deleteUser,
	};
}

module.exports = createUsersStorage();
