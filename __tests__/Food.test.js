const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /orders should return a list of orders', async () => {
    const res = await request(app).get('/orders');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expect.arrayContaining([
      expect.objectContaining(
        {
          id: expect.any(String),
          name: expect.any(String),
          type: expect.any(String),
          mascot: expect.any(String)
        }
      )
    ]));
  });
  it('#GET orders/:id should return a single order', async () => {
    const res = await request(app).get('/orders/2');
    // expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: '2',
      name: 'KFC',
      location: 'chicken',
      movie: 'person'
    });
  });




  afterAll(() => {
    pool.end();
  });
});
