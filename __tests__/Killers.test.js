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
  afterAll(() => {
    pool.end();
  });
});
