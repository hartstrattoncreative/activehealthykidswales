import Overlay from "components/Overlay";
import { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card red indicatorPage">
          <div className="grade grade-e">inc</div>
          <div className="cardTitle red">
            <h6 className="lower light">Community and the Built Environment</h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <img
              alt="built environment"
              className="red"
              src="/icons/builtenviro-icon.svg"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Recommendation</h1>
        <p>
          The Community and the Built Environment indicator refers to perceived
          safety, access, and availability of facilities and spaces that provide
          opportunities for physical activity in children and young people.
          There is no specific recommendation for Community and the Built
          Environment, however researcher has reported a relationship between
          the built environment and physical activity
          <span className="italic">(Sallis and Glanz, 2006).</span>
        </p>
        <p>
          The benchmarks used to grade this indicator are the percentage of
          children/parents satisfied with the play facilities available in their
          local area, as well as the percentage of children/parents living in a
          safe neighbourhood where they can be physically active.
        </p>
      </div>

      <div className="section">
        <h1>Definitions</h1>
        <p>
          For the 2016 Report Cards, the Research Work Group used the percentage
          of children/parents satisfied with the play facilities available in
          their local area to assign a grade to this indicator. Feedback from
          the largest consultation of its kind in Wales was also used to assist
          with the grading process. However, for the 2018 Report Card, the data
          available around these benchmarks were limited.
        </p>
      </div>

      <div className="section">
        <h1>Survey Data</h1>
        <p>
          The National Survey for Wales (2016/17) conducted 10,493 face-to-face
          interviews with one adult (aged 16+) in each household across Wales.
          From the previous 2014/15 round of interviews, the survey had adjusted
          questions around perceived safety, access, and availability of
          facilities and spaces that provide opportunities for physical activity
          in children and young people.
        </p>
        <p>
          In 2014/15, the data found 54% and 38% of parents with a child aged
          1-10 and 11-15 years, respectively, were satisfied with the play
          facilities in their local area. Of the parents with a child aged 1-10
          years who were dissatisfied, 83% reported there was a lack of suitable
          outdoor public places for their child to play, whereas 64% reported a
          lack of suitable indoor spaces. Additionally, of the parents with a
          child aged 11-15 years who were dissatisfied, 77% cited a lack of
          suitable outdoor public places, 79% believed there was a lack of
          indoor public places, and 64% believed there were too few clubs or
          organised activities.
          <span className="bold">
            However, questions around this information was not included in the
            2015/16 round of interviews, therefore no new data was available.
          </span>
        </p>
        <p>
          In 2016/2017, data was available on adults&apos; thoughts about their
          local area, but this was not specifically geared towards physical
          activity. The National Survey for Wales found that, when people are
          asked to think about their local area: 72% felt like they belong; 72%
          felt that people from different backgrounds get on well together; and
          73% felt that people treated each other with respect and
          consideration. All three of these percentages are lower than they were
          in 2014- 15.
        </p>
      </div>

      <Overlay>
        <ol className="dataList">
          <li>
            <span className="dataNumber"> 1 </span>
            <p>
              <span className="underline">
                The National Survey for Wales (2014/15)
              </span>
              conducts a 25-minute face-to-face interview with one adult (aged
              16+) in each household across Wales. 14,285 interviews with
              parents of primary and secondary school children were recorded.
              The data found
              <span className="italic bold">
                54% and 38% of parents with a child aged 1-10 and 11-15 years,
                respectively, were satisfied with the play facilities in their
                local area.
              </span>
              Of the parents with a child aged 1-10 years who were dissatisfied,
              83% reported there was a lack of suitable outdoor public places
              for their child to play, whereas 64% reported a lack of suitable
              indoor spaces. Additionally, of the parents with a child aged
              11-15 years who were dissatisfied, 77% cited a lack of suitable
              outdoor public places, 79% believed there was a lack of indoor
              public places, and 64% believed there were too few clubs or
              organised activities.
            </p>
          </li>
          <li>
            <span className="dataNumber"> 2 </span>
            <p>
              <span className="underline">What Next? (2015) </span> - Children
              and young people in Wales given a voice in one of the largest
              consultations of its kind. Initiated by the Children’s
              Commissioner for Wales, consultations with children and young
              people (aged 3-18+) in Wales, as well as, their parents, gave
              feedback on four key areas of focus linked to the United Nations
              Convention on the Rights of the Child (UNCRC): Provision,
              Protection, Participation and Promotion. <br />
              The data showed that
              <span className="italic bold">
                &#39;more places to play&#39; was the highest priority (49%) for
                children aged 3-7.
              </span>
              Other common priorities for this age group were tackling poverty
              (29%), improving child safety (28%) and tackling bullying (28%).
              For children aged 7-11 years, stopping bullying was the highest
              priority (55%). The next two highest priorities for this age group
              were helping children and families in poverty (47%), and making
              local areas safer for children (41%). The most common priority
              (53%) for young people aged 11-18 was tackling bullying. More than
              40% of young people reported protecting children from violence and
              abuse at home, more facilities in the local area, and help for
              children and families in poverty as their highest priorities.
              Across all data reported, priorities did not vary substantially by
              age, gender or region for all age groups.
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
              During the 2018 Report Card grading process, there were limited
              up-to-date data available around the benchmarks to support a grade
              for this indicator. Therefore, the Research Work Group decided an
              inconclusive grade should be assigned.
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
                Community and the Built Environment indicator decreased from a B
                in the 2014 Report Card to a C in 2016, however, a grade cannot
                be assigned for the 2018 Report Card.
              </li>
              <li>
                Little to no up to date evidence was available for this
                indicator. Further data collection, research, and interventions
                are needed to reduce the barriers towards physical activity and
                play.
              </li>
              <li>
                Improvements in perceived safety, access, and facilities may
                produce improvements in physical activity, outdoor and active
                play, and reductions in sedentary time.
              </li>
            </ul>
          </div>
        </div>

        <div className="wide">
          <div className="expand blue open">
            <h5 className="light blue">Data Sources</h5>
          </div>
          <div className="expandContent open  sources open">
            <ul className="indent" aria-label="Welsh Government">
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
            <ul
              className="indent"
              aria-label="Children's Commissioner for Wales"
            >
              <li>
                What Next? &#45;
                <a
                  href="http://www.childcomwales.org.uk/wp-content/uploads/2016/04/CYP-FINAL.compressed.pdf"
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
        <Link href="/indicators/government">
          <a>
            <div className="card yellow link nextIndicator">
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
                <img
                  alt="government"
                  className="yellow"
                  src="/icons/govt-icon.svg"
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
