const db = require("..");

const fetchUsers = () => db.query("SELECT * FROM tbl_users");

const findEmail = (email) =>
  db.query({
    text: `SELECT * FROM tbl_users WHERE email = $1`,
    values: [email],
  });

module.exports = {
  fetchUsers,
  findEmail,
};
