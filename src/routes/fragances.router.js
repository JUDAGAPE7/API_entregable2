const {
  getAll,
  create,
  getOne,
  destroy,
  update,
} = require("../controllers/fragances.controllers");
const express = require("express");

const fraganceRouter = express.Router();

fraganceRouter.route("/").get(getAll).post(create);
fraganceRouter.route("/:id").get(getOne).delete(destroy).put(update);

module.exports = fraganceRouter;
