const db = require('../data/dbConfig')
const knex = require("knex")

function addUser(user) {
  return db("users").insert(user)
}
function findBy(filter) {
  return db('users').where(filter)
}

module.exports = {
  addUser,
  findBy
}