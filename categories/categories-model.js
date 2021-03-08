const db = require('../database/dbConfig')
const knex = require("knex")
 
  function findCategories() {
    return db('categories')
  }
    
  function findCategoryByID(id) {
    return db("categories").where({ id }).first();
  }

  function addCategories(category) {
    return db("categories")
      .insert(category)
  }
  function removeCategory(id){
    return db("categories").where({ id }).del();
}
  
function updateCategory(id, category) {
    return db("categories").where({ id }).update(category);
  }

module.exports = {
  findCategories,
  findCategoryByID, 
  addCategories, 
  removeCategory,
  updateCategory
}