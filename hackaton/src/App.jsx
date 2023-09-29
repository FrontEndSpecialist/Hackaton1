import { useState } from "react";
import "./App.css";
import Popup from "../src/components/popup";

function App() {
  const [count, setCount] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="main">
      <div className="test">
        {" "}
        <header className="header">
          <div className="logo">
            <a href="#">DeKast</a>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <a href="#">pricing</a>
              </li>
              <li>
                <a href="#">Personal coaches</a>
              </li>

              <Popup />
            </ul>
          </nav>
        </header>{" "}
        <div className="landingBlock">
          <div className="introTextBlock">
            <div className="informationBlock">
              <p className="nameOfGym">DeKast</p>
              <p className="bigText">
                Take care of your health with exercise plans
              </p>
              <p className="smallText">
                Vind jouw perfecte personal coach voor groei en succes! Ontdek
                onze diverse selectie van coaches en begin vandaag nog aan jouw
                reis.
              </p>
              <button className="contact-btn">
                <Popup />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="insideBlock">
        <div className="subscriptionBlock">
          <div className="block block1">
            <div className="blockInformation">
              <div className="blockInformationTop">
                <p>1x per week</p>
              </div>
              <div className="blockInformationBottom">
                <p className="monthlypays">
                  <span>€20&nbsp;</span>/maand
                </p>
                <p className="blockInformationBottomText">
                  Pakket voor beginners en minder veeleisende klanten. Je kunt
                  op elk moment upgraden naar een hoger pakket.
                </p>
              </div>
            </div>
          </div>
          <div className="block block2">
            <div className="blockInformation">
              <div className="blockInformationTop middle">
                <p>Onbeperkt</p>
              </div>
              <div className="blockInformationBottom">
                <p className="monthlypays">
                  <span>€60&nbsp;</span>/maand
                </p>
                <p className="blockInformationBottomText middle">
                  Pakket voor beginners en minder veeleisende klanten. Je kunt
                  op elk moment upgraden naar een hoger pakket.
                </p>
              </div>
            </div>
          </div>
          <div className="block block3">
            <div className="blockInformation">
              <div className="blockInformationTop">
                <p>2x per week</p>
              </div>
              <div className="blockInformationBottom">
                <p className="monthlypays">
                  <span>€40&nbsp;</span>/maand
                </p>
                <p className="blockInformationBottomText">
                  Pakket voor beginners en minder veeleisende klanten. Je kunt
                  op elk moment upgraden naar een hoger pakket.
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="trainers">
        <div className="trainersBlockBig">
          <div className="trainersBlockSmall">
            <div className="blockLeft">
              <p className="personalTrainersTitle">Personal trainers</p>
              <p className="personalTrainersIntro">onze beste trainers</p>
              <p className="personalTrainerstext">
                Bent u op zoek naar een baan en wilt u zich bij onze groep
                aansluiten, dan werven wij voortdurend nieuwe medewerkers voor
                de aangegeven functies.
              </p>
            </div>
            <div className="blockRight">
              <div className="backgroundImage1"></div>
              <div className="blockRightBlock2 backgroundImage2"></div>
              <div className="backgroundImage3"></div>
              <div className="blockRightBlock3 backgroundImage4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="testblock">
        <div className="contactUs">
          <div className="contactUsLeft">
            <p className="contactUsLeftTitle">Kom bij ons trainen</p>
            <p className="contactUsLeftText">
              Benieuwd naar hoe we jou kunnen helpen je fitnessdoelen te
              bereiken? Laat van je horen! Klik op Contact voor een persoonlijk
              gesprek.
            </p>
          </div>
          <div className="contactUsRight">
            <Popup />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerTop">
          <div className="footerLeft">DeKast</div>
          <div className="footerRight">
            <ul>
              <li>Pricing</li>
              <li>onze personal trainers</li>
              <li>kom bij ons sporten!</li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p>@2023 Copyright DeKast</p>
        </div>
      </div>
    </div>
  );
}

export default App;
