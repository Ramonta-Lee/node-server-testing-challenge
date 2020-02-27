const Users = require("./user-model.js");

const router = require("express").Router();

router.post("/", (req, res) => {
  Users.all()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(({ name, message, stack, code }) => {
      console.log(name, message, stack, code);
      res.status(500).json({ name, message, stack, code });
    });
});

module.exports = router;
