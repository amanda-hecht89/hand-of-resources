-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if EXISTS animals;
Drop table if EXISTS killers;



CREATE TABLE animals (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    says VARCHAR,
    image VARCHAR
);
INSERT INTO animals (name, says, image)
VALUES
(
    'Cow',
    'MOO',
    'https://media.4-paws.org/e/8/2/7/e82789b9dc8a986d3b61c0aa7610affeecb93933/VIER%20PFOTEN_2015-04-27_010-1927x1333.jpg'
),
(
    'Horse',
    'NEIGH',
    'https://ichef.bbci.co.uk/news/976/cpsprodpb/B875/production/_102512274_gettyimages-518360318.jpg'
),
(
    'Chicken',
    'CLUCK',
    'https://cdn.mos.cms.futurecdn.net/BX7vjSt8KMtcBHyisvcSPK-1200-80.jpg'
),
(
    'Sheep',
    'BAA',
    'https://www.ciwf.eu/media/7430330/sheep-closeup-eating-grass.jpg?anchor=center&mode=crop&width=730&height=400&rnd=131364863080000000'
);


CREATE TABLE killers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    victims int,
    born int,
    convicted int
);
INSERT INTO killers (name, victims, born, convicted)
VALUES
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










