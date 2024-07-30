const express = require("express");
const fraganceRouter = require("./fragances.router");
const router = express.Router();

// colocar las rutas aquí

router.use("/fragances", fraganceRouter);
module.exports = router;
