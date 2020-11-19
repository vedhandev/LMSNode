
const database = require("../../app");
var jwt = require('jsonwebtoken');

exports.create = (req, res) => {
    let post = req.body;
    let sql = 'INSERT INTO users SET ?';
    database.db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Created successfully");
    });
}

exports.getById = (req, res) => {
    let sql = `SELECT * FROM users WHERE id = ${req.params.id}`;
   database.db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
}
exports.login = (req, res) => {
    var rbody  = {};
    rbody.message="Invalid Credentials";
    let sql = `SELECT * FROM users WHERE name = "${req.body.name}"`;
   
   database.db.query(sql, (err, result) => {
    console.log(result.length)
        if (err) throw err;
        if(result.length)
        if(result[0].name==req.body.name){
        
      var jwtCoding = {};
      jwtCoding._id  = result[0].name;
      jwtCoding.role = result[0].role;
      var token = jwt.sign(jwtCoding, "secret", {
        expiresIn: 21600 // expires in 6 * 60 minutes -- 6 * 60 * 60 = 21600
      });
      rbody.token = token;
      rbody.name = result[0].name;
      rbody.message="Authenticated Successfully";
      
    }
    res.send(rbody)
    });
}
exports.getAll = (req, res) => {
    let sql = 'SELECT * FROM users';
    database.db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
}

exports.deleteById = (req, res) => {
    let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
    database.db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send("Deleted successfully");
    });
}
exports.updateById = (req, res, next) => {
    let post = req.body;
    let sql = `UPDATE users SET name = '${req.body.name}'WHERE id = ${req.body.id}`;
        database.db.query(sql, post, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send("Updated successfully");
    });
}


