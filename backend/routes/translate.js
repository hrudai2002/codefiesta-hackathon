const express = require("express");
const router = express.Router();

const { textTranslation } = require("../controllers/translate");

router.post("/translate", textTranslation);

module.exports = router;
