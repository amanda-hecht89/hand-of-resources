-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if EXISTS animals;
Drop table if EXISTS killers;
DROP table if EXISTS fishes;
DROP table if EXISTS monsters;
DROP table if EXISTS orders;



CREATE TABLE animals (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    says VARCHAR,
    image VARCHAR
);

CREATE TABLE fishes (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    habitat VARCHAR,
    ocean VARCHAR
);

CREATE TABLE killers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    victims int,
    born int,
    convicted int
);

CREATE TABLE monsters (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    location VARCHAR,
    movie VARCHAR
);

CREATE TABLE orders (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR,
    type VARCHAR,
    mascot VARCHAR
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
    '1960',
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
);

INSERT INTO fishes (name, habitat, ocean)
VALUES
(
    'Clownfish',
    'reef',
    'Pacific'
),
(
    'Blue Tang',
    'reef',
    'Atlantic'
),
(
    'Yellow Tang',
    'reef',
    'Altantic'
),
(
    'Yellow Watchman Goby',
    'sand',
    'Pacific'
);

INSERT INTO monsters (name, location, movie)
VALUES
(
    'Zombie',
    'graveyard',
    'World War Z'
),
(
    'Vampire',
    'coffin',
    'Draula'
),
(
    'Werewolf',
    'woods',
    'Underworld'
),
(
    'Mummy',
    'coffin',
    'Mummy'
);

INSERT INTO orders (name, type, mascot)
VALUES
(
    'McDonalds',
    'burgers',
    'clown'
),
(
    'KFC',
    'chicken',
    'person'
),
(
    'Burger King',
    'burgers',
    'king'
),
(
    'Chick-fil-a',
    'chicken',
    'cow'
)










