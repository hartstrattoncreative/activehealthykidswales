import Overlay from "components/Overlay";
import { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card orange indicatorPage">
          <div className="grade grade-d">d</div>
          <div className="cardTitle orange">
            <h6 className="lower light">Family and Peer Influences</h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <img alt="family" className="orange" src="/icons/family-icon.svg" />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Recommendation</h1>
        <p>
          There are currently no specific recommendations for parental or peer
          influence on children/young people’s sports participation or physical
          activity, although many studies have shown a relationship between
          parent and childhood activity
          <span className="italic">(Trost et al. 2003).</span>
        </p>
        <p>
          The UK-wide Chief Medical Officers’ guidelines for physical activity
          for parents/adults, recommend that over a week, activity should add up
          to
          <a
            className="textLink"
            href="http://www.bhfactive.org.uk/userfiles/Documents/startactivestayactive.pdf"
            target="_blank"
            rel="noreferrer"
          >
            at least 150 minutes (2½ hours) of moderate intensity activity.
          </a>
          This should be completed in bouts of 10 minutes or more, or to do 30
          minutes on at least 5 days a week.
        </p>
      </div>

      <div className="section">
        <h1>Definitions</h1>
        <p>
          The benchmarks used by the Research Work Group for this indicator
          were: (1) Percentage of parents who meet the Global Recommendations on
          Physical Activity for Health, and (2) Percentage of family members
          (e.g., parents, guardians) who are physically active with their kids.
        </p>
      </div>

      <div className="section">
        <h1>Survey Data</h1>
        <p>
          One nationally representative data source was used by the Research
          Work Group to assign a family and peer grade.
        </p>
      </div>

      <Overlay>
        <ol className="dataList">
          <li>
            <span className="dataNumber"> 1 </span>
            <p>
              <span className="underline">
                National Survey for Wales (2016/17)
              </span>
              The National Survey for Wales collected data on over 10,000
              randomly-selected people aged 16 and over across Wales. The
              2016/17 survey found that
              <span className="italic bold">
                59% of parents were moderately active for 150 minutes per week
              </span>
              and 8% of parents took part in vigorous activity for more than 75
              minutes per week. Further, it was revealed that 31% of parents
              took their child to the playground and 20% of parents took part in
              informal games with their child such as playing Frisbee. <br />
              <br />
              The National Survey for Wales is representative across all regions
              in Wales. Given that the data from Family and Peers was derived
              from only one data source, this may be viewed as a limitation.
              Likely biases in the results include an over-emphasis on parental
              involvement as there was a lack of representative data on peers.
            </p>
          </li>
        </ol>
      </Overlay>

      <div className="indicatorExpand">
        <div className="wide">
          <div className="expand open  xtraDarkBlue">
            <h5 className="light xtraDarkBlue">Deciding on a Grade</h5>
          </div>

          <div className="expandContent open  grade">
            <p>
              The Research Working Group assigned a D to this category. After
              taking percentages of all questions related to family and peers’
              involvement into account, the proportion of active children was
              30%.
            </p>
            <p>
              Though there was little change in the participation in parents’
              sport and physical activity, the Family and Peers grade has
              decreased from D+ to D since the last AHK- Wales report card
              completed in 2016. Possible explanations for this may be because
              of the differences in data sources used to generate the grade in
              2016 compared to 2018. Further, in 2016, the +/– attributed to
              each grade denoted strengths/inequalities in the data. This no
              longer applied in the 2018 as the scoring system changed.
            </p>
          </div>
        </div>

        <div className="wide">
          <div className="expand open  darkBlue">
            <h5 className="light darkBlue">Considerations</h5>
          </div>
          <div className="expandContent open  considerations">
            <ul>
              <li>
                Parents are encouraged to participate in sport, dance and
                physical activity. Parents should try to reduce their own and
                their child/children’s sitting time (sedentary time), especially
                time spent in front of screens.
              </li>
              <li>
                Parents are encouraged to regularly plan for, and engage in
                physical activity or sports with their children, particularly in
                the evenings, weekends and holidays. Parents should encourage
                active transport and allow their children to explore physically
                active challenges within their environment.
              </li>
              <li>
                Given that the data source is self-reported, there are no
                large-scale studies in which physical activity has been measured
                objectively in adults (parents).
              </li>
              <li>
                Since physical inactivity is a problem for children and young
                people of all ages in Wales (see Overall Physical Activity
                Levels indicator), interventions could encourage families to be
                more physically active and reduce sedentary time together.
              </li>
              <li>
                Future research needs to focus on the influence of parents on
                various amounts and types of physical activity and how these
                change with age.
              </li>
              <li>
                The data sourced from the National Survey for Wales solely
                focused on parental physical activity. There was no available
                data on peers’ influence for the 2018 report card.
              </li>
              <li>
                A significant effort needs to be made to address the lack of
                data available on peers’ influence.
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
                Dragon Multi Skills &amp; Sport &#45;
                <a
                  href="http://sport.wales/community-sport/education/dragon- multi-skills--sport.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Miscellaneous">
              <li>
                Get Active Your Way &#45;
                <a
                  href="http://www.nhs.uk/Livewell/fitness/Pages/Activelifestyle.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Change4Life Wales &#45;
                <a
                  href="http://change4lifewales.org.uk/families/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Sustrans Wales &#45;
                <a
                  href="http://www.sustrans.org.uk/wales"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                British Heart Foundation &#45;
                <a
                  href="https://www.bhf.org.uk/heart-health/children-and-young-people"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                60 Active Minutes &#45;
                <a
                  href="http://change4lifewales.org.uk/families/active_minutes/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Wales Coast Path &#45;
                <a
                  href="http://www.walescoastpath.gov.uk/default.aspx?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
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
            <ul className="indent" aria-label="Welsh Government">
              <li>
                National Survey for Wales(2016/17) &#45;
                <a
                  href="https://gov.wales/statistics-and-research/national-survey/?tab=current&lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="wide">
        <Link href="/indicators/school">
          <a>
            <div className="card red link nextIndicator">
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
                <img
                  alt="school"
                  className="red"
                  src="/icons/school-icon.svg"
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
