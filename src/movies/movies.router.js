const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

const reviewsRouter = require("../reviews/reviews.router");
const theatersRouter = require("../theaters/theaters.router");

// Send review requests to reviewsRoute
router.use("/:movieId/reviews", controller.movieExists, reviewsRouter);

// Send theater requests to theatersRouter
router.use("/:movieId/theaters", controller.movieExists, theatersRouter);

// Route for getting the general list of movies from /movies/ 
router.route("/").get(controller.list).all(methodNotAllowed);

// Route for getting details on a specific movie using the movie id
router.route("/:movieId").get(controller.read).all(methodNotAllowed);

module.exports = router;
