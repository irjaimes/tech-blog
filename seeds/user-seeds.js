const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "John Doe",
    email: "jd@email.com",
    password: "password111",
  },
  {
    username: "Jill Valentine",
    email: "jv@email.com",
    password: "password111",
  },
  {
    username: "Frank Hall",
    email: "fh@email.com",
    password: "password111",
  },
  {
    username: "Alice Baker",
    email: "ab@email.com",
    password: "password111",
  },
  {
    username: "Billie Holliday",
    email: "bh@email.com",
    password: "password111",
  },
  {
    username: "Gwen Farley",
    email: "gf@aol.com",
    password: "password111",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
