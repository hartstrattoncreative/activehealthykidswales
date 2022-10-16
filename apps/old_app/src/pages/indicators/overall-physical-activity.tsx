import Overlay from 'components/Overlay';
import { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card orange indicatorPage">
          <div className="grade grade-d">d+</div>
          <div className="cardTitle orange">
            <h6 className="lower">Overall Physical Activity Levels</h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <img
              alt="pverall physical activity"
              className="orange"
              src="/icons/overallphys-icon.svg"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Recommendation</h1>
        <p>
          The UK-wide Chief Medical Officers’ guidelines for physical activity
          recommend that to receive the health benefits from physical activity:
          <br />
          <br />
          <span className="underline">
            Children under 5 years old (Early Years)
          </span>
          <br />
          Children who are capable of walking unaided should be physically
          active daily for at least 180 minutes (3 hours), spread throughout the
          day. For children who cannot yet walk unaided, physical activity
          should be encouraged from birth, especially through floor-based play
          and water-based activities in safe environments.
          <br />
          <br />
          <span className="underline">
            Children and young people (5-18 years old)
          </span>
          <br />
          All children and young people should engage in moderate to vigorous
          intensity physical activity (MVPA) for at least
          <a
            className="textLink"
            href="http://www.bhfactive.org.uk/userfiles/Documents/startactivestayactive.pdf"
            target="_blank"
            rel="noreferrer"
          >
            60 minutes and up to several hours every day.
          </a>
          Participation in vigorous intensity activities should be incorporated
          at least three days a week; these include any activities that
          strengthen muscles and bones.
        </p>
      </div>

      <div className="section">
        <h1>Definitions</h1>
        <p>
          The benchmark used by the Research Work Group to allocate a grade to
          this indicator was: The percentage of children and young people who
          meet the recommended physical activity guidelines.
        </p>
      </div>

      <div className="section">
        <h1>Survey Data</h1>
        <p>
          The National Survey for Wales (NSW, 2016-17) asked parents/guardians
          of children aged 3-17 to report the amount of time their child was
          active on each day in the previous seven days. Parents were informed
          that they should consider activities that left their child feeling
          warm or at least slightly out of breath and that these activities
          could include playing sport, cycling, running or brisk walking either
          at school, outside school, with a club, with friends or on their own.
          Results of the survey demonstrated that
          <span className="bold">
            51% of children were active for at least an hour seven days a week.
          </span>
          A higher proportion of boys were active for at least 1 hour a day in
          comparison to girls (55% B, 47% G). Due to the differences in method
          used to gather data, results are not comparable to previous surveys
          (i.e., Welsh Health Survey, 2014).
        </p>
        <p>
          The HBSC/SHRN (2017) asked young people aged 11-16 how many days they
          were physically active for a total of at least 60 minutes per day. The
          survey found that
          <span className="bold">
            18.4% of young people reported being physically active for at least
            an hour on seven days per week.
          </span>
          More boys than girls reported being active (23% B, 14% G). A decline
          in the proportion of young people reporting being active is observed
          from 11 years of age to 16 years of age (25.7%-11 years, 22.7%-12
          years, 18.4%-13 years, 15.1%-14 years, 12.4%-15 years 12.2%-16 years).
          The proportion of White and Black Minority Ethnic children reporting
          being active was similar (18.3% W, 19.1% BME). These findings are
          similar to previous results from the same survey. In 2015 17.8% of
          young people reported being active for a total of at least 60 minutes
          per day, whereas in 2014 this figure was 15% and in 2010 19% were
          active.
        </p>
      </div>

      <div className="section">
        <h5 className="blueText">Swanlinx Map</h5>
        <p className="center blueText">Click the image to view the map</p>
        <a
          href="https://geoshepherds.github.io/swanlinx/"
          target="_blank"
          rel="noreferrer"
        >
          <div id="swanlinx" className="image"></div>
        </a>
      </div>

      <Overlay>
        <ol className="dataList">
          <li>
            <span className="dataNumber"> 1 </span>
            <p>
              <span className="underline">
                The Health Behaviour in School-aged Children Survey (2013/14)
              </span>
              , on 9,055 Secondary School children and young people aged 11-16
              year olds, provides data on percentage of children and young
              people taking part in at least 60 minutes of moderate to vigorous
              intensity physical activity (MVPA) every day of the week. The
              survey showed that only
              <span className="italic bold">
                15% of of children and young people met the recommendation of at
                least 60 minutes of moderate to vigorous intensity physical
                activity (MVPA) every day of the week.
              </span>
              The survey found that boys were more active than girls across all
              age groups and socioeconomic status, with 20% of boys of boys and
              only 11% of girls meeting the recommended physical activity
              guidelines. However, there was little difference in overall MVPA
              found across difference socioeconomic status, as well as, across
              different regions of Wales. In addition, there was a small
              downward trend in physical activity for boy and girls between 2006
              and 2014, with physical activity levels going from 21% in 2006, to
              19% in 2010 to 15% in 2014.
            </p>
          </li>
          <li>
            <span className="dataNumber"> 2 </span>
            <p>
              <span className="underline">The Welsh Health Survey (2014)</span>{' '}
              on children aged 4-15 years old, asked how much exercise the
              children had undertaken on each day in the last week. The children
              were asked to include exercise done at school as well as outside
              of school. The survey showed that
              <span className="italic bold">
                35% of children participated in MVPA for at least 1 hour every
                day.
              </span>
              A gender difference was seen between boys and girls, with a higher
              proportion of boys (40%) participating each day compared to girls
              (29%). In this survey there has been no significant change in the
              levels of physical activity since 2007. The concerning results
              from this survey are that 12% of boys and 15% of girls did not
              take part in any physical activity in the last week.
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
              The Research Working Group assigned a D+ to the physical activity
              category to reflect the findings from both surveys. The percentage
              of active young people was between 18% and 51%. By taking the
              average of both surveys (34%), based on the new grading scheme
              proposed by the Active Healthy Kids Global Alliance, this
              represented a D+ score. This grade has increased from the D- grade
              awarded in 2016, however this is largely reflective of the change
              in grading criteria set by the Active Healthy Kids Global
              Alliance. Additionally, changes to the way data was gathered in
              the new National Survey for Wales in relation to the previous
              Welsh Health Survey make comparisons, or analysis of trends
              between data difficult. HBSC/SHRN data is comparable to previous
              years and analysis of trends reveals limited change in PA levels
              of children aged 11-16 since the previous surveys in 2015 (17.8%
              active), 2014 (15% active) and 2010 (19% active).
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
                Both NSW and HBSC use self-reported measures of physical
                activity to obtain data.
              </li>
              <li>
                There continues to be no large scale studies measuring the
                physical activity behaviours of young people objectively. This
                is particularly important given the evidence of over-reporting
                of physical activity levels observed via self-report when
                compared to accelerometer measured physical activity (Health
                Survey of England, 2008).
              </li>
              <li>
                There is limited data available for the physical activity levels
                of children of all ages, particularly during the early years
                (children under 5).
              </li>
              <li>
                The impact of intervention programmes aiming to increase
                physical activity need to be quantified.
              </li>
              <li>
                The best available evidence indicates that the majority of young
                people in Wales need to increase their physical activity levels.
                This can be achieved through a range of behaviours including
                dance, sport, active transportation and active play.
              </li>
              <li>
                A significant effort needs to be made to address very low levels
                of physical activity in girls.
              </li>
              <li>
                Efforts should be made to address the decline in physical
                activity observed with age.
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
                Dragon Multi Skills &amp; Sport &#45;
                <a
                  href="http://sport.wales/community-sport/education/dragon-multi-skills--sport.aspx"
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
                  href=" http://nhs.uk/Livewell/fitness/Pages/Activelifestyle.asp"
                  target="_blank"
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
                  href="http://walescoastpath.gov.uk/default.aspx?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Sustrans Wales &#45;
                <a
                  href="http://sustrans.org.uk/wales"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Play Wales &#45;
                <a
                  href="http://playwales.org.uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  link{' '}
                </a>
              </li>
              <li>
                British Heart Foundation &#45;
                <a
                  href="https://bhf.org.uk/heart-health/children-and-young-people"
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
                Health Behaviour in School-aged Children Wales Survey 2013/14
                &#45;
                <a
                  href="http://gov.wales/statistics-and-research/health-behaviour-school-aged-children/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Welsh Health Survey 2014 &#45;
                <a
                  href="http://gov.wales/statistics-and-research/welsh-health-survey/?lang=en"
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
        <Link href="/indicators/organised-sport">
          <a>
            <div className="card yellow link nextIndicator">
              <div className="grade grade-c">c+</div>
              <div className="cardTitle yellow">
                <h6 className="lower">
                  Organised Sport Participation
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
                  alt="organised sport"
                  className="yellow"
                  src="/icons/organisedsport-icon.svg"
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
