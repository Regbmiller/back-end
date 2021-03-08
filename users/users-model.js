const db = require('../database/dbConfig')
const knex = require("knex")
 
function findUsers() {
  return db('users')
}
  
function findUserByID(id) {
  return db("users").where({ id }).first();
}

function addUser(user) {
  return db("users").insert(user)
}

function removeUser(id){
  return db("users").where({ id }).del();
}

function updateUser(id, user) {
  return db("users").where({ id }).update(user);
}

module.exports = {
  findUsers,
  findUserByID,
  addUser,
  removeUser,
  updateUser,
}