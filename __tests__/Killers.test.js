const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /killers should return a list of killers', async () => {
    const res = await request(app).get('/killers');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expect.arrayContaining([
      expect.objectContaining(

        {
          id: expect.any(String),
          name: expect.any(String),
          victims: expect.any(Number),
          born: expect.any(Number),
          convicted:expect.any(Number)
        }
      )

    ])
    );
  });
  it('#GET killers/:id should return a single killer', async () => {
    const res = await request(app).get('/killers/2');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: '2',
      name: 'Jeffrey Dahmer',
      victims: 17,
      born: 1960,
      convicted: 1992
    });
  });
});
afterAll(() => {
  pool.end();
});

