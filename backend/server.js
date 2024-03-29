const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/db_connection')
const userRouter = require('./routes/user-routes')

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use(`/api/users/`, userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
