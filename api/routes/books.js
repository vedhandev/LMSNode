const express = require("express");
const router = express.Router();
const bookController=require('../controller/books')

/********************************** import Ends ************************************************/

router.get("/",bookController.getAll);

router.post("/create",bookController.create );

router.put("/update",bookController.updateById );

router.get("/:id",bookController.getById );

router.delete("/:id",bookController.deleteById );

module.exports = router;
