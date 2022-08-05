const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /fishes should return a list of fish', async () => {
    const res = await request(app).get('/fishes');
    // expect(res.status).toEqual(200);
    expect(res.body).toEqual(expect.arrayContaining([
      expect.objectContaining(

        {
          id: expect.any(String),
          name: expect.any(String),
          habitat: expect.any(String),
          ocean: expect.any(String)
        }
      )
     
    ])
    );
  });
  it('#GET animals/:id should return a single animal', async () => {
    const res = await request(app).get('/animals/3');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: '1',
      name: 'Clownfish',
      habitat: 'reef',
      ocean: 'Pacific'
    });
  });






  afterAll(() => {
    pool.end();
  });
});
