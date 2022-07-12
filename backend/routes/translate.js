const express = require('express'); 
const router = express.Router(); 

const {
  getRecentTranslations,
  textTranslation,
  removeAllTranslations,
} = require("../controllers/translate");

router.get('/', getRecentTranslations);
router.post('/translate', textTranslation);
router.delete('/delete', removeAllTranslations);

module.exports = router;