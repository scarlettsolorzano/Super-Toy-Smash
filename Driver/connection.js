const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});

connection.connect((error) => {
    if (error) {
        console.error('Error: ' + error);
        return;
    }

    console.log('Connected to MySQL!');
});

module.exports = connection;