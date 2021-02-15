const router = require("express").Router();

// load router
const actor = require("./actor")

router.use("/actors", actor)

module.exports = router