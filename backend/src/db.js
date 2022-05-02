const mysql = require('mysql2')

const dbConfig = require('./config').database

const pool = mysql.createPool(dbConfig)

const query = (sql, val) => { 
    return new Promise((resolve, reject) => { 
        pool.getConnection((err, connection) => {
            if (err) reject(err)
            else {
                connection.query(sql, val, (err, fields) => {
                    if (err) reject(err)
                    else resolve(fields)
                    connection.release()
                })
            }
        })
    })
}

module.exports = query