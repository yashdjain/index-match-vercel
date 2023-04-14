const { Client } = require('pg');
// var connectionString = process.env.CONNECTION_STRING
var connectionString = 'postgresql://postgres:FPTwhVf3jfVa8RPP@db.zbsncdoxoswjkbnrrgrc.supabase.co:5432/postgres'

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

function getLogs() {
    db.query('SELECT * from logs', (err, result) => {
        if (err) {
            console.error('Failed to retrieve data from db:', err);
        } else {
            console.log('Successfully retrieved data from db'); // result.rows contains the fetched data
            return result
        }
    })
}

module.exports = { createNewAccount, getLogs };
