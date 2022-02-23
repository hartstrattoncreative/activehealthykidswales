import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <nav>
        <div className="menuContent">
          <div className="column navColumn">
            <a href="/home"> Home </a> <a href="/report-card"> Report Cards </a>
            <a href="about"> About </a>
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
      <div className="container rc">
        <header className="wide">
          <button className="hamburger hamburger--spin" type="button">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
            <span className="hamburger-label menu is-active">menu</span>
            <span className="hamburger-label close">close</span>
          </button>
          <a href="/home">
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
            <a className="en is-active">en</a> <a className="cy">cy</a>
          </div>
        </header>

        <div className="wide landing homePage">
          <div className="wrapper homePage">
            <a
              className="button"
              id="rcBtn"
              href="reports/AHK-Wales_Report_Card_2018.pdf"
              target="_blank"
            >
              Report Card 2018
            </a>
          </div>
        </div>

        <div className="section">
          <h1>ACTIVE HEALTHY KIDS WALES</h1>
          <p>
            The Active Healthy Kids Wales expert group seek to use data on
            physical activity to advocate for childrens&apos; right to play, be
            &#39;hooked on sport and dance&#39;, learn and achieve and be active
            and healthy. We are motivated to promote healthy active behaviour
            and physical literacy in children.
          </p>
        </div>

        <div className="wide keyIndicators" id="kiHeader">
          <div className="blue">
            <h4>Key Indicators</h4>
          </div>
        </div>

        <div className="wide">
          <a href="/indicators/overall-physical-activity">
            <div className="card orange" id="opal">
              <div className="grade grade-d">d+</div>
              <div className="cardTitle orange">
                <h6 className="lower light">
                  Overall Physical Activity Levels
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
          <a href="/indicators/community">
            <div className="card red" id="catbe">
              <div className="grade grade-e">inc</div>
              <div className="cardTitle red">
                <h6 className="lower light">
                  Community and the Built Environment
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
          <a href="/indicators/school">
            <div className="card red" id="s">
              <div className="grade grade-inc">inc</div>
              <div className="cardTitle red">
                <h6 className="lower light">
                  School
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
          <a href="/indicators/active-transport">
            <div className="card orange" id="at">
              <div className="grade grade-d">d+</div>
              <div className="cardTitle orange">
                <h6 className="lower light">
                  Active Transportation
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
          <a href="/indicators/sedentary-behaviour">
            <div className="card red" id="sb">
              <div className="grade grade-f">f</div>
              <div className="cardTitle red">
                <h6 className="lower light">
                  Sedentary behaviours
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
          <a href="/indicators/outdoor-play">
            <div className="card yellow" id="oaap">
              <div className="grade grade-c">c-</div>
              <div className="cardTitle yellow">
                <h6 className="lower light">
                  Outdoor and Active Play
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
          <a href="/indicators/government">
            <div className="card yellow" id="ngpsai">
              <div className="grade grade-c">c+</div>
              <div className="cardTitle yellow">
                <h6 className="lower light">
                  National Government Policy, Strategies and Investments
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
                <img className="yellow" src="media/icons/govt-icon.svg" />
              </div>
            </div>
          </a>
        </div>
        <div className="wide">
          <a href="/indicators/family-and-peer">
            <div className="card orange" id="fapi">
              <div className="grade grade-d">d</div>
              <div className="cardTitle orange">
                <h6 className="lower light">
                  Family and Peer Influences
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
          <a href="/indicators/organised-sports">
            <div className="card yellow" id="os">
              <div className="grade grade-c">c+</div>
              <div className="cardTitle yellow">
                <h6 className="lower light">
                  Organised Sports
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
          <a href="/indicators/physical-literacy">
            <div className="card red" id="pl">
              <div className="grade grade-e">inc</div>
              <div className="cardTitle red">
                <h6 className="lower light">
                  Physical Literacy
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
              <h5 className="light blue">Read More About the Report</h5>
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
              <a href="/home"> Home </a>
              <a href="/report-card"> Report Cards </a>
              <a href="/about"> About </a>
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
            <div className="ui-content">back to top</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
