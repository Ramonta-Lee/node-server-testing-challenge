const request = require("supertest");
const db = require("../database/dbConfig.js");
const Users = require("./user-model.js");
const server = require("../api/server.js");

describe("user router testing", () => {
  it("should return 201 Created", () => {
    return request(server)
      .post("/api/user")
      .send({ name: "Lee7" })
      .then(res => {
        expect(res.status).toBe(201);
      });
  })

  it("Should return a response with status: 200 and remove user", function(done) {

   return request(server)
      .delete("/api/user/:id")
      .send({id: 1})
      .expect("Content-type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });
});

describe("users model testing", () => {
  it("should run the tests", () => {
    expect(true).toBe(true);
  });

  describe("POST /api/user", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });
    it("should add a user to test.db3", async () => {
      await Users.addUser({
        name: "Jessica"
      });
      const post = await db("users");
      expect(post).toHaveLength(1);
    });
  });

  describe("DELETE /api/user", () => {
    it("should remove a user", async () => {
      await db("users").truncate();

      await Users.addUser({
        name: "jessica"
      });
      const post = await db("users");
      expect(post).toHaveLength(1);

      await Users.remove({
        id: 1
      });
      const remove = await db("users");
      expect(remove).toHaveLength(0);
    });
  });
});
