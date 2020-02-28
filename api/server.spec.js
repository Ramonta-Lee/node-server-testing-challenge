require("dotenv");

describe("test the environment", function() {
  it("should use the testing environment", function() {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
