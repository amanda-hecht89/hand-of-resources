const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('#GET /monsters should return a list of monsters', async () => {
    const res = await request(app).get('/monsters');
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
  it('#GET monsters/:id should return a single monster', async () => {
    const res = await request(app).get('/monsters/1');
    // expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: '1',
      name: 'Zombie',
      location: 'graveyard',
      movie: 'World War Z'
    });
  });
  it('#POST /monsters should create a new monster', async () => {
    const newMonster = {
      'name': 'Skeleton',
      'location': 'body',
      'movie': 'Coco',
    };
    const res = await request(app).post('/monsters').send(newMonster);
    // expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...newMonster,
    });
  });
  







  afterAll(() => {
    pool.end();
  });
});
