const { Pool } = require('pg');
var connectionString = process.env.CONNECTION_STRING

const db = new Pool({
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

async function getLogs() {
    const result = await db.query('SELECT * from logs')
    return result.rows
}

module.exports = { createNewAccount, getLogs };
