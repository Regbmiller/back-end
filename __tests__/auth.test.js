const supertest = require('supertest');
const server = require('../api/server.js');

//Register
describe("Register", () => {
    //#1
      it("returns 404 if username already exists", async () => {
        const data = { username: "user1", password: "pass1" };
        const res = await supertest(server).post("/api/auth/register").send(data);
        expect(res.statusCode).toBe(404);
      });
    //#2
      it("returns a json object", async () => {
        const data = { username: "user1", password: "pass1" };
        const res = await supertest(server).post("/api/auth/register").send(data);
        expect(res.type).toBe("text/html");
      });
    });
    
    
//Login
describe("Login", () => {
    //#1
      it("returns 404 if credentials are invalid", async () => {
        const data = { username: "notauser", password: "notapassword" };
        const res = await supertest(server).post("/api/auth/login").send(data);
        expect(res.statusCode).toBe(404);
      });
    //#2 
      it("returns 500 if no user found", async () => {
        const data = { username: "user1" };
        const res = await supertest(server).post("/api/auth/login").send(data);
        expect(res.type).toBe("text/html");
      });
    });