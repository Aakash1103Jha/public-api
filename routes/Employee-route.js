const router = require("express").Router()
const EmployeeController = require("../controllers/User-controller")

router.get("/get-details", EmployeeController.getEmployeeDetails)
router.post("/add-details", EmployeeController.addEmployeeDetails)
router.delete("/delete-detail/:id", EmployeeController.deleteEmployeeDetails)
router.put("/edit-details/:id", EmployeeController.editEmployeeDetails)

module.exports = router
