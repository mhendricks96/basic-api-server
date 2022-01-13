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

describe('Testing the records router', () => {
  it('should read from records data', async () => {
    const response = await request.get('/record');

    expect(response.status).toEqual(200);
    expect(response.body.count).toBeDefined();
    expect(response.body.results).toBeDefined();
  });
  it('shoud read from records data', async () => {
    const response = await request.get('/record/1');

    expect(response.status).toEqual(200);
    expect(response.body.count).toEqual(1);
    expect(response.body.results).toBeDefined();
  });
});