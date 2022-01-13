'use strict';

const { app } = require('../lib/server.js');
const { db } = require('../lib/models/recordModel');
const supertest = require('supertest');
const request = supertest(app);

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe('Testing the artists router', () => {
  it('should read from artist data', async () => {
    const response = await request.get('/artist');

    expect(response.status).toEqual(200);
    expect(response.body.count).toBeDefined();
    expect(response.body.results).toBeDefined();
  });
  it('shoud read from artists data', async () => {
    await request.post('/artist?name=test');
    const response = await request.get('/artist/1');
    //console.log(response);
    expect(response.status).toEqual(200);
    expect(response.body.results.name).toEqual('test');
  });
  it('shoud change an artists data', async () => {
    await request.post('/artist?name=test');
    await request.put('/artist/1?name=changed');
    const response = await request.get('/artist/1');
    //console.log(response);
    expect(response.status).toEqual(200);
    expect(response.body.results.name).toEqual('changed');
  });
});

describe('Testing the records router', () => {
  it('should read from records data', async () => {
    await request.post('/record?title=test');
    const response = await request.get('/record/1');
    console.log(response);
    expect(response.status).toEqual(200);
    expect(response.body.results.title).toEqual('test');
  });
});