require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const houses = require("./controller");
const { userBuilder, loginUser, logout, loginCheck } = require("./middlewares");
const app = express();

const { CONNECTION_STRING, PORT, SECRET } = process.env;
app.use(express.json());

app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
  })
);

massive(CONNECTION_STRING)
  .then(dbInstance => {
    console.log("database hit");
    app.set("db", dbInstance);
  })
  .catch(error => console.log(error));

//login endpoints
app.post("/auth/signup", userBuilder);
app.post("/auth/login", loginUser);
app.get("/auth/logout", logout);
app.get("/auth/user", loginCheck);
//UI endpoints
app.get("/api/houses", houses.getHouses);
app.post("/api/houses", houses.addHouses);
app.delete("/api/houses/:id", houses.deleteHome);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
