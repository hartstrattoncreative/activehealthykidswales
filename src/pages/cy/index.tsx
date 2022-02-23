import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="wide landing homePage">
        <div className="wrapper homePage">
          <a
            className="button"
            id="rcBtn"
            href="reports/AHK-Wales_Report_Card_2018_Welsh.pdf"
            target="_blank"
          >
            Cerdyn Cofnodi 2018
          </a>
        </div>
      </div>

      <div className="section">
        <h1>PLANT EGNÏOL IACH CYMRU</h1>
        <p>
          Nod grŵp arbenigol PEI-Cymru yw defnyddio data am weithgarwch
          corfforol i eirioli dros hawl plant i chwarae, gwirioni ar chwaraeon a
          dawns, dysgu a chyflawni a bod yn egnïol ac iach. Rydym yn llawn
          cymhelliant i hybu ymddygiad iach ac egnïol a llythrennedd corfforol
          mewn plant.
        </p>
      </div>

      <div className="wide keyIndicators" id="kiHeader">
        <div className="blue">
          <h4>Prif Ddangosyddion</h4>
        </div>
      </div>

      <div className="wide">
        <a href="/cy/overall-physical-activity">
          <div className="card orange" id="opal">
            <div className="grade grade-d">d+</div>
            <div className="cardTitle orange">
              <h6 className="lower light">
                Gweithgarwch Corfforol
                <span className="ui arrowRight">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="58.904px"
                    height="18.471px"
                    viewBox="0 0 58.904 18.471"
                    enableBackground="new 0 0 58.904 18.471"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fill="#fff"
                        d="M58.604,9.92c0.401-0.376,0.401-0.993,0-1.369l-8.875-8.34C49.328-0.166,49-0.023,49,0.526v6.709
                                            c0,0.55-0.45,1-1,1H1c-0.55,0-1,0.45-1,1l0,0c0,0.55,0.45,1,1,1h47c0.55,0,1,0.45,1,1v6.709c0,0.55,0.328,0.692,0.729,0.315
                                            L58.604,9.92z"
                      />
                    </g>
                  </svg>
                </span>
              </h6>
            </div>
            <div className="cardIcon">
              <img className="orange" src="icons/overallphys-icon.svg" />
            </div>
          </div>
        </a>
      </div>

      <div className="wide">
        <a href="/cy/community">
          <div className="card red" id="catbe">
            <div className="grade grade-e">ang</div>
            <div className="cardTitle red">
              <h6 className="lower light">
                Y Gymuned a’r Amgylchedd Adeiledig
                <span className="ui arrowRight">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="58.904px"
                    height="18.471px"
                    viewBox="0 0 58.904 18.471"
                    enableBackground="new 0 0 58.904 18.471"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fill="#fff"
                        d="M58.604,9.92c0.401-0.376,0.401-0.993,0-1.369l-8.875-8.34C49.328-0.166,49-0.023,49,0.526v6.709
                                            c0,0.55-0.45,1-1,1H1c-0.55,0-1,0.45-1,1l0,0c0,0.55,0.45,1,1,1h47c0.55,0,1,0.45,1,1v6.709c0,0.55,0.328,0.692,0.729,0.315
                                            L58.604,9.92z"
                      />
                    </g>
                  </svg>
                </span>
              </h6>
            </div>
            <div className="cardIcon">
              <img className="red" src="icons/builtenviro-icon.svg" />
            </div>
          </div>
        </a>
      </div>

      <div className="wide">
        <a href="/cy/school">
          <div className="card red" id="s">
            <div className="grade grade-e">ang</div>
            <div className="cardTitle red">
              <h6 className="lower light">
                Ysgol
                <span className="ui arrowRight">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="58.904px"
                    height="18.471px"
                    viewBox="0 0 58.904 18.471"
                    enableBackground="new 0 0 58.904 18.471"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fill="#fff"
                        d="M58.604,9.92c0.401-0.376,0.401-0.993,0-1.369l-8.875-8.34C49.328-0.166,49-0.023,49,0.526v6.709
                                            c0,0.55-0.45,1-1,1H1c-0.55,0-1,0.45-1,1l0,0c0,0.55,0.45,1,1,1h47c0.55,0,1,0.45,1,1v6.709c0,0.55,0.328,0.692,0.729,0.315
                                            L58.604,9.92z"
                      />
                    </g>
                  </svg>
                </span>
              </h6>
            </div>
            <div className="cardIcon">
              <img className="red" src="icons/school-icon.svg" />
            </div>
          </div>
        </a>
      </div>
      <div className="wide">
        <a href="/cy/active-transport">
          <div className="card orange" id="at">
            <div className="grade grade-d">d+</div>
            <div className="cardTitle orange">
              <h6 className="lower light">
                Teithio Egnïol
                <span className="ui arrowRight">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="58.904px"
                    height="18.471px"
                    viewBox="0 0 58.904 18.471"
                    enableBackground="new 0 0 58.904 18.471"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fill="#fff"
                        d="M58.604,9.92c0.401-0.376,0.401-0.993,0-1.369l-8.875-8.34C49.328-0.166,49-0.023,49,0.526v6.709
                                            c0,0.55-0.45,1-1,1H1c-0.55,0-1,0.45-1,1l0,0c0,0.55,0.45,1,1,1h47c0.55,0,1,0.45,1,1v6.709c0,0.55,0.328,0.692,0.729,0.315
                                            L58.604,9.92z"
                      />
                    </g>
                  </svg>
                </span>
              </h6>
            </div>
            <div className="cardIcon">
              <img className="orange" src="icons/activetransport-icon.svg" />
            </div>
          </div>
        </a>
      </div>
      <div className="wide">
        <a href="/cy/sedentary-behaviour">
          <div className="card red" id="sb">
            <div className="grade grade-f">f</div>
            <div className="cardTitle red">
              <h6 className="lower light">
                Ymddygiad Eisteddol
                <span className="ui arrowRight">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="58.904px"
                    height="18.471px"
                    viewBox="0 0 58.904 18.471"
                    enableBackground="new 0 0 58.904 18.471"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fill="#fff"
                        d="M58.604,9.92c0.401-0.376,0.401-0.993,0-1.369l-8.875-8.34C49.328-0.166,49-0.023,49,0.526v6.709
                                            c0,0.55-0.45,1-1,1H1c-0.55,0-1,0.45-1,1l0,0c0,0.55,0.45,1,1,1h47c0.55,0,1,0.45,1,1v6.709c0,0.55,0.328,0.692,0.729,0.315
                                            L58.604,9.92z"
                      />
                    </g>
                  </svg>
                </span>
              </h6>
            </div>
            <div className="cardIcon">
              <img className="red" src="icons/sedentary-icon.svg" />
            </div>
          </div>
        </a>
      </div>
      <div className="wide">
        <a href="/cy/outdoor-play">
          <div className="card yellow" id="oaap">
            <div className="grade grade-c">c-</div>
            <div className="cardTitle yellow">
              <h6 className="lower light">
                Chwarae Egnïol ac yn yr Awyr Agored
                <span className="ui arrowRight">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="58.904px"
                    height="18.471px"
                    viewBox="0 0 58.904 18.471"
                    enableBackground="new 0 0 58.904 18.471"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fill="#fff"
                        d="M58.604,9.92c0.401-0.376,0.401-0.993,0-1.369l-8.875-8.34C49.328-0.166,49-0.023,49,0.526v6.709
                                            c0,0.55-0.45,1-1,1H1c-0.55,0-1,0.45-1,1l0,0c0,0.55,0.45,1,1,1h47c0.55,0,1,0.45,1,1v6.709c0,0.55,0.328,0.692,0.729,0.315
                                            L58.604,9.92z"
                      />
                    </g>
                  </svg>
                </span>
              </h6>
            </div>
            <div className="cardIcon">
              <img className="yellow" src="icons/outdoor-icon.svg" />
            </div>
          </div>
        </a>
      </div>

      <div className="wide">
        <a href="/cy/government">
          <div className="card yellow" id="ngpsai">
            <div className="grade grade-c">c+</div>
            <div className="cardTitle yellow">
              <h6 className="lower light">
                Polisïau, Strategaethau a Buddsoddiadau Cenedlaethol
                <span className="ui arrowRight">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="58.904px"
                    height="18.471px"
                    viewBox="0 0 58.904 18.471"
                    enableBackground="new 0 0 58.904 18.471"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fill="#fff"
                        d="M58.604,9.92c0.401-0.376,0.401-0.993,0-1.369l-8.875-8.34C49.328-0.166,49-0.023,49,0.526v6.709
                                            c0,0.55-0.45,1-1,1H1c-0.55,0-1,0.45-1,1l0,0c0,0.55,0.45,1,1,1h47c0.55,0,1,0.45,1,1v6.709c0,0.55,0.328,0.692,0.729,0.315
                                            L58.604,9.92z"
                      />
                    </g>
                  </svg>
                </span>
              </h6>
            </div>
            <div className="cardIcon">
              <img className="yellow" src="icons/govt-icon.svg" />
            </div>
          </div>
        </a>
      </div>
      <div className="wide">
        <a href="/cy/family-and-peer">
          <div className="card orange" id="fapi">
            <div className="grade grade-d">d</div>
            <div className="cardTitle orange">
              <h6 className="lower light">
                Dylanwad Teulu a Chyfoedion
                <span className="ui arrowRight">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="58.904px"
                    height="18.471px"
                    viewBox="0 0 58.904 18.471"
                    enableBackground="new 0 0 58.904 18.471"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fill="#fff"
                        d="M58.604,9.92c0.401-0.376,0.401-0.993,0-1.369l-8.875-8.34C49.328-0.166,49-0.023,49,0.526v6.709
                                            c0,0.55-0.45,1-1,1H1c-0.55,0-1,0.45-1,1l0,0c0,0.55,0.45,1,1,1h47c0.55,0,1,0.45,1,1v6.709c0,0.55,0.328,0.692,0.729,0.315
                                            L58.604,9.92z"
                      />
                    </g>
                  </svg>
                </span>
              </h6>
            </div>
            <div className="cardIcon">
              <img className="orange" src="icons/family-icon.svg" />
            </div>
          </div>
        </a>
      </div>
      <div className="wide">
        <a href="/cy/organised-sports">
          <div className="card yellow" id="os">
            <div className="grade grade-c">c+</div>
            <div className="cardTitle yellow">
              <h6 className="lower light">
                Cymryd Rhan Mewn Chwaraeon Trefnus
                <span className="ui arrowRight">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="58.904px"
                    height="18.471px"
                    viewBox="0 0 58.904 18.471"
                    enableBackground="new 0 0 58.904 18.471"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fill="#fff"
                        d="M58.604,9.92c0.401-0.376,0.401-0.993,0-1.369l-8.875-8.34C49.328-0.166,49-0.023,49,0.526v6.709
                                            c0,0.55-0.45,1-1,1H1c-0.55,0-1,0.45-1,1l0,0c0,0.55,0.45,1,1,1h47c0.55,0,1,0.45,1,1v6.709c0,0.55,0.328,0.692,0.729,0.315
                                            L58.604,9.92z"
                      />
                    </g>
                  </svg>
                </span>
              </h6>
            </div>
            <div className="cardIcon">
              <img className="yellow" src="icons/organisedsport-icon.svg" />
            </div>
          </div>
        </a>
      </div>
      <div className="wide">
        <a href="/cy/physical-literacy">
          <div className="card red" id="pl">
            <div className="grade grade-e">ang</div>
            <div className="cardTitle red">
              <h6 className="lower light">
                Llythrennedd Corfforol
                <span className="ui arrowRight">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="58.904px"
                    height="18.471px"
                    viewBox="0 0 58.904 18.471"
                    enableBackground="new 0 0 58.904 18.471"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        fill="#fff"
                        d="M58.604,9.92c0.401-0.376,0.401-0.993,0-1.369l-8.875-8.34C49.328-0.166,49-0.023,49,0.526v6.709
                                            c0,0.55-0.45,1-1,1H1c-0.55,0-1,0.45-1,1l0,0c0,0.55,0.45,1,1,1h47c0.55,0,1,0.45,1,1v6.709c0,0.55,0.328,0.692,0.729,0.315
                                            L58.604,9.92z"
                      />
                    </g>
                  </svg>
                </span>
              </h6>
            </div>
            <div className="cardIcon">
              <img className="red" src="icons/physlit-icon.svg" />
            </div>
          </div>
        </a>
      </div>

      <div className="wide">
        <a href="report-card">
          <div className="readMoreHome blue">
            <h5 className="light blue">Cyfle i ddarllen mwy am yr adroddiad</h5>
          </div>
        </a>
      </div>
    </>
  );
};

export default Home;
