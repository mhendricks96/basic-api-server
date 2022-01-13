'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');
const request = supertest(server.app);