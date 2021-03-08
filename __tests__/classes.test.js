const supertest = require("supertest")
const server = require('../api/server.js');
const db = require("../data/dbConfig")

describe("/classes", () => {
    it("GET /classes", async () => {
      const res = await supertest(server).get("/classes")
      expect(res.statusCode).toBe(401)
    })
 
    it("GET /classes", async () => {
      const res = await supertest(server).get("/classes")
      expect(res.type).toBe("application/json")
    })

    it("the specified ID does not exist", async () => {
      const res = await supertest(server).get("/classes/1")
      expect(res.statusCode).toBe(500)
      expect(res.type).toBe("application/json")
    })
   
    it("GET /classes/:id", async () => {
      const res = await supertest(server).get("/classes/1")
      expect(res.type).toBe("application/json")
    })   
})