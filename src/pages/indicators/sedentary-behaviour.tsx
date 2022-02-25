import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card red indicatorPage">
          <div className="grade grade-f">f</div>
          <div className="cardTitle red">
            <h6 className="lower light">Sedentary Behaviours</h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <img
              alt="sedentary"
              className="red"
              src="/icons/sedentary-icon.svg"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Recommendation</h1>
        <p>
          Sedentary behaviour is related to poorer health outcomes, such as type
          II diabetes, cardio-metabolic disease and all-cause mortality,
          regardless of an individual’s physical activity levels. In simple
          terms this means that the longer the amount of time a person sits, the
          shorter they live. Children and young people spend a large amount of
          their day engaging in sedentary pursuits; sitting down whilst at
          school (e.g. during lessons or break time etc.), non-active travel
          (e.g. bus or car etc.), sitting during leisure time (e.g. watching
          television or playing video games etc.). Earlier studies have shown a
          reduction in physical and psychosocial health outcomes amongst
          children and youth who spend less than 2 hours engaging in sedentary
          behaviours.
        </p>
        <p>
          The British Heart Foundation have summarised international
          recommendations from the USA, Australia and the United Kingdom. The
          recommendation for the amount of time children and young people should
          spend
          <a
            className="textLink"
            href="http://www.bhfactive.org.uk/files/525/sedentary_evidence_briefing.pdf"
            target="_blank"
            rel="noreferrer"
          >
            sitting during leisure time should be less than 2 hours per day.
          </a>
        </p>
        <p>
          Further, Australian guidelines suggest that infants, toddlers and
          pre-school
          <a
            className="textLink"
            href="http://www.health.gov.au/internet/main/publishing.nsf/content/health-pubhlth-strateg-phys-act-guidelines#npa05"
            target="_blank"
            rel="noreferrer"
          >
            children should not be sedentary, restrained, or kept inactive for
            more than one hour per day
          </a>
          apart from when sleeping.
        </p>
      </div>

      <div className="section">
        <h1>Definitions</h1>
        <p>
          The benchmark used by the Research Work Group to allocate a grade to
          this indicator was ‘the percentage of young people who exceed the
          recommended sedentary time guidelines (i.e. 2 or more hours)’. Data on
          sedentary behaviours such as time spent sitting on weekdays and
          weekends outside of school hours were used.
        </p>
      </div>

      <div className="section">
        <h1>Survey Data</h1>
        <p>
          A nationally representative data source was used by the Research Work
          Group to assign a sedentary behaviours grade.
        </p>
        <p>
          <span className="bold">1. </span>The School Health Research Network:
          Student Health and Wellbeing Survey (2017) collated self-report
          sedentary data on 112,054 children aged 11-17 years old. Distributed
          to 193 schools in Wales, young people were asked how much time spent
          sitting they had undertaken outside of school hours. The young people
          were asked to provide an answer for weekdays as well as weekends.
        </p>
        <p>
          The survey showed that 81% of young people spent two or more hours
          sitting during the weekdays. The proportions reported between boys and
          girls were different (82% boys and 80% girls). When comparing reports
          across age groups, higher proportions were observed among older age
          groups (aged 14 years and above,) with 88% reporting 2 hours or more
          sitting time on weekdays compared to younger peers (75%). A difference
          in the proportion of young people not meeting the guidelines was also
          observed across reported ethnicities (78% among black and minority
          ethnic (BME) populations and 81% among white populations).
        </p>
        <p>
          Compared to weekdays, the survey showed even higher proportions of
          sedentary time on weekends, with 88% of young people reporting two or
          more hours of sitting time. No gender difference was noted in the
          reported proportions (88% for both genders). Similar to weekday data,
          higher proportions of young people not meeting the recommended
          sedentary guidelines were observed among those aged 14 years and above
          (92% vs. 84%). Ethnicity data showed a difference in proportions; with
          88% of the white population and 86% of the BME population reporting
          two or more hours of sitting time.
        </p>
        <br />
        <p>
          <span className="bold">2. </span> The National Survey for Wales (NSW,
          2016-17) asked parents/guardians of children aged 3-17 to report the
          amount of time their child was active on each day in the previous
          seven days. Parents were informed that they should consider activities
          that left their child feeling warm or at least slightly out of breath
          and that these activities could include playing sport, cycling,
          running or brisk walking either at school, outside school, with a
          club, with friends or on their own. Results of the survey demonstrated
          that 81% of children had at least two hours screen time (using
          electronic devices or watching television) on an average weekday and
          over 92%) had at least two hours screen time on a weekend day. Screen
          time among children increased with age.
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
              <span className="underline">
                The Health Behaviour in School-aged Children Survey (2013/14)
              </span>
              on 9,055 Secondary School children and young people aged 11-16
              year olds, provides data on the percentage of children and young
              people spending 2 or more hours a day in sedentary behaviours.
            </p>
            <p>
              On a weekday,
              <span className="italic bold">
                53% of children and young people spent 2+ hours a day playing
                games on an electronic device, 64% spent 2+ hours a day using an
                electronic device for purposes other than gaming, and 68% spent
                2+ hours a day watching entertainment on a screen.
              </span>
              On the weekend, the proportion of children and young people who
              spent 2+ hours a day on playing games on an electronic device,
              using an electronic device for purposes other than gaming, and
              watching entertainment on a screen increased to 65%, 71%, and 80%,
              respectively.
            </p>
            <p>
              During weekdays, a higher proportion of boys spent 2 or more hours
              a day playing games on an electronic device and watching
              entertainment on a screen compared to girls. Girls on the other
              hand spent more than 2 hours a day using an electronic device for
              purposes other than gaming. During the weekend, the gender
              differences in the proportion playing games on an electronic
              device and using an electronic device for purposes other than
              gaming remained the same as on weekdays, but there were similar
              proportions of both boys and girl spending more than 2 hours a day
              watching entertainment on a screen.
            </p>
            <p>
              Findings for both weekdays and weekends were
              <span className="italic bold">
                consistent across all socioeconomic status
              </span>
              , and findings for playing games on an electronic device were
              similar across age groups. Use of electronic devices for purposes
              other than gaming and watching entertainment increased with age
              for boys and girls.
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
              The Research Working Group assigned an F to this category as when
              taking both weekday and weekend data into account, the proportion
              of non-sedentary young people was only between 12 and 19%. This
              grade has changed from the 2016 AHK-Wales report card that
              concluded a D- grade. It is important to note that the questions
              used for the 2016 and 2018 sedentary indicator differ, with the
              2018 question capturing all sedentary behaviours with a single
              question (i.e. all sitting related activities).
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
                The School Health Research Network: Student Health and Wellbeing
                Survey used self-report methods to obtain data on sedentary
                behavior. Validation studies have reported an overestimation of
                activity when using surveys to gather physical activity measures
                amongst young people.
              </li>
              <li>
                There are no large-scale studies in which sedentary behavior has
                been measured objectively, for example, with the use of
                accelerometers, in the United Kingdom.
              </li>
              <li>
                There is limited research available for children under age 11
                years. This need to be addressed through systematic robust data
                collection methods.
              </li>
              <li>
                The effect of interventions to reduce time spent sitting needs
                to be quantified.
              </li>
              <li>
                The best available evidence shows that majority of children and
                young people in Wales need to decrease their levels of sedentary
                behaviours.
              </li>
              <li>
                A significant effort needs to be made to address the very high
                levels of sedentary behavior among young people in Wales. In
                order to inform the design of effective strategies, there is a
                need to first generate high-quality evidence using objective
                measures while simultaneously capturing information on the
                domain (e.g. school time, leisure time etc.), type (e.g. sitting
                using the phone) and context of sedentary behaviours.
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
                Physical Literacy &#45;
                <a
                  href="http://playwales.org.uk/eng/playingout"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                5 x 60 &#45;
                <a href="http://sport.wales/community-sport/education/5x60.aspx">
                  link
                </a>
              </li>
              <li>
                Dragon Multi Skills &amp; Sport &#45;
                <a href="http://sport.wales/community-sport/education/dragon-multi-skills--sport.aspx">
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Public Health Wales">
              <li>
                Get Active in 2016 &#45;
                <a
                  href="http://www.wales.nhs.uk/sitesplus/888/news/40348"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="British Heart Foundation">
              <li>
                Sedentary behaviour evidence briefing &#45;
                <a
                  href="http://www.bhfactive.org.uk/resources-and- publications-item/40/328/home"
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
                  href="http://change4lifewales.org.uk/families/active_minutes/?lang=en"
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
                On Your Feet Britain &#45;
                <a
                  href="https://getbritainstanding.org/onyourfeet-britain"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                UP4FUN project to reduce sedentary behaviour &#45;
                <a
                  href="http://www.worldobesity.org/site_media/uploads/UP4FUN_Implementation_report.pdf"
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
            </ul>
          </div>
        </div>
      </div>

      <div className="wide">
        <Link href="/indicators/physical-literacy">
          <a>
            <div className="card red link nextIndicator">
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
                <img
                  alt="physical literacy"
                  className="red"
                  src="/icons/physlit-icon.svg"
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
