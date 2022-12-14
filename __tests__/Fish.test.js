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
  it('#GET fishes/:id should return a single fish', async () => {
    const res = await request(app).get('/fishes/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: '1',
      name: 'Clownfish',
      habitat: 'reef',
      ocean: 'Pacific'
    });
  });
  it('#POST /fishes should create a new fish', async () => {
    const newFish = {
      'name': 'Dogface Puffer',
      'habitat': 'reef',
      'ocean': 'Indian',
    };
    const res = await request(app).post('/fishes').send(newFish);
    // expect(res.status).toBe(200);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...newFish,
    });
  });
  it('#PUT /fishes/:id should update an existing fish', async () => {
    const resp = await request(app).put('/fishes/2').send({
      ocean: 'Pacific',
    });
    expect(resp.status).toBe(200);
    expect(resp.body.ocean).toBe('Pacific');
  });
  it('#DELETE /fishes/:id should delete a fish', async () => {
    const res = await request(app).delete('/fishes/1');
    expect(res.status).toBe(200);
    const fishResp = await request(app).get('/fishes/1');
    expect(fishResp.status).toBe(404);
  });





  afterAll(() => {
    pool.end();
  });
});
