const pool = require('./connection');

let createTableMenu = `
CREATE TABLE Menu (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(50),
    "imageUrl" TEXT,
    "price" VARCHAR(50),
    "description" TEXT
);
`;

//pool.query(createTableMenu);
async function runSetup() {
    try {
      await pool.query(createTableMenu);
      console.log("Success setup table menu");
    } catch (error) {
      console.log(error);
    }
  }
  
  runSetup();
