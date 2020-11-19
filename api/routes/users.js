const express = require("express");
const router = express.Router();
const userController=require('../controller/users')

/********************************** import Ends ************************************************/

router.get("/",userController.getAll);
router.post("/authenticate",userController.login );
router.post("/create",userController.create );

router.put("/update",userController.updateById );

router.get("/:id",userController.getById );

router.delete("/:id",userController.deleteById );

module.exports = router;
