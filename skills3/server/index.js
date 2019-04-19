require("dotenv").config();
const express = require("express");
const massive = require("massive");
const houses = require("./controller");
const app = express();

const { CONNECTION_STRING, PORT } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    console.log("database hit");
    app.set("db", dbInstance);
  })
  .catch(error => console.log(error));

app.use(express.json());

app.get("/api/houses", houses.getHouses);
app.post("/api/houses", houses.addHouses);
app.delete("/api/houses/:id", houses.deleteHome);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
