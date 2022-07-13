import React, { useState } from "react";
import translateLoader from "./styles/images/translate.gif";
import axios from "axios";
import "./styles/translate.css";

const Translate = () => {
  const [text, setText] = useState();
  const [alert, setAlert] = useState(false);
  const [loader, setLoader] = useState(false);
  const [translate, setTranslate] = useState(false);
  const [download, setDownload] = useState(false);
  const [translatedText, setTranslatedText] = useState();

  const sendRequest = async () => {
    setLoader(true);
    await axios
      .post("https://codefiesta-hackathon.herokuapp.com/translate", {
        textTranslation: text,
      })
      .then((res) => {
        setTranslatedText(res.data);
      })
      .then(() => {
        setLoader(false);
        setDownload(true);
      })
  };

  const uploadFile = () => {
    let inputFile = document.getElementById("inputFile");
    let file = document.querySelector("input[type=file]").files[0];
    let reader = new FileReader();

    let textFile = /json.*/;

    if (file.type.match(textFile)) {
      reader.onload = function (event) {
        setText(JSON.parse(event.target.result));
        setTranslate(true);
      };
    } else {
      inputFile.value = "";
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
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
    dlAnchorElem.setAttribute("download", "result.json");
    dlAnchorElem.click();
  };

  return (
    <div className="parent-upload-wrapper">
      <div className="upload-wrapper">
        {alert && (
          <div>
            <h4 className="alert alert-danger">
              It doesn't seem to be a json file!
            </h4>
          </div>
        )}

        <header>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              fill="currentColor"
              class="bi bi-filetype-json"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM4.151 15.29a1.176 1.176 0 0 1-.111-.449h.764a.578.578 0 0 0 .255.384c.07.049.154.087.25.114.095.028.201.041.319.041.164 0 .301-.023.413-.07a.559.559 0 0 0 .255-.193.507.507 0 0 0 .084-.29.387.387 0 0 0-.152-.326c-.101-.08-.256-.144-.463-.193l-.618-.143a1.72 1.72 0 0 1-.539-.214 1.001 1.001 0 0 1-.352-.367 1.068 1.068 0 0 1-.123-.524c0-.244.064-.457.19-.639.128-.181.304-.322.528-.422.225-.1.484-.149.777-.149.304 0 .564.05.779.152.217.102.384.239.5.41.12.17.186.359.2.566h-.75a.56.56 0 0 0-.12-.258.624.624 0 0 0-.246-.181.923.923 0 0 0-.37-.068c-.216 0-.387.05-.512.152a.472.472 0 0 0-.185.384c0 .121.048.22.144.3a.97.97 0 0 0 .404.175l.621.143c.217.05.406.12.566.211a1 1 0 0 1 .375.358c.09.148.135.335.135.56 0 .247-.063.466-.188.656a1.216 1.216 0 0 1-.539.439c-.234.105-.52.158-.858.158-.254 0-.476-.03-.665-.09a1.404 1.404 0 0 1-.478-.252 1.13 1.13 0 0 1-.29-.375Zm-3.104-.033a1.32 1.32 0 0 1-.082-.466h.764a.576.576 0 0 0 .074.27.499.499 0 0 0 .454.246c.19 0 .33-.055.422-.164.091-.11.137-.265.137-.466v-2.745h.791v2.725c0 .44-.119.774-.357 1.005-.237.23-.565.345-.985.345a1.59 1.59 0 0 1-.568-.094 1.145 1.145 0 0 1-.407-.266 1.14 1.14 0 0 1-.243-.39Zm9.091-1.585v.522c0 .256-.039.47-.117.641a.862.862 0 0 1-.322.387.877.877 0 0 1-.47.126.883.883 0 0 1-.47-.126.87.87 0 0 1-.32-.387 1.55 1.55 0 0 1-.117-.641v-.522c0-.258.039-.471.117-.641a.87.87 0 0 1 .32-.387.868.868 0 0 1 .47-.129c.177 0 .333.043.47.129a.862.862 0 0 1 .322.387c.078.17.117.383.117.641Zm.803.519v-.513c0-.377-.069-.701-.205-.973a1.46 1.46 0 0 0-.59-.63c-.253-.146-.559-.22-.916-.22-.356 0-.662.074-.92.22a1.441 1.441 0 0 0-.589.628c-.137.271-.205.596-.205.975v.513c0 .375.068.699.205.973.137.271.333.48.589.626.258.145.564.217.92.217.357 0 .663-.072.917-.217.256-.146.452-.355.589-.626.136-.274.205-.598.205-.973Zm1.29-.935v2.675h-.746v-3.999h.662l1.752 2.66h.032v-2.66h.75v4h-.656l-1.761-2.676h-.032Z"
              />
            </svg>
          </div>
          <input type="file" onChange={uploadFile} id="inputFile" />
          <p style={{ marginRight: "48px"}}>
            <a
              href="https://pastebin.com/ESALr3XL"
              target="_blank"
              rel="noreferrer"
               style={{ color: "#fff", textDecoration: "none" }}
            >
              Know More
            </a>
          </p>

          {translate && (
            <button className="bttn" onClick={translateFile}>
              Translate{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-translate"
                viewBox="0 0 16 16"
              >
                <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
              </svg>
            </button>
          )}
        </header>
        <hr />
        <div id="show-text">
          {loader && (
            <>
              <div>
                <h6 className="alert alert-success">
                  Please be patient for a while 😌{" "}
                </h6>
                <img
                  src={translateLoader}
                  width="300px"
                  height="300px"
                  alt=""
                />
              </div>
            </>
          )}
        </div>

        {download && (
          <>
            <div>
              <h6 className="alert alert-success">Here is your File 😀 </h6>
            </div>
            <button className="download">
              <a
                href="google"
                id="downloadAnchorElem"
                onClick={downloadTxtFile}
              >
                Download Now{" "}
                <img
                  height="20px"
                  width="20px"
                  src="https://img.icons8.com/windows/32/000000/download--v1.png"
                  alt=""
                />
              </a>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Translate;
