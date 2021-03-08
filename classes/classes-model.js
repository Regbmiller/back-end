const db = require('../database/dbConfig')
const knex = require("knex")

  function findClasses() {
    return db('classes')
  }
  
  function addClass(recipe) {
    return db("classes")
      .insert(recipe)
  }
  
  function getClassById(id) {
      return db("classes").where({ id }).first();
    }

  
  function removeClass(id){
      return db("classes").where({ id }).del();
  }
    
function updateClass(id, recipe) {
    return db("classes").where({ id }).update(recipe);
  }
  
  
  module.exports = {
      findClasses,
      addClass, 
      getClassById, 
      removeClass,
      updateClass
    
  }