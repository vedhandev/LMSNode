const express = require('express');
const mysql = require('mysql');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
var jwt = require('jsonwebtoken');
const morgan = require("morgan");
const usersRoutes = require("./api/routes/users");

// Create connection
 const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'nodemysql'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});
app.use(morgan("dev"));
exports.db = db;
// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// Create table
app.get('/createusertable', (req, res) => {
    let sql = 'CREATE TABLE users(id int AUTO_INCREMENT, name VARCHAR(255), password VARCHAR(255),role VARCHAR(5), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('users table created...');
    });
});
// Create table
app.get('/createbooktable', (req, res) => {
    let sql = 'CREATE TABLE books(id int AUTO_INCREMENT, bname VARCHAR(255), author VARCHAR(255),publisher VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('book table created...');
    });
});
app.get('/createauthortable', (req, res) => {
    let sql = 'CREATE TABLE authors(id int AUTO_INCREMENT, name VARCHAR(255), address VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('authour table created...');
    });
});
app.get('/createpublishertable', (req, res) => {
    let sql = 'CREATE TABLE publishers(id int AUTO_INCREMENT, name VARCHAR(255), address VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('publisher table created...');
    });
});
app.use("/users", usersRoutes);














/**************************************************************************************************** */
// Update post
app.get('/updatepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('updated successfully');
    });
});

// Delete post
app.get('/deletepost/:id', (req, res) => {
    let newTitle = 'Updated Title';
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post deleted...');
    });
});

app.listen('3000', () => {
    console.log('Server started on port 3000');
});