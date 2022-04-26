import Overlay from 'components/Overlay';
import { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card orange indicatorPage">
          <div className="grade grade-d">d</div>
          <div className="cardTitle orange">
            <h6 className="lower light">Dylanwad Teulu a Chyfoedion</h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <img alt="family" className="orange" src="/icons/family-icon.svg" />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Argymhelliad</h1>
        <p>
          Ar hyn o bryd nid oes unrhyw argymhellion penodol ar gyfer dylanwad
          rhieni a chyfoedion ar gyfranogiad plant/pobl ifanc mewn chwaraeon neu
          weithgarwch corfforol, er bod nifer o astudiaethau wedi dangos
          perthynas rhwng gweithgarwch rhiant ac mewn plentyndod
          <span className="italic">(Trost et al. 2003).</span>
        </p>
        <p>
          Mae canllawiau Prif Swyddogion Meddygol y DU gyfan ar gyfer
          gweithgarwch corfforol i rieni/oedolion yn argymell y dylai cyfanswm y
          gweithgarwch yr wythnos fod
          <a
            className="textLink"
            href="http://www.bhfactive.org.uk/userfiles/Documents/startactivestayactive.pdf"
            target="_blank"
            rel="noreferrer"
          >
            o leiaf 150 munud (2½ awr) o weithgarwch cymedrol ddwys.
          </a>
          mewn mewn cyfnodau o 10 munud neu fwy. neu wneud 30 munud 5 diwrnod yr
          wythnos. Fel arall, gellir cyflawni manteision cymaradwy trwy 75 munud
          o weithgarwch corfforol aerobig dwys iawn trwy&apos;r wythnos neu
          gyfuniad cyfatebol o weithgarwch dwysedd cymedrol a egnïol (Adran
          Iechyd, 2011).
        </p>
      </div>

      <div className="section">
        <h1>Diffiniad</h1>
        <p>
          Y meincnodau a ddefnyddiwyd gan y Grŵp Gwaith Ymchwil ar gyfer y
          dangosydd hwn oedd: (1) Canran y rhieni sy&apos;n bodloni&apos;r
          Argymhellion Byd-eang ar Weithgaredd Corfforol ar gyfer Iechyd, a (2)
          Canran o aelodau&apos;r teulu (ee, rhieni, gwarcheidwaid) sy&apos;n
          weithgar yn gorfforol eu plant.
        </p>
      </div>

      <div className="section">
        <h1>Y data o arolygon</h1>
        <p>
          Defnyddiwyd un ffynhonnell ddata gynrychioliadol yn genedlaethol gan y
          Gweithgor Ymchwil i neilltuo gradd teulu a chyfoedion.
        </p>
      </div>

      <Overlay>
        <ol className="dataList">
          <li>
            <span className="dataNumber"> 1 </span>
            <p>
              <span className="underline">
                Arolwg Cenedlaethol Cymru (2016-17)
              </span>
              Cesglodd Arolwg Cenedlaethol Cymru ddata ar dros 10,000 o bobl a
              ddewiswyd ar hap yn 16 oed a throsodd ledled Cymru. Canfu&apos;r
              arolwg 2016/17 fod
              <span className="italic bold">
                59% o&apos;r rhieni yn gymharol weithgar am 150 munud yr wythnos
              </span>
              a chymerodd 8% o rieni ran mewn gweithgaredd egnïol am fwy na 75
              munud yr wythnos. Ymhellach, datgelwyd bod 31% o rieni wedi mynd
              â&apos;u plentyn i&apos;r maes chwarae a chymerodd 20% o rieni ran
              mewn gemau anffurfiol gyda&apos;u plentyn fel chwarae Frisbee.
            </p>
          </li>
        </ol>
      </Overlay>

      <div className="indicatorExpand">
        <div className="wide">
          <div className="expand open  xtraDarkBlue">
            <h5 className="light xtraDarkBlue">Penderfynu ar Radd</h5>
          </div>

          <div className="expandContent open  grade">
            <p>
              Fe wnaeth y Gweithgor Ymchwil neilltuo D i&apos;r categori hwn. Ar
              ôl cymryd canrannau o&apos;r holl gwestiynau sy&apos;n ymwneud â
              chyfranogiad teulu a chyfoedion i ystyriaeth, roedd cyfran y plant
              gweithgar yn 30%.
            </p>
            <p>
              Mae Arolwg Cenedlaethol Cymru yn gynrychioliadol ar draws pob
              rhanbarth yng Nghymru. O ystyried bod y data gan deuluoedd a
              chyfoedion yn deillio o un ffynhonnell ddata yn unig, gellir
              ystyried hyn fel cyfyngiad. Mae&apos;r rhagfynegiadau tebygol yn y
              canlyniadau yn cynnwys gor-bwyslais ar gyfranogiad rhieni gan fod
              diffyg data cynrychioliadol ar gyfoedion.
            </p>
          </div>
        </div>

        <div className="wide">
          <div className="expand open  darkBlue">
            <h5 className="light darkBlue">Ystyriaethau</h5>
          </div>
          <div className="expandContent open  considerations">
            <ul>
              <li>
                Anogir rhieni i gymryd rhan mewn chwaraeon, dawns a gweithgaredd
                corfforol. Dylai rhieni geisio lleihau eu hamser eu hunain
                a&apos;u hamser eistedd plant / plant (amser eisteddog), yn
                enwedig amser a dreulir o flaen sgriniau.
              </li>
              <li>
                Anogir rhieni i gynllunio&apos;n rheolaidd ar gyfer
                gweithgareddau corfforol neu chwaraeon gyda&apos;u plant, yn
                enwedig gyda&apos;r nos, penwythnosau a gwyliau. Dylai rhieni
                annog cludiant gweithredol a galluogi eu plant i archwilio
                heriau corfforol egnïol yn eu hamgylchedd.
              </li>
              <li>
                O gofio bod y ffynhonnell ddata wedi&apos;i hunan-adrodd, nid
                oes astudiaethau ar raddfa fawr y mesurwyd gweithgarwch
                corfforol yn wrthrychol mewn oedolion (rhieni).
              </li>
              <li>
                Gan fod anweithgarwch corfforol yn broblem i blant a phobl ifanc
                o bob oed yng Nghymru (gweler y dangosydd Lefelau Gweithgaredd
                Corfforol Cyffredinol), gallai ymyriadau annog teuluoedd i fod
                yn fwy egnïol yn gorfforol a lleihau amser segur gyda&apos;i
                gilydd.
              </li>
              <li>
                Mae angen i ymchwil yn y dyfodol ganolbwyntio ar ddylanwad
                rhieni ar wahanol symiau a mathau o weithgarwch corfforol a sut
                mae&apos;r rhain yn newid gydag oedran.
              </li>
              <li>
                Canolbwyntiodd y data a geir o Arolwg Cenedlaethol Cymru ar
                weithgarwch corfforol rhieni. Nid oedd unrhyw ddata ar gael ar
                ddylanwad cyfoedion ar gyfer cerdyn adroddiad 2018.
              </li>
              <li>
                Mae angen gwneud ymdrech sylweddol i fynd i&apos;r afael
                â&apos;r diffyg data sydd ar gael ar ddylanwad cyfoedion.
              </li>
            </ul>
          </div>
        </div>

        <div className="wide">
          <div className="expand open  blue">
            <h5 className="light blue">Sut Mae Gwella’r</h5>
          </div>
          <div className="expandContent open  improve">
            <ul className="indent" aria-label="Chwaraeon Cymru">
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
                Aml-Sgiliau a Champau’r Ddraig &#45;
                <a
                  href="http://sport.wales/community-sport/education/dragon- multi-skills--sport.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Amrywiol">
              <li>
                Newid Am Oes Cymru &#45;
                <a
                  href="http://change4lifewales.org.uk/families/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
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
              <li>
                Sefydliad Prydeinig y Galon: &#45;
                <a
                  href="https://www.bhf.org.uk/heart-health/children-and-young-people"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>

              <li>
                Llwybr Arfordir Cymru &#45;
                <a
                  href="http://www.walescoastpath.gov.uk/default.aspx?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>

              <li>
                60 Munud Actif: &#45;
                <a
                  href="http://change4lifewales.org.uk/families/active_minutes/?lang=en"
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
            <h5 className="light lightBlue">Ffynonellau Data</h5>
          </div>
          <div className="expandContent open  sources">
            <ul className="indent" aria-label="Chwareaeon Cymru">
              <li>
                Arolwg Cenedlaethol Cymru (2016-17) &#45;
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
        <Link href="/cy/indicators/school">
          <a>
            <div className="card red link nextIndicator">
              <div className="grade grade-inc">inc</div>
              <div className="cardTitle red">
                <h6 className="lower light">
                  Ysgol
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
