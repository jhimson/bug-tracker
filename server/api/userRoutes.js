const express = require("express");

const Router = express.Router();

const { getUsers, registerUser } = require("../controllers/userController");

Router.route("/").get(getUsers).post(registerUser);

module.exports = Router;
