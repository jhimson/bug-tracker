const express = require("express");

const Router = express.Router();

const { getUsers } = require("../controllers/userController");

Router.route("/").get(getUsers);

module.exports = Router;
