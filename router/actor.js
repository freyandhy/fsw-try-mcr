const router = require("express").Router()

// load controller
const actorController = require("../controllers/actorController");

// set endpoint url
router.get("/", actorController.index)
router.get("/:id", actorController.show)
router.post("/", actorController.create)
router.put("/:id", actorController.update)
router.delete("/:id", actorController.delete)

module.exports = router