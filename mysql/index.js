const mysql = require('mysql')
// const pool = mysql.createPool({
//     host: '172.19.234.200',
//     user: 'root',
//     password: '',
//     database: 'todolist_demo'
// });
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todolist_demo'
});

let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}
exports.query = query

