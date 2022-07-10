const express = require('express'); 
const router = express.Router(); 


const {getRecentTranslations, textTranslation} = require('../controllers/translate')

router.get('/', getRecentTranslations);
router.post('/translate', textTranslation);

module.exports = router;