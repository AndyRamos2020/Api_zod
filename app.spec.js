const request = require('supertest');
const app = require('./app');

describe('router', () => {
  describe('get /api', () => {
    test('should return a 200 status code', async () => {
      const response = await request(app)
        .get('/api');

      expect(response.status).tobe(200);
    });
  });

  describe('post /api/save', () => {
    test('should return a 400 status code with invalid data', async () => {
      const response = await request(app)
        .post('/api/save')
        .send({
          invalidfield: 'invalidvalue',
        });

      expect(response.status).tobe(400);
    });
  });

  describe('put /api/put/:id', () => {
    test('should return a 404 status code with a non-existent id', async () => {
      const response = await request(app)
        .put('/api/put/999')
        .send({
          name: 'updated name',
        });

      expect(response.status).tobe(404);
    });
  });

  describe('delete /api/delete/:id', () => {
    test('should return a 404 status code with a non-existent id', async () => {
      const response = await request(app)
        .delete('/api/delete/999');

      expect(response.status).tobe(404);
    });
  });
});