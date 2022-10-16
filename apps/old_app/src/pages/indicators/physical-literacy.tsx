import { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card red indicatorPage">
          <div className="grade grade-e">inc</div>
          <div className="cardTitle red">
            <h6 className="lower">Physical Literacy</h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <img
              alt="physical literacy"
              className="red"
              src="/icons/physlit-icon.svg"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Recommendation</h1>
        <p>
          The Research Work Group decided that it was important to include this
          additional indicator to reflect the work being completed in Wales.
        </p>
        <p>
          Sport Wales adopts Whitehead&apos;s definition of physical literacy,
          namely: “the motivation, confidence, physical competence, knowledge
          and understanding to value and take responsibility for engagement in
          physical activities for life” (Whitehead, 2017). Physical literacy is
          considered a &apos;holistic&apos; concept and acknowledges the
          physical, affective and cognitive domains as equally important
          (Edwards et al., 2017). Recent developments have acknowledged the
          &apos;social element&apos; of physical literacy alongside the
          affective, physical and cognitive domains (Australian Sports
          Commission, 2017). Sport Wales&apos; definition is comprised of
          physical skills, confidence, motivation, knowledge and understanding
          and lots of opportunities
        </p>
        <p>
          Despite being a lifelong concept, work in Wales has primarily centred
          on youth populations. In the past, Welsh Government and Sport Wales
          have invested into related programmes such as the Physical Literacy
          Programme for Schools. Further, Sport Wales have focused much
          attention on physical literacy as an outcome of successful programme
          delivery.
        </p>
      </div>

      <div className="section">
        <h1>Definitions</h1>
        <p>
          In collaboration with Swansea University, Glyndwr University and Edge
          Hill University, Sport Wales designed a national measure of applied
          Physical Competence for children aged 8-14 years old called the
          “Dragon Challenge”. Physical Competence is an important component of
          Physical Literacy and can be defined as “one&apos;s ability to move
          with competence in a wide variety of activities” (Edwards et al.,
          2017, p. 118). Physical Competence includes the acquisition of health
          and skills related components of fitness (e.g. aerobic fitness,
          strength, flexibility, agility, balance, coordination, power,
          reactions and speed), as well as fundamental movement skills like
          catching, throwing and running. Research suggests that higher physical
          competency levels will cause a positive trajectory toward perceived
          competence, health-related fitness and, sequentially, physical
          activity levels (Foweather et al., 2014; Holfelder & Schott, 2014;
          Robinson et al., 2015; Lubans et al., 2010; Stodden et al., 2008). The
          Dragon Challenge assesses physical competence skills in the areas of
          &apos;stability&apos; (balancing the body in one place or while in
          motion), &apos;locomotion&apos; (moving the body in any direction from
          one point to another) and &apos;manipulative skills&apos; (handling or
          controlling objects with the hand, foot or an implement).
        </p>
        <p>
          Participants perform nine tasks in a circuit that require single or
          combinations of skills to accomplish a goal. The circuit is designed
          to be fun, engaging and challenging. Throughout the circuit,
          participants are also required to use movement concepts such as
          spatial awareness (changes in direction and levels) and awareness of
          effort (changes in speed, force and flow) in relation to objects,
          goals and boundaries, as well as, cognitive attributes such as
          confidence, decision-making and understanding the environment. The
          participants are timed whilst they complete the circuit, and are
          marked by trained assessors on the quality of the movements and the
          completion of the end goal for each task. These are used to calculate
          an Overall Dragon Challenge Score, which provides a single observation
          of a participant&apos;s physical competence at the time of testing
          (Stratton et al., 2015).
        </p>
      </div>

      <div className="section">
        <h1>Survey Data</h1>
        <p>
          The Research Work Group explored the best available representative
          data to assign a physical literacy grade. In doing this, the Group
          divided the concept into four sub- indicators: Physical Competence,
          Motivation, Confidence and Knowledge and Understanding.
        </p>
        <p>
          There was no available data for the affective (Motivation and
          Confidence) and cognitive (Knowledge and Understanding) domains. That
          said, data from the Dragon Challenge offered nationally representative
          Physical Competence data. In 2017, 4355 children aged 10-12 years
          completed the Dragon Challenge obstacle course (Central, n=875; South
          East, n=1238; Mid & West, n=1336; North, n=906). Results concluded
          that 62% children did not achieve an expected level of physical
          competence (bronze/silver awards) leaving 38% children with a good
          level of physical competence. The 38% of children meeting the
          &apos;good level&apos; of physical competence translated to a D+ grade
          for Physical Competence.
        </p>
      </div>

      <div className="section">
        <h5 className="blueText">Dragon Challenge Map</h5>
        <p className="center blueText">Click the image to view the map</p>
        <a
          href="https://geoshepherds.github.io/dragon_challenge/"
          target="_blank"
          rel="noreferrer"
        >
          <div id="dragonChallenge" className="image"></div>
        </a>
      </div>

      <div className="indicatorExpand">
        <div className="wide">
          <div className="expand open  xtraDarkBlue">
            <h5 className="light xtraDarkBlue">Deciding on a Grade</h5>
          </div>

          <div className="expandContent open  grade">
            <p>
              The Research Work Group decided to grade Physical Literacy as
              inconclusive based on the limited available data.
            </p>
          </div>
        </div>

        <div className="wide">
          <div className="expand open  darkBlue">
            <h5 className="light darkBlue">
              <div></div>
              Considerations
            </h5>
          </div>
          <div className="expandContent open  considerations">
            <ul>
              <li>
                There are limited empirical research around the concept of
                physical literacy internationally.
              </li>
              <li>
                Current research does not account for the holistic nature of the
                concept. That is research tends to separate the domains and does
                not consider interactions between the domains.
              </li>
              <li>
                As such, there is a need to be more creative with developing
                approaches to measure/assess physical literacy beyond the
                constructs of physical proficiencies, from a more holistic
                perspective (Edwards et al., 2018).
              </li>
              <li>
                Physical literacy is both integrated and diverse –
                assessment/measurement might be viewed differently in different
                cultures. Therefore, a robust approach is needed to deciding
                which assessment to use, and why for a specific context (Barnett
                et al., under review).
              </li>
              <li>
                Further data collection is needed across Wales to allow the
                Research Work Group to assign a grade to this indicator in
                future Report Cards.
              </li>
            </ul>
          </div>
        </div>

        <div className="wide">
          <div className="expand open  blue">
            <h5 className="light blue">How to Improve</h5>
          </div>
          <div className="expandContent open  improve">
            <ul className="indent" aria-label="Sport Wales">
              <li>
                Physical Literacy &#45;
                <a
                  href="http://physicalliteracy.sportwales.org.uk/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                5 x 60 &#45;
                <a
                  href="http://sport.wales/community-sport/education/5x60.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Dragon Multi Skills and Sport &#45;
                <a
                  href="http://sport.wales/community-sport/education/dragon-multi-skills--sport.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Physical Literacy Programme for Schools&#45;
                <a
                  href="http://sport.wales/community-sport/education/physical-literacy-programme-for-schools-(plps).aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>
            <ul className="indent" aria-label="Miscellaneous">
              <li>
                International Physical Literacy Association &#45;
                <a href="https://www.physical-literacy.org.uk/"> link </a>
              </li>
              <li>
                Australian Sports Commission &#45;
                <a href="https://www.ausport.gov.au/participating/physical_literacy">
                  link
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="wide">
          <div className="expand open  lightBlue">
            <h5 className="light lightBlue">Data Sources</h5>
          </div>
          <div className="expandContent open  sources">
            <ul className="indent" aria-label="Active Healthy Kids Wales">
              <li>
                Dragon Challenge Map &#45;{' '}
                <a href="" target="_blank">
                  {' '}
                  link{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wide">
        <Link href="/indicators/family-and-peers">
          <a>
            <div className="card orange link nextIndicator">
              <div className="grade grade-d">d</div>
              <div className="cardTitle orange">
                <h6 className="lower">
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
                <img
                  alt="family"
                  className="orange"
                  src="/icons/family-icon.svg"
                />
              </div>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Page;
