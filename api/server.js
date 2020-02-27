const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// import routes here
const UserRouter = require("../user/user-router.js");

const server = express();

// middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

// routes

server.use("/api/user", UserRouter);

server.get("/", (req, res) => {
  res.json({ server: "api running on port 4000" });
});

module.exports = server;
