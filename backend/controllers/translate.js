const translate = require("google-translate-api-x");
const Translate = require("../model/db");

const getRecentTranslations = async (req, res) => {
  let recentTranslations;
  try {
    recentTranslations = await Translate.find({}).sort({date: -1}).limit(3);
  } catch (error) {
    console.log(err);
  }
  res.status(200).json({ recentTranslations });
};

const textTranslation = async (req, res) => {
  const textToTranslate = req.body.textTranslation;
  let translatedText = {};
  try {
    for (let key in textToTranslate) {
      let valueTextTranslate = await translate(textToTranslate[key], {
        to: "en",
      });
      let keyTextTranslate = await translate(key, { to: "en" });
      translatedText[keyTextTranslate.text] = valueTextTranslate.text;
    }
    let newTranslate = new Translate({
      textTranslation: translatedText,
    });
    await newTranslate.save();
  } catch (error) {
    console.log(error);
  }
  res.status(201).json(translatedText);
};

const removeAllTranslations = async (req, res) => {
  let result;
  try {
    result = await Translate.deleteMany({});
  } catch (error) {
    console.log(result);
  }
  res.status(202).json({msg: 'Successfully delete'});
};

module.exports = {
  getRecentTranslations,
  textTranslation,
  removeAllTranslations,
};
