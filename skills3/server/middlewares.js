const bcrypt = require("bcryptjs");

const userBuilder = async (req, res) => {
  let { username, password } = req.body;
  let db = req.app.get("db");
  let userFound = await db.check_user_exist([username]);
  if (userFound[0]) {
    return res.status(200).json("username already exist");
  }
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  let createdUser = await db.create_user([username, hash]);
  req.session.user = {
    id: createdUser[0].id,
    username: createdUser[0].username
  };
  res.status(200).json(req.session.user);
};

const loginUser = async (req, res) => {
  let { username, password } = req.body;
  let db = req.app.get("db");
  let userFound = await db.check_user_exist([username]);
  console.log("hit");
  if (!userFound[0]) {
    return res.status(200).json("Incorrect username, try again");
  }
  let result = bcrypt.compareSync(password, userFound[0].password); //try password
  if (result) {
    req.session.user = { id: userFound[0].id, username: userFound[0].username };
    res.status(200).json(req.session.user);
  } else {
    return res.status(403).json("incorrect");
  }
};
const logout = (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
};
const loginCheck = (req, res) => {
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(403).json("please log in");
  }
};

module.exports = {
  userBuilder,
  loginUser,
  logout,
  loginCheck
};
