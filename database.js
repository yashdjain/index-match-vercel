const { Client } = require('pg');
var connectionString = process.env.CONNECTION_STRING

const db = new Client({
    connectionString,
});

function createNewAccount(details) {
    db.query('INSERT INTO accounts(name, email, account_type, balance) VALUES ($1, $2, $3, $4)', details, (err, result) => {
        if (err) {
            console.error('Failed to insert data into db:', err);
        } else {
            console.log('Successfully inserted data into db'); // result.rows contains the fetched data
        }
    })
}

db.connect((err, client, done) => {
    if(err) {
        console.log('Error');
    } else {
        console.log('Database connected');
        client.on('notification', (msg) => {
            const details = msg.payload.split(',');
            db.query('INSERT INTO logs(action, name, email, account_type, balance) VALUES (\'account-created\', $1, $2, $3, $4)', details, (err, result) => {
                if (err) {
                    console.error('Failed to insert data into db:', err);
                } else {
                    console.log('Successfully inserted data into db'); // result.rows contains the fetched data
                }
            })
        })
        const query = client.query('LISTEN new_account')
    }
})

module.exports = { createNewAccount };
