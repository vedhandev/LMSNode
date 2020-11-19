const express = require("express");
const router = express.Router();
const authorController=require('../controller/authors')

/********************************** import Ends ************************************************/

router.get("/",authorController.getAll);

router.post("/create",authorController.create );

router.put("/update",authorController.updateById );

router.get("/:id",authorController.getById );

router.delete("/:id",authorController.deleteById );

module.exports = router;
