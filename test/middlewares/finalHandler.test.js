'use strict';

var http = require('http');
var Router = require('koa-router');
var koa = require('koa');
var app = new koa();
var supertest = require('supertest');

var instance = function () {
  var router = Router();
  router.get('/test', function * (next) {
    this.body = 200;
    yield next;
  });
  router.post('/test', function * (next) {
    console.log(this.request.body);
    this.body = {status: 200};
    yield next;
  });
  const server = http.createServer(app.callback());
  return server;
};

describe('test/middlewares/finalHandler.test.js', () => {
  
  var agent, server;
  var data = {test: 123};
  
  beforeEach(function () {
    server = instance();
    agent = supertest(server.listen());
  });
  
  afterEach(function (done) {
    server.close(done);
  });
  
  describe('get', () => {
    it('returns ok', (done) => {
      agent.get('/test').expect(200, done);
    });
    it('returns ok', (done) => {
      agent.get('/test').expect(200, done);
    });
  });
  
  describe('post 1', () => {
    it('returns ok', (done) => {
      agent.post('/test')
        .send(data)
        .expect(200, done);
    });
  });
  
  describe('post 2', () => {
    it('returns ok', (done) => {
      agent.post('/test')
        .send(data)
        .expect(200, done);
    });
  });
  
});