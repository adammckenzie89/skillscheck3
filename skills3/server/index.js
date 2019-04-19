require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();

const { CONNECTION_STRING, PORT } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    console.log("database hit");
    app.set("db", dbInstance);
  })
  .catch(error => console.log(error));

app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
