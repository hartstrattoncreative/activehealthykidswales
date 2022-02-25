import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing rcPage">
        <div className="landingBanner indicator">
          <h4>Cardiau Cofnodi</h4>
        </div>
      </div>

      <div className="section">
        <h1>Cefndir</h1>
        <p>
          Fel grŵp arbenigol PEI-Cymru o academyddion, addysgwyr a gweithwyr
          proffesiynol, rydym yn bryderus am iechyd plant yng Nghymru. Nod grŵp
          arbenigol PEI-Cymru yw defnyddio data am weithgarwch corfforol i
          eirioli dros hawl plant i chwarae, gwirioni ar chwaraeon a dawns,
          dysgu a chyflawni a bod yn egnïol ac iach. Rydym yn llawn cymhelliant
          i hybu ymddygiad iach ac egnïol a llythrennedd corfforol mewn plant.
          Ein cenhadaeth yw llunio Cardiau Cofnodi PEI-Cymru sy&apos;n darparu
          sylfaen dystiolaeth glir am 10 dangosydd ansawdd sy&apos;n
          gysylltiedig â gweithgarwch corfforol ac y dylid eu defnyddio i
          eirioli a dylanwadu ar bolisïau a buddsoddiadau lleol, rhanbarthol a
          chenedlaethol mewn gweithgarwch corfforol ar gyfer plant a phobl
          ifanc.
        </p>
        <p>
          I gefnogi nodau PEI-Cymru, ein rhesymeg yw mai yng Nghymru mae&apos;r
          nifer mwyaf o blant dros eu pwysau yn y DU ac mae lefelau&apos;r
          ymddygiad segur, gweithgarwch corfforol a ffitrwydd ymhlith y rhai
          gwaethaf yn fyd-eang. Yn groes i hyn, mae Cymru&apos;n arloesi ym maes
          polisïau chwarae plant, mae deddf teithio egnïol yn rhan o statud
          Llywodraeth Cymru ac mae&apos;n rhoi blaenoriaeth i lythrennedd
          corfforol fel rhan o hawl addysgol plant. Mae cerdyn cofnodi 2016
          PEI-Cymru yn crynhoi cynnydd a safle&apos;r wlad mewn perthynas â
          gweithgarwch corfforol plant yn gysylltiedig ag iechyd yn erbyn yr
          amcanion canlynol.
        </p>
      </div>

      <div className="section">
        <h1>Amcanion</h1>
        <ol className="aimList">
          <li>
            <span className="aimNumber"> 1 </span>
            <p>
              Asesu ‘Cyflwr y Genedl&apos; mewn perthynas â lefelau gweithgarwch
              corfforol ac ymddygiad segur.
            </p>
          </li>
          <li>
            <span className="aimNumber"> 2 </span>
            <p>
              Olrhain tueddiadau mewn gweithgarwch corfforol ac ymddygiad segur.
            </p>
          </li>
          <li>
            <span className="aimNumber"> 3 </span>
            <p>
              Cyflwyno cyd-destun rhyngwladol ar gyfer gweithgarwch corfforol ac
              ymddygiad segur.
            </p>
          </li>
          <li>
            <span className="aimNumber"> 4 </span>
            <p>
              Cyfrannu at bolisïau, strategaethau, gwasanaethau ac arferion
              proffesiynol mewn gweithgarwch corfforol ac ymddygiad segur.
            </p>
          </li>
          <li>
            <span className="aimNumber"> 5 </span>
            <p>
              Canfod y bylchau allweddol yn y wybodaeth sy&apos;n gysylltiedig â
              gweithgarwch corfforol ac ymddygiad segur plant.
            </p>
          </li>
          <li>
            <span className="aimNumber"> 6 </span>
            <p>
              Darparu tystiolaeth ar gyfer eiriolwyr gweithgarwch corfforol ac
              ymddygiad cysylltiedig ag iechyd.
            </p>
          </li>
        </ol>
      </div>

      <div className="wide rcCard">
        <Link href="/reports/AHK-Wales_Report_Card_2016_Welsh.pdf">
          <a target="_blank">
            <div className="dlReport16 blue">
              <h5 className="light blue">
                Plant Egnïol Iach Cerdyn Cofnodi 2016
              </h5>
            </div>
          </a>
        </Link>

        <Link href="/reports/AHK_Wales_Report_Card_2014.pdf">
          <a target="_blank">
            <div className="dlReport14 lightBlue">
              <h6 className="light lightBlue">
                Plant Egnïol Iach Cerdyn Cofnodi 2014
              </h6>
            </div>
          </a>
        </Link>
      </div>

      <div className="wide">
        <Link href="/cy/overall-physical-activity">
          <a>
            <div className="card orange link">
              <div className="grade grade-d">d&#45;</div>
              <div className="cardTitle orange">
                <h6 className="lower light">
                  Gweithgarwch Corfforol
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
