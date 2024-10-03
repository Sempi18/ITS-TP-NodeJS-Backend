// tests/userController.test.js
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const User = require("../database/models/User");
chai.use(chaiHttp);
const { expect } = chai;

describe("User Controller", () => {
  it("should create a user", async () => {
    const res = await chai.request(app).post("/users/create").send({
      username: "testuser",
      password: "testpassword",
      role: "user",
    });

    expect(res).to.have.status(201);
    expect(res.body.user).to.have.property("username", "testuser");
  });
});
