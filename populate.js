require('dotenv').config();
const mysql = require('mysql2/promise');
const fetch = require('node-fetch');

async function populateUsers() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        const users = data.users;

        for (const user of users) {
            await connection.execute(
                'INSERT INTO users (firstName, lastName, age, gender, email, phone, username, password, birthDate, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [user.firstName, user.lastName, user.age, user.gender, user.email, user.phone, user.username, user.password, user.birthDate, user.image]
            );
        }

        console.log('Users populated successfully');
    } catch (error) {
        console.error('Error populating users:', error);
    } finally {
        await connection.end();
    }
}

populateUsers();