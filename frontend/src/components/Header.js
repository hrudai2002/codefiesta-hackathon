import React, {useEffect, useState} from 'react'
import greenDiamond from './styles/images/decorative-green-diamond.svg'
import blueCircle from './styles/images/decorative-blue-circle.svg'
import whiteCircle from './styles/images/decorative-white-circle.svg'
import yellowCircle from './styles/images/decorative-yellow-circle.svg'
import Translate from './Translate'
import './styles/bootstrap.css'
import './styles/styles.css'
import './styles/translate.css'
const Header = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        setTimeout(() => {
           setLoading(false);
        }, 2000)
    }, [])
  return (
    <div>
      {loading && (
        <div class="spinner-wrapper">
          <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
        </div>
      )}

      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
          <h1 class="navbar-brand mx-auto text-white">
            <i class="fa fa-language" aria-hidden="true"></i> JSON Translator
          </h1>
        </div>
      </nav>

      <header class="header">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-container mb-10">
                <h1>JSON TRANSLATOR</h1>
                <p class="p-large p-heading">
                  Our online service translates regional language JSON files to
                  English JSON files in a heartbeat. The output file will retain
                  its original formatting, for you to revise and edit. JSON file
                  conversion is exceptionally complicated. To bring you
                  excellent quality, our app would be the solution that offers
                  the best conversion out there.
                </p>
              </div>
            </div>
          </div>
          <Translate />
        </div>
        <div class="deco-white-circle-1">
          <img src={whiteCircle} alt="alternative" />
        </div>
        <div class="deco-white-circle-2">
          <img src={whiteCircle} alt="alternative" />
        </div>
        <div class="deco-blue-circle">
          <img src={blueCircle} alt="alternative" />
        </div>
        <div class="deco-yellow-circle">
          <img src={yellowCircle} alt="alternative" />
        </div>
        <div class="deco-green-diamond">
          <img src={greenDiamond} alt="alternative" />
        </div>
      </header>
    </div>
  );
}

export default Header