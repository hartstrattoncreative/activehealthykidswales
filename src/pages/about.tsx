import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <>
      <div className="wide landing aboutPage">
        <div className="landingBanner indicator">
          <h4>About Us</h4>
        </div>
      </div>
      <div className="section">
        <h2>Expert Group Members</h2>
        <ul className="expertGroup">
          <li>
            <div className="profilePic" id="gareth"></div>
            <div className="profile">
              <p className="name">Prof. Gareth Stratton</p>
              <p className="uni">Swansea University</p>
            </div>
          </li>
          <li>
            <div className="profilePic" id="chris"></div>
            <div className="profile">
              <p className="name">Dr. Chris Roberts</p>
              <p className="uni">
                Health Behaviours Survey in Children - Wales
              </p>
            </div>
          </li>

          <br />
          <br />

          <li>
            <div className="profilePic" id="simon"></div>
            <div className="profile">
              <p className="name">Dr. Simon Williams</p>
              <p className="uni">University of South Wales</p>
            </div>
          </li>
          <li>
            <div className="profilePic" id="becca"></div>
            <div className="profile">
              <p className="name">Rebecca Mattingley</p>
              <p className="uni">Sport Wales</p>
            </div>
          </li>

          <br />
          <br />

          <li>
            <div className="profilePic" id="robert"></div>
            <div className="profile">
              <p className="name">Robert Sage</p>
              <p className="uni">Sustrans Wales</p>
            </div>
          </li>
          <li>
            <div className="profilePic" id="malcolm"></div>
            <div className="profile">
              <p className="name">Malcolm Ward</p>
              <p className="uni">Public Health Wales</p>
            </div>
          </li>

          <br />
          <br />

          <li>
            <div className="profilePic" id="marianne"></div>
            <div className="profile">
              <p className="name">Marianne Mannello</p>
              <p className="uni">Play Wales</p>
            </div>
          </li>
          <li>
            <div className="profilePic" id="sue"></div>
            <div className="profile">
              <p className="name">Dr. Sue Taylor</p>
              <p className="uni">Glyndwr University</p>
            </div>
          </li>

          <br />
          <br />

          <li>
            <div className="profilePic" id="richard"></div>
            <div className="profile">
              <p className="name">Richard Tyler</p>
              <p className="uni">Swansea University</p>
            </div>
          </li>
          <li>
            <div className="profilePic" id="rebecca"></div>
            <div className="profile">
              <p className="name">Rebecca Cox</p>
              <p className="uni">Government of Wales</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="section contact">
        <div className="wrapper">
          <a
            className="button"
            id="contactBtn"
            href="mailto:g.stratton@swansea.ac.uk"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="section ack">
        <h2>Other Contributors</h2>
        <ul className="acknowledgements">
          <li>
            <div className="profile">
              <p className="name">Dr. Lynne Boddy</p>
              <p className="uni">Liverpool John Moores University</p>
            </div>
          </li>
          <li>
            <div className="profile">
              <p className="name">Prof. Martyn Standage</p>
              <p className="uni">Bath University</p>
            </div>
          </li>
          <li>
            <div className="profile">
              <p className="name">Prof. Mark Tremblay</p>
              <p className="uni">University of Ottawa</p>
            </div>
          </li>
          <li>
            <div className="profile">
              <p className="name">Prof. Sinead Brophy</p>
              <p className="uni">Swansea University</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="wide supportLogos">
        <h2>Supporting Organsisations</h2>
        <div className="logos">
          <a href="http://www.swansea.ac.uk/" target="_blank" rel="noreferrer">
            <div className="logo" id="swanseaUni"></div>
          </a>
          <a
            href="http://www.southwales.ac.uk/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="logo" id="southWalesUni"></div>
          </a>
          <a
            href="https://www.cardiffmet.ac.uk/Pages/default.aspx"
            target="_blank"
            rel="noreferrer"
          >
            <div className="logo" id="cardiffMetUni"></div>
          </a>
          <a href="http://www.glyndwr.ac.uk/" target="_blank" rel="noreferrer">
            <div className="logo" id="glyndwrUni"></div>
          </a>
          <a href="http://sport.wales/" target="_blank" rel="noreferrer">
            <div className="logo" id="sportWales"></div>
          </a>
          <a
            href="http://www.publichealthwales.wales.nhs.uk/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="logo" id="pubHealth"></div>
          </a>
          <a
            href="http://www.playwales.org.uk/eng/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="logo" id="playWales"></div>
          </a>
        </div>
      </div>

      <div className="section tweets">
        <div className="twitterFeed">
          <a
            className="twitter-timeline"
            data-width="320"
            data-height="500"
            data-theme="light"
            href="https://twitter.com/AHK_Wales"
          >
            Tweets by AHK_Wales
          </a>
          <script
            async
            src="//platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>
      </div>
    </>
  );
};

export default About;
