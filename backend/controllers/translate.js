const translate = require("google-translate-api-x");

const textTranslation = async (req, res) => {
  const textToTranslate = req.body.textTranslation;
  let translatedText = {};
  try {
    for (let key in textToTranslate) {
      let valueTextTranslate = await translate(textToTranslate[key], {
        to: "en",
      });
      let keyTextTranslate = await translate(key, { to: "en"});
      translatedText[keyTextTranslate.text] = valueTextTranslate.text;
    }
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(translatedText);
};


module.exports = {
  textTranslation,
};
