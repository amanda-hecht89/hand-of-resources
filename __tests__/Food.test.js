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
      type: 'chicken',
      mascot: 'person'
    });
  });
  it('#POST /orders should create a new order', async () => {
    const newOrder = {
      'name': 'Wendys',
      'type': 'burgers',
      'mascot': 'person',
    };
    const res = await request(app).post('/orders').send(newOrder);
    // expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...newOrder,
    });
  });
  it('#PUT /orders/:id should update an existing order', async () => {
    const resp = await request(app).put('/orders/2').send({
      mascot: 'Colonel',
    });
    expect(resp.status).toBe(200);
    expect(resp.body.mascot).toBe('Colonel');
  });
  it('#DELETE /orders/:id should delete an order', async () => {
    const res = await request(app).delete('/orders/1');
    expect(res.status).toBe(200);
    const monsterResp = await request(app).get('/orders/1');
    expect(monsterResp.status).toBe(404);
  });
  



  afterAll(() => {
    pool.end();
  });
});
