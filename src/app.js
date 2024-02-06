if (process.env.USER) require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();
const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");
const reviewsRouter = require("./reviews/reviews.router");

// TODO: Add your code here
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(cors());  // to enable CORS for the server
app.use(express.json());

// Enable the routes by specifying the path and router for each component
app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter);
app.use("/reviews", reviewsRouter);

// Error handlers
app.use(notFound);
app.use(errorHandler);

module.exports = app;
