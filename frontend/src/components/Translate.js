import React, { useState } from "react";
import axios from "axios";
import loading from "./styles/images/loader.gif";
import "./styles/translate.css";

const Translate = () => {
  const [text, setText] = useState();
  const [loader, setLoader] = useState(false);
  const [translate, setTranslate] = useState(false);
  const [download, setDownload] = useState(false);
  const [translatedText, setTranslatedText] = useState();


  const sendRequest = async () => {
    setLoader(true);
    await axios
      .post("http://localhost:5000/translate", {
        textTranslation: text,
      })
      .then((res) => {
        setTranslatedText(res.data);
      })
      .then(() => {
        setLoader(false);
        setDownload(true);
      });
  };

  const uploadFile = () => {
    let preview = document.getElementById("show-text");
    
    let file = document.querySelector("input[type=file]").files[0];
    let reader = new FileReader();

    var textFile = /json.*/;

    if (file.type.match(textFile)) {
      reader.onload = function (event) {
        setText(JSON.parse(event.target.result));
        setTranslate(true);
      };
    } else {
      preview.innerHTML =
        "<span class='error'>It doesn't seem to be a json file!</span>";
    }
    reader.readAsText(file);
  };

  const translateFile = () => {
    console.log(text);
    let inputFile = document.getElementById("inputFile");
    inputFile.value = "";
    setDownload(false);
    sendRequest();
  };

  const downloadTxtFile = () => {
    let dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(translatedText));
    let dlAnchorElem = document.getElementById("downloadAnchorElem");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "scene.json");
    dlAnchorElem.click();
  };
  return (
    <div>
      <div className="upload-wrapper">
        <h1>Read Text File from Client Side using JavaScript API</h1>
        <br />
        <header>
          <input type="file" onChange={uploadFile} id="inputFile" />
          <br />
          {translate && <button className="btn btn-primary" onClick = {translateFile}>Translate</button>}
        </header>
        <div id="show-text">
          {loader && (
            <>
              <img src={loading} alt="hello" width="150px" height="150px" />
              <p>Please be patient for a while 😊</p>
            </>
          )}
        </div>

        {download && (
          <>
            <button>
              <a id="downloadAnchorElem" onClick={downloadTxtFile}>
                Download
              </a>
            </button>
            <p>Here is your file 😀</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Translate;
