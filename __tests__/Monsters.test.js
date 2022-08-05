const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /animals should return a list of animals', async () => {
    const res = await request(app).get('/animals');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual(expect.arrayContaining([
      expect.objectContaining(
        {
          id: expect.any(String),
          name: expect.any(String),
          location: expect.any(String),
          movie: expect.any(String)
        }


      )

    ]));
  });
  afterAll(() => {
    pool.end();
  });
});
