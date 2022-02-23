import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <nav>
        <div className="menuContent">
          <div className="column navColumn">
            <a href="/cy/home"> Hafan </a>
            <a href="/cy/report-card"> Cardiau Cofnodi </a>
            <a href="/cy/about"> Amdanom Ni </a>
          </div>
          <div className="column mapColumn">
            <a href="/maps/swanlinx/home" target="_blank">
              {" "}
              Swanlinx Map{" "}
            </a>
            <a href="/maps/dc/home" target="_blank">
              {" "}
              Dragon Challenge Map{" "}
            </a>
          </div>
        </div>
        <div className="socialContent">
          <div className="twitterWrapper">
            <a
              className="social twitter fa fa-twitter fa-3x"
              href="https://twitter.com/AHK_Wales"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
      </nav>
      <div className="container">
        <header className="wide">
          <button className="hamburger hamburger--spin" type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
            <span className="hamburger-label menu is-active">Dewislen</span>
            <span className="hamburger-label close">Cau</span>
          </button>
          <a href="/cy/home">
            <div className="logo">
              <img
                src="images/ahkw_logo.svg"
                alt="Active Healthy Kids Wales logo"
                width="600"
                height="415"
              />
            </div>
          </a>

          <div className="langSetting header">
            <a className="en">en</a> <a className="cy is-active">cy</a>
          </div>
        </header>

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
            corfforol i eirioli dros hawl plant i chwarae, gwirioni ar chwaraeon
            a dawns, dysgu a chyflawni a bod yn egnïol ac iach. Rydym yn llawn
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
              <h5 className="light blue">
                Cyfle i ddarllen mwy am yr adroddiad
              </h5>
            </div>
          </a>
        </div>

        <div className="wide">
          <a
            href="https://twitter.com/hashtag/AHKWales?src=hash"
            target="_blank"
            rel="noreferrer"
          >
            <div className="twitterHashtag teal">
              <h6 className="lower light teal">&#35;AHKWales</h6>
            </div>
          </a>
        </div>
        <div className="preFooter-nav wide">
          <div className="menuContent">
            <div className="column navColumn">
              <a href="/cy/home"> Hafan </a>
              <a href="/cy/report-card"> Cardiau Cofnodi </a>
              <a href="/cy/about"> Amdanom Ni </a>
            </div>
            <div className="column mapColumn">
              <a href="/maps/swanlinx/home" target="_blank">
                {" "}
                Swanlinx Map{" "}
              </a>
              <a href="/maps/dc/home" target="_blank">
                {" "}
                Dragon Challenge Map{" "}
              </a>
            </div>
          </div>
        </div>
        <footer className="wide">
          <div className="footerInfo">
            <i className="fa fa-copyright" aria-hidden="true"></i>
            <span className="copyright"> copyright 2016 &#124; </span>
            <span className="siteBy">
              site by
              <a
                href="http://geoshepherds.com"
                target="_blank"
                rel="noreferrer"
              >
                geoshepherds
              </a>
            </span>
          </div>
          <div className="ui-BackToTop">
            <span>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="18.47px"
                height="58.904px"
                viewBox="0 0 18.47 58.904"
                enableBackground="new 0 0 18.47 58.904"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    fill="#299ad6"
                    d="M9.919,0.3c-0.376-0.4-0.993-0.4-1.369,0L0.21,9.342c-0.376,0.4-0.234,0.896,0.315,0.896h6.709
                                c0.55,0,1.334,0.116,1.334,0.666v47c0,0.55,0.45,1,1,1l0,0c0.55,0,1-0.45,1-1v-47c0-0.55,0.116-0.666,0.666-0.666h6.709
                                c0.55,0,0.692-0.495,0.315-0.896L9.919,0.3z"
                  />
                </g>
              </svg>
            </span>
            <div className="ui-content">Yn ôl i&apos;r top</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
