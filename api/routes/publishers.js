const express = require("express");
const router = express.Router();
const publisherController=require('../controller/publishers')

/********************************** import Ends ************************************************/

router.get("/",publisherController.getAll);

router.post("/create",publisherController.create );

router.put("/update",publisherController.updateById );

router.get("/:id",publisherController.getById );

router.delete("/:id",publisherController.deleteById );

module.exports = router;
