-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if EXISTS farm_animals

CREATE TABLE farm_animals (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name: VARCHAR
    says: VARCHAR
    image: VARCHAR
)

INSERT INTO farm_animals (name, says, image)
VALUES
(
    'Cow'
    'MOOOOOO'
    'https://media.4-paws.org/e/8/2/7/e82789b9dc8a986d3b61c0aa7610affeecb93933/VIER%20PFOTEN_2015-04-27_010-1927x1333.jpg'
),
(
    'Horse'
    'NEIGH'
    'https://ichef.bbci.co.uk/news/976/cpsprodpb/B875/production/_102512274_gettyimages-518360318.jpg'
),
(
    'Chicken'
    'CLUCK'
    'https://cdn.mos.cms.futurecdn.net/BX7vjSt8KMtcBHyisvcSPK-1200-80.jpg'
),
(
    'Sheep'
    'BAAAAAAAA'
    'https://www.ciwf.eu/media/7430330/sheep-closeup-eating-grass.jpg?anchor=center&mode=crop&width=730&height=400&rnd=131364863080000000'
),

