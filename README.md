# Project Description 9User-Management-REST-API) :
This is a simple REST API for managing user data, built with Node.js, Express.js, and SQLite. It allows you to perform CRUD operations (Create, Read, Update, Delete) on user records, which include id, name, email, and age.
# How to Install and Run the Project :
1.Clone the Repository :
git clone https://github.com/SyedAhmedAliRaza/User-Management-REST-API.git
cd User-Management-REST-API
2.Install Dependencies :
npm install
3.Run the API :
node index.js
4.Test the API:
Use Postman
# Database Used :
SQLite database has been used.
# List of Available Routes with Examples :
1. POST /users :
http://localhost:3000/users - "Content-Type: application/json" - '{"name":"Ali Raza","email":"ali.raza51214@gmail.com","age":24}'
2. POST /users :
http://localhost:3000/users - "Content-Type: application/json" - '{"name":"Syed Ahmed","email":"ahmed.aliraza51214@gmail.com","age":22}'
3. GET /users :
http://localhost:3000/users
4. GET /users/:id :
http://localhost:3000/users/2
5. PUT /users/:id :
http://localhost:3000/users/1 - "Content-Type: application/json" - '{"name":"Ali Raza","email":"ali.raza51214@gmail.com","age":23}'
6. DELETE /users/:id :
http://localhost:3000/users/2
