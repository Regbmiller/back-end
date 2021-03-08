const supertest = require("supertest")
const request = require("supertest")
const server = require('../api/server.js');
      
describe("users-router", () => {
//gets all users
  //#1
    it("unable to get users", async () => {
      let resStatus = await request(server)
      .get("/users")
      .then(res => res.status)
        expect(resStatus).toEqual(500)
    })
  //#2
    it("GET /users", async () => {
      let res = await supertest(server)
      .get("/users")
      expect(res.type).toBe("application/json")
    })

    it("GET /users/:id", async () => {
      let res = await supertest(server).get("/users/1")
      expect(res.type).toBe("application/json")
    })   
})
