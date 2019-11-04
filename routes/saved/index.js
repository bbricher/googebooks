const router = require("express").Router();
const savedRoutes = require("./books");

router.use("/saved", savedRoutes);

module.exports = router;