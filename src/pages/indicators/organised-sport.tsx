import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card yellow indicatorPage">
          <div className="grade grade-c">c+</div>
          <div className="cardTitle yellow">
            <h6 className="lower">Organised Sport Participation</h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <img
              alt="organised sport"
              className="yellow"
              src="/icons/organisedsport-icon.svg"
            />
          </div>
        </div>
      </div>
      <div className="section">
        <h1>Recommendation</h1>
        <p>
          There are currently no specific recommendations for the amount of
          children and young people’s sport or dance participation. However, in
          line with Sport Wales’ Vision of ‘Every Child Hooked on Sport for
          Life’, the percentage of children ‘hooked on sport’ was used by the
          Research Work Group as the benchmark for grading this indicator.
        </p>
        <p>
          In the Active Healthy Kids Wales 2016 Report Card, the percentage of
          children ‘hooked on sport’ (in line with Sport Wales’ Vision of ‘Every
          Child Hooked on Sport for Life’) was used by the Research Work Group
          as the benchmark for grading this indicator. However, due to changes
          from a 2-year cycle to a 3-year cycle in the administration of the
          Sport Wales’ School Sport Survey, up to date data on children and
          young people ‘hooked on sport’ was not available.
        </p>
        <p>
          The Research Work Group therefore decided to use the Active Health
          Kids Global Alliance benchmark to allow for the best available data to
          be included in the grading of this indicator.
        </p>
      </div>
      <div className="section">
        <h1>Definitions</h1>
        <p>
          <span className="underline">For children ages 7-16 years old</span>
          <br />
          The percentage of children who take part in sport on three or more
          occasions a week, in an extracurricular (school-based) or a community
          club setting. Curricular PE activity is not included.
          <br />
          <br />
          <span className="underline">For young people aged 16+ years old</span>
          <br />
          The percentage of young people who take part in sport on three or more
          occasions a week, in any setting.
        </p>
      </div>
      <div className="section">
        <h1>Survey Data</h1>
        <p>
          A nationally representative data source was used by the Research Work
          Group to assign an organised sport participation grade.
        </p>
        <p>
          The School Health Research Network: Student Health and Wellbeing
          Survey (2017) collected self-report data on 112,054 children and young
          people aged 11-17 years old. Distributed to 193 schools in Wales,
          children and young people were asked to report organised activities
          they took part in, in their free time outside of school. Possible
          responses to this question were as follows: <br />
          <br />
          a) Organised team sport activities (e.g. football, basketball and
          volleyball) <br />
          b) Organised individual sport activities (e.g. tennis, gymnastics and
          karate) <br />
          c) Attending drama, arts or music groups (e.g. orchestra, choir,
          dance, theatre, playing a musical instrument) <br />
          d) Attending a club (e.g. chess club, debate club, science club){" "}
          <br />
          e) Children and youth organisations (e.g. scouting, guides, cadets,
          Duke of Edinburgh) <br />
          f) Attending faith-based activities (religious services, classes and
          religious youth groups) <br />
          g) Volunteering for a club or organisation
        </p>
        <p>
          The Research Work Group decided that responses, a) Organised team
          sport activities (e.g. football, basketball and volleyball), b)
          Organised individual sport activities (e.g. tennis, gymnastics and
          karate) and e) Children and youth organisations (e.g. scouting,
          guides, cadets, Duke of Edinburgh) should be considered for grading
          this indicator. The justification for the inclusion of ‘children and
          youth organisations’ was that these organisations promote physical
          activity through outdoor physical activities and adventures. (The
          research work group considered using response c) to include dance, but
          due to dance being pooled with other art forms this response was
          excluded)
        </p>
        <p>
          The survey showed that
          <span className="bold">
            55% of children and young people reported attending at least one of
            these outside school organised activities.
          </span>
          There was a difference in the proportion of boys and girls attending
          at least one of these outside school organised activities (60% boys
          and 51% girls). There was also a difference in the proportion of
          children and young people across ethnicities; 56% among white
          populations and 47% among black and minority ethnic (BME) populations,
          reported attending atleast one of these outside school organised
          activities.
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
              Wales. The survey showed that 48% of children were ‘hooked on
              sport’ (children who take part in sport on three or more occasions
              a week in an extracurricular or community club setting). These
              data showed an upward trend in the percentage of children ‘hooked
              on sport’ from 27, 40, and 48 percent in 2011, 2013 and 2015,
              respectively. Moreover, similar proportions of primary (49%) and
              secondary (48%) age school children were ‘hooked on sport’,
              although more boys (52%) were ‘hooked on sport’ than girls (44%).
              Even though there were differences by age, ethnicity, disability
              and socioeconomic status, there has been an
              <span className="italic bold">
                overall increase in the proportion of children ‘hooked on sport’
              </span>
              between 2013 and 2015 for both boys and girls across all of these
              subgroups (age, ethnicity, disability and socioeconomic status).
            </p>
          </li>
          <li>
            <span className="dataNumber"> 2 </span>
            <p>
              <span className="underline">
                The Further Education Sport Survey (2015)
              </span>
              collected data on 4,568 students aged 16+ years old from 12 FE
              colleges across Wales. The survey showed that
              <span className="italic bold">
                49% of students were ‘hooked on sport’
              </span>
              (take part in sport on three or more occasions a week, in any
              setting). Specifically in the younger students aged 16-19 years
              old, 52% of these students were ‘hooked on sport’. The findings in
              relation to subgroups (gender, age, ethnicity, disability and
              socioeconomic status) in this survey were very similar to findings
              from the School Sport Survey (2015). However, trends could not be
              established due to the survey data being in the first year of data
              collection.
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
              The Research Working Group assigned a C+ to this indicator as,
              when taking participation outside of school in organised team
              sport activities, organised individual sport activities, and
              children and youth organisations, the proportion of children and
              young people was between 54 and 59%.
              <span className="bold">
                It is important to note that different questions and surveys
                were used for the grading of the 2018 Organised Sport
                Participation indicator compared to the 2014 and 2016 report
                cards.
              </span>
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
                It is important to take into consideration that different
                questions and surveys were used for the grading of the 2018
                Organised Sport Participation indicator compared to previous
                report cards. Therefore, the increase in grade from a C in the
                2016 Report Card, to the current C+, should be viewed with
                caution as it is not an increase in sport participation, but
                rather the change in the data available and the benchmark used
                for grading. That being said, the grade is still within the C
                category, meaning that an increase in participation in sport,
                dance and organised physical activities/adventures should
                maintain a priority in Wales. In addition, efforts should be
                made to address the inequalities that exist between boys and
                girls and across ethnicities.
              </li>
              <li>
                The School Health Research Network: Student Health and Wellbeing
                Survey used self-report methods to obtain data on organised
                activities. Although the survey reports on the different types
                of organised activities that children and young people take part
                in, the survey does not report the frequency of participation
                (i.e. how many times a week do they take part in sport).
              </li>
              <li>
                Current surveys regarding participation in sport/dance/physical
                activity promoting clubs in Wales do not capture the duration of
                the sessions that children and young people take part in.
              </li>
              <li>
                There is a lack of evidence on children of early years (under 5
                years old). This needs to be addressed through systematic robust
                data collection methods. Further for the 2018 report card there
                is no up to date data available for children under 11 years of
                age.
              </li>
              <li>
                The 2018 School Sport Survey and the Further Education Sport
                Survey are currently being administered across Wales. Although
                the data is not available for this report card, this data will
                be used in the 2020 AHK-Wales report card and will allow the
                analysis of trends in the children and young people &quot;hooked
                on sport&quot;.
              </li>
              <li>
                The best available evidence shows that just over a half of
                children and young people in Wales take part in either organised
                sports (individual or team), or children and youth organisations
                that provides opportunities to participate in physical
                activities/adventures.
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
            <ul className="indent" aria-label="Sport Wales">
              <li>
                Sport Wales &#45;
                <a
                  href="http://sportwales.org.uk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  link{" "}
                </a>
              </li>
              <li>
                ‘In Your Area’ Club Finder &#45;
                <a
                  href="http://sport.wales/mysportwales/in-your-area/in-
            your-area.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                5x60 &#45;
                <a
                  href="http://sport.wales/community-sport/education/5x60.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Dragon Multi Skills & Sport &#45;
                <a
                  href="http://sport.wales/community-
            sport/education/dragon-multi-skills--sport.aspx"
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
            </ul>

            <ul className="indent" aria-label="Netmums">
              <li>
                After School Activities &#45;
                <a
                  href="http://www.netmums.com/sw-wales/places-to-go/after-school-activities"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Disability Sport Wales">
              <li>
                Clubs &#45;
                <a
                  href="http://www.disabilitysportwales.com/clubs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Cerebral Palsy Sport &#45;
                <a
                  href="http://www.cpsport.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  link{" "}
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Miscellaneous">
              <li>
                Scouts Wales/Cymru &#45;
                <a href=" http://www.scoutscymru.org.uk/" target="_blank">
                  link
                </a>
              </li>
              <li>
                Girl Guiding Wales/Cymru &#45;
                <a
                  href="http://www.girlguidingcymru.org.uk/en-gb/"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Wales - Duke of Edinburgh’s Award &#45;
                <a
                  href=" https://www.dofe.org/notice-boards/wales/"
                  target="_blank"
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
              <li>
                Further Education Sport Survey 2015 &#45;
                <a
                  href="http://sport.wales/media/1667685/further_education_sport_survey_-_state_of_the_nation_2015_english__final__2.pdf"
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
        <Link href="/indicators/outdoor-play">
          <a>
            <div className="card yellow link nextIndicator">
              <div className="grade grade-c">c-</div>
              <div className="cardTitle yellow">
                <h6 className="lower">
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
                <img
                  alt="outdoor"
                  className="yellow"
                  src="/icons/outdoor-icon.svg"
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
