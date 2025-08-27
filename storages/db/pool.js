const { Pool } = require("pg");
require("dotenv").config();
// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
//FIRST WAY
module.exports = new Pool({
	host: process.env.PGHOST,
	user: process.env.PGUSER,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: 5432, // The default port
});
//SECOND WAY
// // Again, this should be read from an environment variable
// module.exports = new Pool({
//   connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
// });
