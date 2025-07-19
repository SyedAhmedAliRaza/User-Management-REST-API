# User Management REST API 🚀
## 📖 Project Description :
This is a simple REST API for managing user data, built with Node.js, Express.js, and SQLite. It allows you to perform CRUD operations (Create, Read, Update, Delete) on user records, which include id, name, email, and age.
## 🛠️ How to Install and Run the Project :
1.Clone the Repository :<br>
-> git clone https://github.com/SyedAhmedAliRaza/User-Management-REST-API.git<br>
-> cd User-Management-REST-API<br> 
2.Install Dependencies :<br> 
-> npm install<br>  
3.Run the API : <br>
-> node index.js <br>
4.Test the API: <br>
-> Use Postman  <br>
## 💾 Database Used : <br>
-> SQLite database has been used. <br>
## 🌐 List of Available Routes with Examples :<br>
1. POST /users :  <br>
http://localhost:3000/users - "Content-Type: application/json" - '{"name":"Ali Raza","email":"ali.raza51214@gmail.com","age":24}' <br>
2. POST /users :  <br>
http://localhost:3000/users - "Content-Type: application/json" - '{"name":"Syed Ahmed","email":"ahmed.aliraza51214@gmail.com","age":22}'  <br>
3. GET /users :  <br>
http://localhost:3000/users <br> 
4. GET /users/:id : <br>
http://localhost:3000/users/2  <br>
5. PUT /users/:id :  <br>
http://localhost:3000/users/1 - "Content-Type: application/json" - '{"name":"Ali Raza","email":"ali.raza51214@gmail.com","age":23}' <br>
6. DELETE /users/:id :  <br>
http://localhost:3000/users/2  

