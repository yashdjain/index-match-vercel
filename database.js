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

function applyForLoan(details) {
    db.query('INSERT INTO loan_applications(name, email, loan_amount, loan_type, security) VALUES ($1, $2, $3, $4, $5)', details, (err, result) => {
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

async function calculateSum(columnName) {
    const sum = await db.query(`SELECT SUM(${columnName}::numeric) FROM logs`)
    return sum.rows
}

module.exports = { createNewAccount, getLogs, applyForLoan, calculateSum };
