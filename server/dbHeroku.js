const mysql = require("mysql2");

const dbHeroku = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
};

const dbH = mysql.createConnection(Heroku);

module.exports = dbH;
