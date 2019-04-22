//methods

module.exports = {
  getHouses: (req, res) => {
    let db = req.app.get("db");
    db.get_houses().then(houses => res.status(200).json(houses));
  },
  addHouses: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, address, city, state, zip, img } = req.body;

    dbInstance
      .add_houses([name, address, city, state, zip, img])
      .then(() => res.sendStatus(200))
      .catch(error => {
        res.status(500).json({ errorMessage: "naw dog" });
        console.log(error);
      });
  },
  deleteHome: (req, res) => {
    let db = req.app
      .get("db")
      .delete_home(req.params.id)
      .then(result => res.status(200).json(homes))
      .catch(error => {
        res.status(500).json("there was an error");
        console.log(error);
      });
  }
};
