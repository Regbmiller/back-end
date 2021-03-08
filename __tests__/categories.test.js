const supertest = require("supertest")
const server = require('../api/server.js');
const db = require("../data/dbConfig");
const categories = require("../categories/categories-router");

describe("categories-router", () => {

    describe("Failed to get categories", () => {
  it("gets all categories", async () => {
    const res = await supertest(server).get("/categories")
    expect(res.statusCode).toEqual(500)
  })
 
    it("If specified ID does not exist", async () => {
      const res = await supertest(server).get("/categories/1")
      expect(res.statusCode).toEqual (500)
      expect(res.type).toBe("application/json")
    })

    it("GET /categories/:id", async () => {
      const res = await supertest(server).get("/categories/1")
      expect(res.type).toEqual ("application/json")
    })   
})

})