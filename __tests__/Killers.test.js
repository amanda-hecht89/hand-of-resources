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
    expect(res.body).toEqual([
      (
        'John Wayne Gacy',
        '33',
        '1942',
        '1968'
      ),
      (
        'Jeffrey Dahmer',
        '17',
        '1906',
        '1992'
      ),
      (
        'Ted Bundy',
        '25',
        '1946',
        '1979'
      ),
      (
        'H H Holmes',
        '27',
        '1861',
        '1895'
      )
    ]);
  });
  afterAll(() => {
    pool.end();
  });
});
