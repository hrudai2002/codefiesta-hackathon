import React, { useState } from "react";
import axios from 'axios';
import "./styles/translate.css";

const Translate = () => {
  const [text, setText] = useState({});
  const uploadFile = () => {
    var preview = document.getElementById("show-text");
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    var textFile = /json.*/;

    if (file.type.match(textFile)) {
      reader.onload = function (event) {
        setText(JSON.parse(event.target.result));
      };
    } else {
      preview.innerHTML =
        "<span class='error'>It doesn't seem to be a json file!</span>";
    }
    reader.readAsText(file);
  };
  const downloadTxtFile = () => {
    let dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(text));
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
          <input type="file" onChange={uploadFile} />
        </header>
        <div id="show-text"></div>
        <button onClick={downloadTxtFile}>
          {/* Download */}
          <a id="downloadAnchorElem" onClick={downloadTxtFile}>
            Download
          </a>
        </button>
      </div>
    </div>
  );
};

export default Translate;
