
// Importing Express to create web server
const express = require('express');

// Importing database connection from db.js file
const databaseConnection = require('./db');

// Creating an Express app to handle HTTP requests
const app = express();

// Setting the port number for our serever
const serverPort = 3000;

// Adding middleware to parse JSON data from requests 
app.use(express.json());

// Get a list of all users in the database
app.get('/users', (request, response) => {
    // Using the database to select all users
    // The [] means no parameters are needed for this query
    databaseConnection.all('SELECT * FROM users', [], (error, userRows) => {
        // Checking if there is an error by applying if else condition
        if (error) {
            // If error occurs, print a message 500 error (server problem)
            response.status(500).json({ error: 'Something went wrong with the database: ' + error.message });
            return;
        }
        // Sending all users back as JSON
        response.json(userRows);
    });
});

// Get one user by their ID
app.get('/users/:id', (request, response) => {
    // Get the user ID from the URL
    const userId = request.params.id;
    // Writng a query to database to find a user with this ID
    databaseConnection.get('SELECT * FROM users WHERE id = ?', [userId], (error, userData) => {
        // Checking if there is an error by applying via if else condition
        if (error) {
            // If error occurs, print a message 500 error (server problem)
            response.status(500).json({ error: 'Database error: ' + error.message });
            return;
        }
        // If no user is found with this ID, print a message of 404 error (not found)
        if (!userData) {
            response.status(404).json({ error: 'No user found with ID ' + userId });
            return;
        }
        // Sending the user's data back as JSON
        response.json(userData);
    });
});

// Create a new user
app.post('/users', (request, response) => {
    // Getting the name, email, and age that we sent as JSON 
    const userName = request.body.name;
    const userEmail = request.body.email;
    const userAge = request.body.age;

    // Checking if name and email exist via if else condition
    if (!userName || !userEmail) {
        // If error occurs, print a message of 400 error (bad request)
        response.status(400).json({ error: 'Please provide both name and email!' });
        return;
    }

    // Inserting a new user 
    databaseConnection.run(
        'INSERT INTO users (name, email, age) VALUES (?, ?, ?)',
        [userName, userEmail, userAge],
        function (error) {

            // Checking if duplicate values have been reported via if else condition
            if (error) {
                // If error occurs, print a message of 500 error (server problem)
                response.status(500).json({ error: 'Failed to create user: ' + error.message });
                return;
            }
            // If user inserted successfully, print a message of 201 (created)
            response.status(201).json({ id: this.lastID });
        }
    );
});

//  Update a user's info
app.put('/users/:id', (request, response) => {
    // Getting the user ID from the URL
    const userId = request.params.id;
    // Getting the updated name, email, and age that we sent as JSON
    const userName = request.body.name;
    const userEmail = request.body.email;
    const userAge = request.body.age;

    // Checking existence of name and email via if else condition
    if (!userName || !userEmail) {
        // If error occurs, print a message of 400 error (bad request)
        response.status(400).json({ error: 'Please provide both name and email!' });
        return;
    }

    // Updating a user's info
    databaseConnection.run(
        'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?',
        [userName, userEmail, userAge, userId],
        function (error) {
            // Checking if user's info gets updated via if else condition
            if (error) {
                // If error occurs, print a message of 500 error (server problem)
                response.status(500).json({ error: 'Failed to update user: ' + error.message });
                return;
            }
            // Checking if user's id exists via if else condition
            if (this.changes === 0) {
                // If error occurs, print a message of 404 error (not found)
                response.status(404).json({ error: 'No user found with ID ' + userId });
                return;
            }
            // If error does not occur, print a message of successfull user's info update
            response.json({ message: 'User updated successfully!' });
        }
    );
});

// Delete a user by their ID
app.delete('/users/:id', (request, response) => {
    // Getting the user ID from the URL
    const userId = request.params.id;
    // Deleting the user 
    databaseConnection.run('DELETE FROM users WHERE id = ?', [userId], function (error) {
        // Checking if user's info gets deleted via if else condition
        if (error) {
            // If error occurs, print a message of 500 error (server problem)
            response.status(500).json({ error: 'Failed to delete user: ' + error.message });
            return;
        }
        // Checking if user's id exists via if else condition
        if (this.changes === 0) {
            // If error occurs, print a message of 404 error (not found)
            response.status(404).json({ error: 'No user found with ID ' + userId });
            return;
        }
        // If error does not occur, print a message of successfull user's info delete
        response.json({ message: 'User deleted successfully!' });
    });
});

// Start the server at the end
app.listen(serverPort, () => {
    console.log('Server is running at http://localhost:' + serverPort);
});