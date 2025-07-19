
// Importing the SQLite library for the database
// The .verbose() helps show more details
const sqlite3 = require('sqlite3').verbose();

// Creating a new database connection.
const databaseConnection = new sqlite3.Database('./database.sqlite', (error) => {
    // Checking if there is an error by applying if else condition
    if (error) {
        // If error occurs, print a message that it failed
        console.log('Unable to connect to the database:', error.message);
    } else {
        // If error does not occur, print a success message
        console.log('Succesfully connected to the database.');
    }
});

// Making sure the database runs commands in order so I have used serialize
databaseConnection.serialize(() => {
    // Creating a table called 'users'
    // The table has:
    // - id: a unique number for each user that increases automatically via autoincrement constraint
    // - name: the user's name is set not null as we require some value to be present in entry data for column name
    // - email: the user's email and should be unique and is set null as we require some value to be present in entry data for column email
    // - age: the user's age 
    databaseConnection.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      age INTEGER
    )`,
        (error) => {
            // Checking if there is an error when table is created
            if (error) {
                console.log('Error creating users table:', error.message); //Printing error message upon failure of table existence
            } else {
                console.log('Users table is ready or already exists!'); //Printing confirmation message if table already exists
            }
        });
});

// Exporting the database connection at the end
module.exports = databaseConnection;