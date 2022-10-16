import Overlay from 'components/Overlay';
import { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card red indicatorPage">
          <div className="grade grade-e">inc</div>
          <div className="cardTitle red">
            <h6 className="lower">School</h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <img alt="school" className="red" src="/icons/school-icon.svg" />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Recommendation</h1>
        <p>
          Since children and young people spend a large amount of time in their
          day at school, the school environment represents many opportunities
          for the promotion and facilitation of physical activity (e.g. PE,
          extracurricular sports).
        </p>
        <p>
          In the UK, it is recommended that schools provide
          <span className="underline">
            120 minutes &#40;2 hours&#41; of physical education on average per
            week.
          </span>
          In addition, research has shown that more physical activity
          opportunities offered at school &#40;excluding PE&#41; is linked to
          higher levels of physical activity in children and young people
          <span className="italic">(Carlson et al. 2013)</span>. It is therefor
          important for schools to offer extracurricular opportunitites to
          encourage more active pupils.
        </p>
      </div>

      <div className="section">
        <h1>Definitions</h1>
        <p>
          The benchmarks for this indicator relate to physical activity
          opportunities at school and physical education. The Research Work
          Group used data on, (1) the percentage of schools that offer physical
          activity opportunities (excluding PE) to the majority of their pupils;
          (2) the percentage of schools with sufficient facilities/equipment to
          support pupils&apos; physical activity and sport; (3) the percentage
          of schools where teachers were confident in delivering quality PE
          lessons; (4) the percentage of children that believe PE lessons and
          school sport help them to have a healthy lifestyle; to allocate a
          grade to this indicator.
        </p>
      </div>

      <div className="section">
        <h1>Survey Data</h1>
        <p>
          Since 2016, there has been no available or representative data that
          reported children&apos;s PE and School Sport experiences.
        </p>
      </div>

      <Overlay>
        <ol className="dataList">
          <li>
            <span className="dataNumber"> 1 </span>
            <p>
              <span className="underline">The School Sport Survey (2015)</span>
              provides data on 115,398 children aged 7-16 years old from across
              Wales. Further, the 2015 Survey also provides data from 914
              physical education coordinators from primary and secondary schools
              in Wales. <br />
              <br />
              In total,
              <span className="italic bold">
                60% of primary schools and 80% of secondary schools provide a
                wide variety of extracurricular sport and dance opportunities to
                all pupils.
              </span>
              This provision includes health, fitness and wellbeing activities,
              competitive activities, creative activities, and adventure
              activities. On average, primary schools provide 11 different
              extracurricular activities for pupils, and secondary schools
              provide 16 different extracurricular activities. <br />
              <br />
              Physical education staff reported that 70% of primary and 62% of
              secondary schools agreed that the school had sufficient access to
              facilities to provide sport, and that 54% of primary and 50% of
              secondary schools owned sports facilities that were of high
              quality. Further,
              <span className="italic bold">
                73% of primary and 71% of secondary schools agreed that they had
                access to sufficient equipment to provide quality physical
                education and sport.
              </span>
              <br />
              <br />
              <span className="italic bold">
                77% of primary and 85% of secondary schools reported teachers
                were confident in delivering quality physical education lessons
                in school.
              </span>
              <br />
              <br />
              From the children&apos;s perspective,
              <span className="italic bold">
                62% of children (64% boys, 60% girls) reported that physical
                education lessons and school sport had really helped them to
                have a healthy lifestyle.
              </span>
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
              With no updated and available data since the 2016 report card, the
              Research Work Group assigned an inconclusive grade to the School
              indicator.
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
                Given the upcoming curriculum changes that places an emphasis on
                health and well-being, nationally representative research on
                School is required.
              </li>
              <li>
                Previous research in this area has focused on the amount of PE
                and School Sport provision offered to children and young people.
              </li>
              <li>
                Future research should investigate the quality of PE and School
                Sport provision that is nationally representative.
              </li>
              <li>
                Further, research should identify factors that influence
                participation in physical activity at school.
              </li>
              <li>
                Research should address the following benchmarks set by the
                Active Healthy Kids Global Alliance: <br />- % of schools with
                active school policies
                <br />
                - % of schools where the majority (≥ 80%) of students are taught
                by a PE specialist.
                <br />- % of schools where the majority (≥ 80%) of students are
                offered the mandated amount of PE
                <br />- % of schools where teachers were confident in delivering
                quality PE lessons % of children that believe PE lessons and
                school sport help them to have a healthy lifestyle.
              </li>
              <li>
                Consideration for the individual competing self-report data,
                i.e. the PE coordinator completing on behalf of primary school
                teachers is not representative. As such, caution should be made
                when analysing such responses.
              </li>
              <li>
                Schools should maximise opportunities for pupils to move more
                and sit less throughout the school day.
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
                School Sport Survey ‘School Toolkit&apos; &#45;
                <a
                  href="http://sportwales.org.uk/research--policy/surveys-and-statistics/school-sport-survey/using-the-results.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Community Sport &#45;
                <a
                  href="http://ourambitiousjourney.sport.wales/"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>
            <ul className="indent" aria-label="Miscellaneous">
              <li>
                Healthy School Scheme Wales &#45;
                <a
                  href="http://www.wales.nhs.uk/sitesplus/888/page/82249"
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
            <ul className="indent" aria-label="Sport Wales">
              <li>
                School Sport Survey &#45;
                <a
                  href="http://sportwales.org.uk/research--policy/surveys-and-statistics/school-sport-survey.aspx"
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
        <Link href="/indicators/community">
          <a>
            <div className="card red link nextIndicator">
              <div className="grade grade-e">inc</div>
              <div className="cardTitle red">
                <h6 className="lower">
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
                <img
                  alt="built environment"
                  className="red"
                  src="/icons/builtenviro-icon.svg"
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
