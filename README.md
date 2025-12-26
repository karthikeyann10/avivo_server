# Avivo Server

A Node.js API that serves a mockup user list stored in a MySQL database, mimicking the structure from https://dummyjson.com/users.

## Setup

1. Ensure MySQL is installed and running on your system.

2. Update the `.env` file with your MySQL credentials:
   ```
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=avivo_db
   PORT=3000
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Set up the database:
   ```
   node setup.js
   ```

5. Populate the database with dummy data:
   ```
   node populate.js
   ```

6. Start the server:
   ```
   npm start
   ```
   Or for development:
   ```
   npm run dev
   ```

## API Endpoints

- `GET /users` - Retrieve all users
- `GET /users/:id` - Retrieve a specific user by ID

The response format matches the dummyjson structure as closely as possible with the simplified schema.

## Testing the Application

Once the server is running (on port 3000 by default), you can test the API using tools like curl, Postman, or a web browser:

- **Get all users**: Open `http://localhost:3000/users` in your browser or use:
  ```
  curl http://localhost:3000/users
  ```

- **Get a specific user**: Replace `:id` with a user ID, e.g., `http://localhost:3000/users/1` or:
  ```
  curl http://localhost:3000/users/1
  ```

Expected response for `/users`:
```json
{
  "users": [...],
  "total": 30,
  "skip": 0,
  "limit": 30
}
```

For `/users/:id`:
```json
{
  "id": 1,
  "firstName": "John",
  ...
}