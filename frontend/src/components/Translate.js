import React from "react";
import './styles/translate.css'

const Translate = () => {
  const uploadFile = () => {
    var preview = document.getElementById("show-text");
    var file = document.querySelector("input[type=file]").files[0];
    var reader = new FileReader();

    var textFile = /json.*/;

    if (file.type.match(textFile)) {
      reader.onload = function (event) {
        console.log(typeof(JSON.parse(event.target.result)));
        preview.innerHTML = event.target.result;
      };
    } else {
      preview.innerHTML =
        "<span class='error'>It doesn't seem to be a json file!</span>";
    }
    reader.readAsText(file);
  };
  return (
    <div>
      <div className="upload-wrapper">
        <h1>Read Text File from Client Side using JavaScript API</h1>
        <br />
        <header>
          <input type="file" onChange= {uploadFile} />
        </header>
        <div id="show-text"></div>
      </div>
    </div>
  );
};

export default Translate;
