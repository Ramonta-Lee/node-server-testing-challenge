const db = require("../database/dbConfig.js");

module.exports = {
  addUser,
  find,
  findById,
  remove
};

async function addUser(user) {
  const [id] = await db("users").insert(user, "id");

  return findById(id);
}

function find() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function remove(id) {
  return db("users")
    .where(id, "id")
    .del();
}
