const router = require("express").Router();
const Users = require("./user-model.js");

router.get("/", (req, res) => {
  Users.find()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "Unable to get list of users" });
    });
});

router.post("/", (req, res) => {
  const name = req.body;
  // console.log(req.body);
  if (!name) {
    res.status(401).json({ error: "please provide a name" });
  } else {
    Users.addUser(name)
      .then(users => {
        res.status(200).json(users);
      })
      .catch(({ name, message, stack, code }) => {
        console.log(name, message, stack, code);
        res.status(500).json({ name, message, stack, code });
      });
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params;
  Users.remove(id)
    .then(user => {
      res.status(200).json({ message: "user has been removed" });
    })
    .catch(error => {
      res.status(500).json({ error: "Unable to remove the user" });
    });
});

module.exports = router;
