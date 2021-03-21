/* eslint-disable camelcase */
const asyncHandler = require("express-async-handler");

const {
  fetchUsers,
  findEmail,
  createNewUser,
} = require("../db/models/userModel");
const { generateToken } = require("../utils/auth");

// ? @Description    Fetch all users
// ? @Route          GET /api/v1/users
// ? @Access         Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const { rows } = await fetchUsers();
  if (rows) {
    res.status(200).json(rows);
  } else {
    res.status(404);
    throw new Error("No users found in the database");
  }
});

// ? @Description    Add new user
// ? @Route          POST /api/v1/users
// ? @Access         Private/Admin
const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const userExists = await findEmail(req.body.email);

  if (userExists.rowCount) {
    res.status(400);
    throw new Error("Email already exists!");
  }

  const newUser = await createNewUser(req.body);

  const { rows, rowCount } = newUser;
  const { user_id, firstname, lastname, email, is_admin } = rows[0];

  if (rowCount) {
    res.status(201).json({
      user_id,
      firstname,
      lastname,
      email,
      is_admin,
      token: generateToken(user_id),
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong! Invalid user data");
  }
});

module.exports = {
  getUsers,
  registerUser,
};
