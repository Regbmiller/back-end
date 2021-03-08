const request = require('supertest');
const server = require('../api/server.js');

describe('server.js', () => {
    describe('GET/', () => {
        it('should return status code 200 api working', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        });

        it('should return JSON', async () => {
            const res = await request(server).get('/');
            expect(res.type).toBe('application/json');
        });

        it('should return { status: "api working" }', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({ status: 'api working'});
        });
    });    
})