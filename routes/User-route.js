const router = require("express").Router()
const UserController = require("../controllers/User-controller")

router.get("/get-details", UserController.getDetails)
router.post("/add-details", UserController.addDetails)
router.delete("/delete-detail/:id", UserController.deleteDetails)
router.put("/edit-details/:id", UserController.editDetails)

module.exports = router
