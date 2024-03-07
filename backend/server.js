const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'users'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const INSERT_USER_QUERY = `INSERT INTO user_info (username, email, password) VALUES (?, ?, ?)`;
    db.query(INSERT_USER_QUERY, [username, email, password], (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            res.status(500).send('Error registering user');
        } else {
            res.status(200).send('User registered successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
