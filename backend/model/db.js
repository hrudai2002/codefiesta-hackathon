const mongoose = require('mongoose');

const translateSchema = new mongoose.Schema({
     textTranslation: {
        type: Object
     },
     date: {
      type: Date,
      default: new Date()
     }
})

const Translate = mongoose.model('translation', translateSchema);
module.exports = Translate;


// {
//     "नाम": "नमस्ते दुनिया",
//     "पिता का नाम": "अर्जुन कुमार",
//     "माता का नाम": "अनुष्का शर्मा",
//     "ऐड्रेस": "डॉ. नं. 9-8-11, फ्लैट नंबर 102, ग्रैंड अपार्टमेंट, जुबली हिल्स, हैदराबाद"
// }
