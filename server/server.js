


require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const db = require("./db");
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

const { Pool } = require("pg");
const { PopoverTitle } = require("react-bootstrap");

let pool;
let config;

if (process.env.DATABASE_URL) {
	//it's set in Heroku
	const connectionString = process.env.DATABASE_URL;
	config = {
		connectionString: connectionString,
		sslmode: require,
		ssl: {
			rejectUnauthorized: false,
		},
	};
} else {
	//default local config
	config = {
		host: "localhost",
		user: "Owner", 
		database: "class_planner",
		password: "12345",
		port: 5432,
	};
}
pool = new Pool(config);  


const port = parseInt(process.env.PORT || "3001");

app.get("/", async (req, res) => {
	try {
		res.send("Welcome to CYF volunteers website");
	} catch (error) {
		console.log(error.message);
	}
});

app.get("/lesson", async (req, res) => {
	try {
		const results = await pool.query(
			"SELECT m.modulename , l.name  , l.Date ,l.time , l.id  FROM lessons l INNER JOIN modules m ON m.UniqueID=l.module_id;"
		);

		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows,
		});
	} catch (error) {
		console.log(error.message);
	}
});

app.get("/lesson/:id", async (req, res) => {
	try {
		const results = await pool.query("SELECT * FROM lesson WHERE id=$1", [
			req.params.id,
		]);
		res.status(200).json({
			status: "success",
			results: results.rows.length,
			data: results.rows[0],
		});
	} catch (error) {
		console.log(error.message);
	}
});

app.listen(port, () => {
	console.log(`server is up and listening in port ${port}`);
});



/*
import http from "http";

import app from "./app";

const port = parseInt(process.env.PORT || "3000");

const server = http.createServer(app);

server.listen(port);

server.on("listening", () => {
	const addr = server.address();
	const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
	// eslint-disable-next-line no-console
	console.log(`Listening on ${bind}`);
});

*/
