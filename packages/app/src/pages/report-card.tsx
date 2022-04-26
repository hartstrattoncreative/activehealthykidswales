import { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing rcPage">
        <div className="landingBanner indicator">
          <h4>Report Card</h4>
        </div>
      </div>

      <div className="section">
        <h1>Background</h1>
        <p>
          The Active Healthy Kids Wales expert group seek to use data on
          physical activity to advocate for childrens&apos; right to play, be
          hooked on sport and dance, learn and achieve and be active and
          healthy. We are motivated to promote healthy active behaviour and
          physical literacy in children. Our mission is to produce AHK-Wales
          Report Cards that provide a clear evidence base on 10 quality
          indicators related to physical activity that should be used to
          advocate and influence local, regional and national policies and
          investments in physical activity for children and young people.
        </p>

        <p>
          Our rationale is that Wales has the highest prevalence of child
          overweight in the UK and levels of sedentary behaviour, physical
          activity and fitness are amongst the worst globally. On the other hand
          Wales is a policy pioneer in children&apos;s play, has an active
          travel act and prioritises physical literacy as a key part of a
          child&apos;s entitlement in the school curriculum. The AHK-Wales 2016
          report card summarises the country&apos;s progress and position on
          children&apos;s health related physical activity
        </p>
      </div>

      <div className="section">
        <h1>Aims</h1>
        <ol className="aimList">
          <li>
            <span className="aimNumber"> 1 </span>
            <p>
              Assess the &apos;State of the Nation&apos; in relation to the
              levels of physical activity and sedentary behaviour.
            </p>
          </li>
          <li>
            <span className="aimNumber"> 2 </span>
            <p>
              Track trends in physical activity and the sedentary behaviour.
            </p>
          </li>
          <li>
            <span className="aimNumber"> 3 </span>
            <p>
              Present an international context for physical activity and
              sedentary behaviour.
            </p>
          </li>
          <li>
            <span className="aimNumber"> 4 </span>
            <p>
              Inform policy, strategy, services and professional practice in
              physical activity and sedentary behaviour.
            </p>
          </li>
          <li>
            <span className="aimNumber"> 5 </span>
            <p>
              Identify critical gaps in knowledge related to children&apos;s
              physical activity and sedentary behaviour.
            </p>
          </li>
          <li>
            <span className="aimNumber"> 6 </span>
            <p>
              Provide evidence for acvicates of physical activity and health
              related behaviours.
            </p>
          </li>
        </ol>
      </div>

      <div className="wide rcCard">
        <Link href="/reports/AHK-Wales_Report_Card_2016.pdf">
          <a target="_blank">
            <div className="dlReport16 blue">
              <h5 className="light blue">
                Active Healthy Kids Report Card 2016
              </h5>
            </div>
          </a>
        </Link>

        <Link href="/reports/AHK_Wales_Report_Card_2014.pdf">
          <a target="_blank">
            <div className="dlReport14 lightBlue">
              <h6 className="light lightBlue">
                Active Healthy Kids Report Card 2014
              </h6>
            </div>
          </a>
        </Link>
      </div>

      <div className="wide">
        <Link href="/indicators/overall-physical-activity">
          <a>
            <div className="card orange link">
              <div className="grade grade-d">d&#45;</div>
              <div className="cardTitle orange">
                <h6 className="lower">
                  Overall Physical Activity Levels
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
                  className="orange"
                  src="/icons/overallphys-icon.svg"
                  alt="overall physical activity"
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
