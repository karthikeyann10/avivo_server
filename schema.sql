-- Create database if not exists
CREATE DATABASE IF NOT EXISTS avivo_db;

-- Use the database
USE avivo_db;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    age INT,
    gender VARCHAR(10),
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    birthDate DATE,
    image VARCHAR(255)
);