const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/saved")
    .get(booksController.findById)
    .delete(booksController.remove)

module.exports = router;