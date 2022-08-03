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
    console.log(res.status);
    expect(res.status).toEqual(200);
    expect(res.body).toEqual([
      {
        id: '1',
        name: 'Cow',
        says: 'MOO',
        image: 'https://media.4-paws.org/e/8/2/7/e82789b9dc8a986d3b61c0aa7610affeecb93933/VIER%20PFOTEN_2015-04-27_010-1927x1333.jpg'

      },
      {
        id: '2',
        name: 'Horse',
        says: 'NEIGH',
        image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/B875/production/_102512274_gettyimages-518360318.jpg'

      },
      {
        id: '3',
        name: 'Chicken',
        says: 'CLUCK',
        image: 'https://cdn.mos.cms.futurecdn.net/BX7vjSt8KMtcBHyisvcSPK-1200-80.jpg'

      },
      {
        id: '4',
        name: 'Sheep',
        says: 'BAA',
        image: 'https://www.ciwf.eu/media/7430330/sheep-closeup-eating-grass.jpg?anchor=center&mode=crop&width=730&height=400&rnd=131364863080000000'

      }
    ]);
  });
  afterAll(() => {
    pool.end();
  });
});
