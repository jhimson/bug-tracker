const asyncHandler = require("express-async-handler");

const { fetchUsers } = require("../db/models/userModel");

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

module.exports = {
  getUsers,
};
