const db = require('../db/db_connection')
require('dotenv').config()

class userModel {
    static create(username, email, password) {
        return db.execute('INSERT INTO user (username, email, password) VALUES (?, ?, ?)', [username, email, password])
    }

    static findByEmail(email){
        return db.execute('SELECT * FROM user WHERE email = ?', [email]);
    }
}

module.exports = userModel