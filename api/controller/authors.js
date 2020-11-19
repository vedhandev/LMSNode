
const database = require("../../app");


exports.create = (req, res) => {
    let post = req.body;
    let sql = 'INSERT INTO authors SET ?';
    database.db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Created successfully");
    });
}

exports.getById = (req, res) => {
    let sql = `SELECT * FROM authors WHERE id = ${req.params.id}`;
   database.db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
}
exports.getAll = (req, res) => {
    let sql = 'SELECT * FROM authors';
    database.db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send(results);
    });
}

exports.deleteById = (req, res) => {
    let sql = `DELETE FROM authors WHERE id = ${req.params.id}`;
    database.db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send("Deleted successfully");
    });
}
exports.updateById = (req, res, next) => {
    let post = req.body;
    let sql = `UPDATE authors SET name = '${req.body.name}'WHERE id = ${req.body.id}`;
        database.db.query(sql, post, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send("Updated successfully");
    });
}


