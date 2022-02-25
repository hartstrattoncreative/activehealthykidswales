import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card yellow indicatorPage">
          <div className="grade grade-c">c-</div>
          <div className="cardTitle yellow">
            <h6 className="lower">Outdoor and Active Play</h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <Image
              alt="outdoor"
              layout="fill"
              objectFit="contain"
              className="yellow"
              src="/icons/outdoor-icon.svg"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Background</h1>
        <p>
          Active play may involve symbolic activity or games with or without
          clearly defined rules; the activity may be unstructured/unorganised,
          social or solitary, but the distinguishing features are a playful
          context, combined with activity that is significantly above resting
          metabolic rate. Active play tends to occur sporadically, with frequent
          rest periods, which makes it difficult to record. The activity is
          self-determined and not adult-led or organised.
        </p>
        <p>
          Children have a right to play, as recognised in article 31 of the
          United Nations Convention on the Rights of the Child (UNCRC). The
          Convention defines play as initiated, controlled and structured by
          children, as non-compulsory, driven by intrinsic motivation. It has
          key characteristics of fun, uncertainty, challenge, flexibility and
          non- productivity. In Wales, a policy framework for play has been in
          place since 2002 with the publication of a national play policy,
          followed by a national strategy in 2006. The Welsh Government
          recognises that to achieve its aim of creating a play friendly Wales
          and to provide opportunities for our children to play it is necessary
          for local authorities, their partners and other stakeholders to also
          work towards this purpose. Therefore, a section on Play Opportunities
          (play sufficiency duties) was included in the Children and Families
          (Wales) Measure 2010.
        </p>
        <p>
          Children report that playing is one of the most important aspects of
          their lives; they value the time, the freedom and quality places to
          play. Consultations with children and young people in Wales show that
          they prefer to play outdoors away from adult supervision, in safe but
          stimulating places.
        </p>
        <p>
          Outdoor play is one of the ten evidence-based steps to help children
          in the early years to maintain a healthy weight promoted in the Public
          Health Wales Every Child Wales programme Step six focuses on outdoor
          play, with the ambition that every child will be given the chance to
          play outdoors every day. In a survey to inform the programme, almost
          all parents (97 per cent) of children under the age of five think it
          is important for their child to play outdoors every day. However,
          nearly a third of children under-five (29 per cent) are not getting
          the time outdoors that they need.
        </p>
        <p>
          The benchmark used by the Research Work Group to allocate a grade to
          this indicator was: <br />- % of children and youth who engage in
          unstructured/unorganized active play for several hours a day <br />- %
          of children and youth report being outdoors for several hours a day
          <br />- % of children and youth using ‘streets near home or school,
          park, playground not at school, playing fields not at school, and
          beach/sea for places of physical activity/play
        </p>
      </div>

      <div className="section">
        <h1>Definitions</h1>
        <p>
          Evidence suggests that children are more active when they are outside.
          Therefore, in the previous Report Card (2014), ‘use of the park’ was
          used solely to establish the grade for this indicator. For the 2016
          Report Card, the Research Work Group used the proportion of children
          using a variety of places for play as the benchmark for grading this
          indicator, as well as, the percentage of children reported spending
          &ge; 3 hours outside playing.
        </p>
      </div>

      <div className="section">
        <h1>Survey Data</h1>
        <h6>Play Sufficiency Assessment Surveys</h6>
        <p>
          To comply with Play Sufficiency duties, each local authority in Wales
          has submitted Play Sufficiency Assessments to Welsh Government
          Ministers. Local authorities undertook surveys with children and many
          have used similar questions based on a template questionnaire. In
          2016, 13 of 22 local authorities in Wales asked a total of 5,478
          children aged 5-17 questions around play.
        </p>
        <p>
          With regards to the use of outdoor spaces for places of physical
          activity/play, 13109 out of 21060 favourite choices were outdoor
          spaces. Regarding the benchmark of percentage of children and youth
          report being outdoors for several hours a day, 41 % report playing out
          most days. This data was used as is was the best available data
          seeking children’s views about their access to enough time and spaces
          for playing outdoors. The Research Group agreed that, when outside,
          children tend to tend to be physically active and stretch themselves
          both physically and emotionally than they would if they were
          supervised.
        </p>

        <h6>
          The Health Behaviour of School-aged Children (HBSC)/School Health
          Research Network (SHRN) Survey 2017
        </h6>
        <p>
          The HBSC/SHRN is a school-based survey with data collected through
          self-completion questionnaires administered in the classroom.The
          survey was carried out on a nationally representative sample and was
          completed by over 100,000 children and young people aged 11-16 years
          in Wales. The survey contains a core set of questions looking at the
          following:
        </p>
        <ul>
          <li>
            Background factors: demographics, maturation and social background
          </li>
          <li>
            Individual and social resources: body image, family support, peers,
            school environment
          </li>
          <li>
            Health behaviours: physical activity, eating and dieting, smoking,
            alcohol use, cannabis use, sexual behaviour, violence and bullying,
            injuries
          </li>
          <li>
            Health outcomes: symptoms, life satisfaction, self-reported health
            and height & weight from which the body mass index is derived
          </li>
        </ul>
        <p>
          In relation to the Active Play indicator, the HBSC/SHRN 2017 asked:
          “During the most recent summer holidays, how often did you exercise in
          your free time so much that you got out of breath or sweated?”. A
          total of 44% (44,629 children) reported that they exercised ‘often’ or
          ‘all of the time’ during the summer holidays. Results reported a
          difference between sexes, with 50% of boys (n = 25,287) compared to
          38% of girls (n = 19,342) reported that they exercised ‘often’ or ‘all
          of the time’ during the summer holidays.
        </p>
        <p>
          The HBSC/SHRN 2017 is representative across all regions in Wales.
          However, the survey focuses solely on secondary aged children (aged
          11-16 years) which is a likely bias in the results.
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
              Wales. Data on the proportion of children and youth using ‘streets
              near home or school&apos; (43%), ‘park&apos; (61%), ‘playground
              not at school&apos; (38%), ‘playing fields at school&apos; (48%),
              ‘playing fields not at school&apos; (50%) and ‘beach/sea&apos;
              (42%) for places of exercise/play in the previous year were
              synthesised to give an overall proportion of
              <span className="italic bold">
                47% of children and youth using at least one of these places
              </span>
              (School Sport Survey 2015).
            </p>
          </li>
          <li>
            <span className="dataNumber"> 2 </span>
            <p>
              <span className="underline">The Little Voices Shouting Out</span>
              survey of children aged 7-11 years from across Wales reported that
              18% spent 3 hours, 15% 4 hours and 27% more than 4 hours playing
              outside on a normal day. Therefore,
              <span className="italic bold">
                60% of children reporting spending &ge;3 hours outside playing.
              </span>
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
              The Research Working Group notes that collecting data from
              children in unstructured play in ethically and logistically
              challenging. The Group agreed that the variety of places for play
              should be considered. Data on the percentage of children reporting
              playing outdoors on most days (41%), as well as the percentage
              reporting exercise when not in school (44%) was synthesized to
              give an overall reporting average as 43% (42.5%), equating to a C-
              grade for the available data. The grade in AHK 2016 report card
              was C, due to the availability of more comprehensive data from
              children.
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
            <p>
              The best available evidence shows that in terms of Active Play,
              Wales are only succeeding with below half of children and young
              people. Research suggests that given the opportunity, children get
              wide-ranging exercise as well as significant mental health
              benefits from freely chosen play. All children and young people
              need to play. Play is fundamental to the healthy development and
              well-being of individuals and communities, therefore encouragement
              towards getting children outdoors playing is a necessity. Children
              and parents report a range of barriers preventing children playing
              out including safety fears, traffic, time pressures, reduction in
              spaces to play.
            </p>
            <ul>
              <li>
                The approach to data collection via Play Sufficiency Assessments
                needs to improve in order that a more coherent picture of
                children’s views.
              </li>
              <li>
                The National Survey for Wales should include gather information
                from parents regarding their children’s access to time and space
                for play
              </li>
              <li>
                Children’s ability to play outdoors locally ought to be promoted
                and the prioritisation of local community based interventions is
                necessary to address barriers to playing: <br />-
                <span className="bold">Safer roads</span> The adoption of a 20
                mph speed limit in all residential areas will have wide-
                reaching and positive effect. Local Authorities should engage
                with local communities and facilitate resident led street led
                play projects across Wales. <br />-
                <span className="bold">
                  Making the most of community assets-school grounds for play{" "}
                </span>
                Schools, as a central resource for the local community, should
                be encouraged to consider the options to make their school
                grounds available for free play after school and at weekends.
                <br />- <span className="bold">School play time </span>Schools
                should consider the value to pupil well-being when making
                decisions on the planning and length of the school day including
                play times, lunch times and homework scheduling.
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
            <ul className="indent" aria-label="Play Wales">
              <li>
                Playing Out &#45;
                <a
                  href="http://playwales.org.uk/eng/playingout"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Promoting Physical Activity through Outdoor Play (early years)
                &#45;
                <a
                  href="http://playwales.org.uk/login/uploaded/documents/INFORMATION%20SHEETS/Promoting%20physical%20activity%20through%20outdoor%20play%20in%20early%20years%20settings.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Change4Life">
              <li>
                Get Going &#45;
                <a
                  href="http://change4lifewales.org.uk/families/get-going-campaign/get-going/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Play4Life &#45;
                <a
                  href="http://www.nhs.uk/Change4Life/supporter-resources/downloads/297553_P4L_outdoor_acc2.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Sustrans Wales">
              <li>
                Free Range Kids Campaign &#45;
                <a
                  href="http://www.sustrans.org.uk/what-you-can-do/children-and-families"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Miscellaneous">
              <li>
                Playing Out &#45;
                <a
                  href="http://playingout.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  link{" "}
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
                Little Voices Shouting Out Report 2015 &#45;
                <a
                  href="https://www.swansea.ac.uk/media/Little%20Voices%20Report.pdf"
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
        <Link href="/indicators/active-transport">
          <a>
            <div className="card orange link nextIndicator">
              <div className="grade grade-d">d+</div>
              <div className="cardTitle orange">
                <h6 className="lower">
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
                <Image
                  alt="active transport"
                  layout="fill"
                  objectFit="contain"
                  className="orange"
                  src="/icons/activetransport-icon.svg"
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
