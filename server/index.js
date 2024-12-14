const express = require('express');
const pool = require("./connection");
const app = express();
const port = 3000;

//app.get('/', (req, res) => {
  //res.send('Hello udin!')
//})

app.get("/menu", async (request, response) => {
    try {
      const data = await pool.query(`SELECT * FROM Menu`);
  
      let dataMenu = data.rows;
  
      response.json(dataMenu);
    } catch (error) {
      console.log(error);
      response.status(500).json({ message: "Internal Server Error" });
    }
  });
  
  app.get("/menu/:id", async (request, response) => {
    try {
      const data = await pool.query(
        `SELECT * FROM Menu WHERE id = ${request.params.id}`
      );
  
      let dataMenu = data.rows[0];
  
      // if (dataMovies === undefined || dataMovies === null) {}
      if (!dataMenu) {
        response.status(404).json({ message: "Data Not Found" });
      } else {
        response.json(dataMenu);
      }
    } catch (error) {
      console.log(error);
      response.status(500).json({ message: "Internal Server Error" });
    }
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})