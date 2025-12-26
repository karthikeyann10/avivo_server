require('dotenv').config();
const mysql = require('mysql2/promise');
const fs = require('fs');

async function setupDatabase() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });

    try {
        const schema = fs.readFileSync('schema.sql', 'utf8');
        await connection.query(schema);
        console.log('Database and table created successfully');
    } catch (error) {
        console.error('Error setting up database:', error);
    } finally {
        await connection.end();
    }
}

setupDatabase();