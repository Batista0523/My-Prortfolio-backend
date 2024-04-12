\c portfolio;


DROP TABLE IF EXISTS works_portfolio;
DROP TABLE IF EXISTS contact_me;
DROP TABLE IF EXISTS  constact_me;

CREATE TABLE works_portfolio (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    descriptions TEXT,
    repolink VARCHAR(255),
    deployedlink VARCHAR(255)
);

CREATE TABLE contact_me (
    id SERIAL PRIMARY KEY,
    username VARCHAR(33),
    email VARCHAR(50),
    msg VARCHAR(500)
);
