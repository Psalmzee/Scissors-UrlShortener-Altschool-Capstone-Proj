const request = require('supertest');
const app = require('../app');

describe('Test GET /', () => {
  test('It should respond with 200 success', async () => {
    const response = await request(app).get('/').expect(200).expect('Content-Type', /html/);
  });
});

describe('Test GET /random-url', () => {
  test('It should respond with 200 success', async () => {
    const response = await request(app).get('/random-url').expect(200).expect('Content-Type', /html/);
  });
});

describe('Test GET /custom-url', () => {
  test('It should respond with 200 success', async () => {
    const response = await request(app).get('/custom-url').expect(200).expect('Content-Type', /html/);
  });
});

describe('Test POST /short-url', () => {
  it('should respond with 201 created', async () => {
    const response = await request(app).post('/short-url').send({
      longUrl: 'https://faun.pub/how-to-test-your-rest-api-with-jest-and-supertest-i-196bc84e6c5f',
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('longUrl');
    expect(response.body).toHaveProperty('urlCode');
    expect(response.body).toHaveProperty('shortUrl');
  });
});
