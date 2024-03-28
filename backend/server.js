const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/db_connection')

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
app.post('/wallet', (req, res) => {
    const { address, ETHbalance, aGRTBalance, ausdtBalance } = req.body;
    const INSERT_USER_QUERY = `INSERT INTO wallets (wallet_address, ETH_balance, GRT_balance, USDT_balance) VALUES (?, ?, ?, ?)`
    db.query(INSERT_USER_QUERY, [address, ETHbalance, aGRTBalance, ausdtBalance], (err, result) => {
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
