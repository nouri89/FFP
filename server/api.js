
import { Router } from "express";

import { Connection } from "./db";

const router = new Router();

const pool = Connection;

router.get("/", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		res.json({ message: "Welcome to Class Planner API" });
	});
	
});
router.get("/users", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		pool.query('SELECT * FROM users', (error, result) => {
        res.json(result.rows);});
	});
});

router.get("/school", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		pool.query('SELECT * FROM school', (error, result) => {
        res.json(result.rows);});
	});
});

router.get("/cohort", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		pool.query('SELECT * FROM cohort', (error, result) => {
        res.json(result.rows);});
	});
});

router.get("/module", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		pool.query('SELECT * FROM module', (error, result) => {
        res.json(result.rows);});
	});
});

router.get("/lesson", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		pool.query('SELECT * FROM lesson', (error, result) => {
        res.json(result.rows);});
	});
});

router.get("/lesson_role", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		pool.query('SELECT * FROM lesson_role', (error, result) => {
        res.json(result.rows);});
	});
});

router.get("/lesson_role_link", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		pool.query('SELECT * FROM lesson_role_link', (error, result) => {
        res.json(result.rows);});
	});
});

router.get("/cohort_lesson_link", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		pool.query('SELECT * FROM cohort_lesson_link', (error, result) => {
        res.json(result.rows);});
	});
});

router.get("/cohort_lesson_user_link", (_, res, next) => {
	
	Connection.connect((err) => {
		if (err) {
			return next(err);
		}
		pool.query('SELECT * FROM cohort_lesson_user_link', (error, result) => {
        res.json(result.rows);});
	});
});

export default router;
