import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card orange indicatorPage">
          <div className="grade grade-d">d+</div>
          <div className="cardTitle orange">
            <h6 className="lower">Active Transportation</h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <Image
              alt="active transport"
              layout="fill"
              objectFit="contain"
              className="orange"
              src="/icons/activetransport-icon.svg"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Recommendation</h1>
        <p>
          Active transportation is any form of travel through the use of active
          means, such as walking, cycling, skateboarding and scooting. There are
          currently no recommendations for active transportation, although
          children and young people should be encouraged to take active forms of
          transport whenever possible. Research has shown that active
          transportation, especially travel to and from school, contributes a
          substantial portion to children and young people’s overall physical
          activity level and is linked with higher levels of energy expenditure.
          The guidelines for physical activity levels for children and young
          people can be found under the ‘overall physical activity level’
          indicator.
        </p>
      </div>

      <div className="section">
        <h1>Definitions</h1>
        <p>
          For the 2016 Report Card, the Research Work Group used the proportion
          of children and young people who use active transportation to get to
          school, as the benchmark for grading the Active Transportation
          indicator.
        </p>
      </div>

      <div className="section">
        <h1>Survey Data</h1>
        <h6>The National Survey for Wales (2016/17)</h6>
        <p>
          The National Survey for Wales conducts a 25-minute face-to-face
          interview with one adult (aged 16+) in each household across Wales.
          10,493 interviews with parents of primary & secondary school children
          were recorded. The data revealed that 44% of primary school children
          and 34% of secondary school pupils travel actively to school (walk
          with an adult, walk on their own or with other children, plus a few
          that cycle).
        </p>
        <h6>The National Survey for Wales (2016/17)</h6>
        <p>
          The HBSC/SHRN is a school-based survey with data collected through
          self-completion questionnaires administered in the classroom.The
          survey was carried out on a nationally representative sample and was
          completed by over 100,000 children and young people aged 11-16 years
          in Wales. The HBSC/SHRN data reported that 33.79% (34,637 children and
          young people aged 11-16) walk/cycle TO school and 36.09% walk/cycle
          FROM school (10,257 children and young people aged 11-16).
        </p>
      </div>

      <div className="wrapper rm">
        <a className="button" id="rmBtn">
          {" "}
          Read More{" "}
        </a>
      </div>

      <div className="rmView">
        <ol className="dataList">
          <li>
            <span className="dataNumber"> 1 </span>
            <p>
              <span className="underline">The School Sport Survey (2015)</span>
              provides data on 115,398 children aged 7-16 years old from across
              Wales. This is the largest available survey data on children and
              young people’s active transportation. The data showed that
              overall,
              <span className="italic bold">
                40% of children and young people reported they walked, cycled,
                scooted or skated to school.
              </span>
              Further, 44% of Primary School Pupils (school years 3-6) and 37%
              of Secondary School Pupils (school years 7-11) reported they
              walked, cycled, scooted or skated to school.
            </p>
          </li>
          <li>
            <span className="dataNumber"> 2 </span>
            <p>
              <span className="underline">
                The Health Behaviour in School-aged Children (2013/14)
              </span>
              collects data on 9,055 children and young people aged 11-16 years
              old from secondary schools in Wales. The data showed that
              <span className="italic bold">
                32% (34% boys, 31% girls) completed the main part of their
                journey to school by walking or cycling.
              </span>
              In this survey, the data indicates that little has changed in the
              proportion of children and young people who actively travelled to
              school between the years 2006 to 2014.
            </p>
          </li>
          <li className="break"></li>
          <li>
            <span className="dataNumber"> 3 </span>
            <p>
              <span className="underline">
                The National Survey for Wales (2014/15)
              </span>
              conducts a 25-minute face-to-face interview with one adult (aged
              16+) in each household across Wales. 14,285 interviews with
              parents of primary and secondary school children were recorded.
              The data from this survey showed that
              <span className="italic bold">
                49% of primary school children, and 35% of secondary school
                pupils walked to school
              </span>
              regardless of distance from home to school.
            </p>
          </li>
          <li>
            <span className="dataNumber"> 4 </span>
            <p>
              <span className="underline">Data provided by Sustrans Wales</span>
              from their hands up survey on 4,356 children and young people in
              2014/15, reported
              <span className="italic bold">
                53.7% of children aged 7-16 years old travel to school either by
                walking, cycling, or scooting/skating.
              </span>
              The data showed that the levels of children travelling to school
              by walking, cycling, or scooting/skating were consistent for the
              last 4 years of data collection.
            </p>
          </li>
        </ol>
        <div className="closeRM">
          <div></div>
          <h6 className="light">Close</h6>
        </div>
      </div>

      <div className="indicatorExpand">
        <div className="wide">
          <div className="expand xtraDarkBlue">
            <h5 className="light xtraDarkBlue">
              <div></div>
              Deciding on a Grade
            </h5>
          </div>

          <div className="expandContent grade">
            <p>
              The Research Group decided to weight the data in the following
              way:
              <br />
              National Survey of Wales primary school data = 50%
              <br />
              National Survey of Wales secondary school, and HBSC travelling TO
              and FROM school data = 50%
              <br />
              <br />
              <br />
              The justification for this being that if we were to weight all
              four figures equally, secondary school children would be
              double-represented and so an average of the three secondary school
              data would account for 50% and the primary school data account for
              the other 50%. After calculating the above, Active Transport came
              to 39% (D+). The grade in AHK 2016 report card was C. This
              difference may be due to the variance in the data sources
              available and the changes to the scoring system for the 2018
              gradings.
            </p>
          </div>
        </div>

        <div className="wide">
          <div className="expand darkBlue">
            <h5 className="light darkBlue">
              <div></div>
              Considerations
            </h5>
          </div>
          <div className="expandContent considerations">
            <ul>
              <li>
                The best available evidence shows that less than 40% of children
                and young people are travelling actively to school.
              </li>
              <li>
                All data for Active Transportation was collected through
                self-report methods, although, a major strength is that both
                surveys provided national data.
              </li>
              <li>
                There are fewer data sets available to measure this indicator
                than in previous years. The sample size for the surveys that
                have been considered are also smaller than previous. Confidence
                in any trend analysis would be reinforced with greater data
                size.
              </li>
              <li>
                As with previous years, surveys only provide data on travel
                to/from school and not other destinations (e.g. park, shops).
                More research is needed on how children and young people travel
                to other places including shops, parks and friends’ or
                relatives’ houses. These journeys may provide additional
                opportunities for active transportation and therefore should be
                considered for future national surveys.
              </li>
              <li>
                Public Health Wales will conduct an online survey open to all
                schools in Wales that will collect data on how children
                normally/usually travel to. This data will hopefully be
                available for AHK 2020. The process will be underpinned by work
                to validate the methodology and question format, which is
                currently underway.
              </li>
            </ul>
          </div>
        </div>

        <div className="wide">
          <div className="expand blue">
            <h5 className="light blue">
              <div></div>
              How to Improve
            </h5>
          </div>
          <div className="expandContent improve">
            <ul className="indent" aria-label="Sustrans Wales">
              <li>
                Active Journeys to Schools &#45;
                <a
                  href="http://www.sustrans.org.uk/wales/what-we-do/education-and-young-people-wales"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Change4Life Wales">
              <li>
                Walk4Life &#45;
                <a
                  href="http://change4lifewales.org.uk/families/walk4life/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>
            <ul className="indent" aria-label="National Children's Bureau">
              <li>
                Transport and Active Travel &#45;
                <a
                  href="http://www.ncb.org.uk/sustainable-lifestyles/transport-and-active-travel"
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
          <div className="expand lightBlue">
            <h5 className="light lightBlue">
              <div></div>
              Data Sources
            </h5>
          </div>
          <div className="expandContent sources">
            <ul className="indent" aria-label="Sport Wales">
              <li>
                School Sport Survey 2015 &#45;
                <a
                  href="http://sportwales.org.uk/research--policy/surveys-and-statistics/school-sport-survey.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>
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
                National Survey for Wales 2014/15 &#45;
                <a
                  href="http://gov.wales/statistics-and-research/national-survey/?tab=current&lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>
            <ul className="indent" aria-label="Sustrans Wales">
              <li>
                Sustrans Cymru &#45;
                <a
                  href="http://www.sustrans.org.uk/wales"
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
        <Link href="/indicators/sedentary-behaviour">
          <a>
            <div className="card red link nextIndicator">
              <div className="grade grade-inc">f</div>
              <div className="cardTitle red">
                <h6 className="lower">
                  Sedentary Behaviours
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
                <Image
                  alt="sedentary"
                  layout="fill"
                  objectFit="contain"
                  className="red"
                  src="/icons/sedentary-icon.svg"
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
