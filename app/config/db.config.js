module.exports = {
  HOST: "localhost",
  USER: "admin",
  PASSWORD: "lexanby81",
  DB: "dbchat",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
