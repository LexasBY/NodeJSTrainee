const config = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize('dbchat', 'postgres', 'lexanby81', {
  dialect: 'postgres',
  host: 'localhost',
  define: {
    timestamps: true,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);

module.exports = db;
