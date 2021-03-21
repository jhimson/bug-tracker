const db = require("..");

const fetchUsers = () => db.query("SELECT * FROM tbl_users");

module.exports = {
  fetchUsers,
};
