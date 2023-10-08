// const mysql = require("mysql2");

// const dbHeroku = {
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
// };

// const db = mysql.createConnection(dbHeroku);

// module.exports = db;

const mysql = require("mysql2");

// CLEARDB_DATABASE_URL에서 연결 정보 추출
const dbUrl = process.env.CLEARDB_DATABASE_URL;
const dbInfo = new URL(dbUrl);

// 연결 풀 설정
const pool = mysql.createPool({
  host: dbInfo.hostname,
  user: dbInfo.username,
  password: dbInfo.password,
  database: dbInfo.pathname.substr(1),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// 연결 풀에서 연결 가져오기
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error getting MySQL connection from pool:", err);
    return;
  }

  // 연결을 사용하여 쿼리 실행
  connection.query("SELECT * FROM your_table", (queryErr, results, fields) => {
    // 결과 처리
    console.log(results);

    // 연결 반환
    connection.release();

    // 에러 처리
    if (queryErr) {
      console.error("Error executing query:", queryErr);
    }
  });
});

module.exports = pool;
