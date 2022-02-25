import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card orange indicatorPage">
          <div className="grade grade-d">d+</div>
          <div className="cardTitle orange">
            <h6 className="lower light">Gweithgarwch Corfforol</h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <img
              alt="overall phyical activity"
              className="orange"
              src="/icons/overallphys-icon.svg"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>argymhelliad</h1>
        <p>
          Mae canllawiau Prif Swyddogion Meddygol y DU ar gyfer gweithgarwch
          corfforol yn argymell y canlynol er mwyn sicrhau manteision i iechyd
          oddi wrth weithgarwch corfforol: <br />
          <br />
          <span className="underline">
            Plant dan 5 oed (Blynyddoedd Cynnar)
          </span>
          <br />
          Dylai plant sy&apos;n gallu cerdded heb gymorth fod yn gorfforol
          egnïol bob dydd am o leiaf 180 munud (3 awr), drwy gydol y dydd. I
          blant na allant gerdded heb gymorth eto, dylid annog gweithgarwch
          corfforol o&apos;u genedigaeth, yn enwedig drwy chwarae ar y llawr a
          gweithgareddau dŵr mewn amgylcheddau diogel.
          <br />
          <br />
          <span className="underline">Plant a phobl ifanc (5-18 oed)</span>
          <br />
          Dylai pob plentyn a pherson ifanc gymryd rhan mewn gweithgarwch
          corfforol o ddwysedd cymedrol i egnïol iawn am o leiaf
          <a
            className="textLink"
            href="http://www.bhfactive.org.uk/userfiles/Documents/startactivestayactive.pdf"
            target="_blank"
            rel="noreferrer"
          >
            60 munud a hyd at sawl awr bob dydd.
          </a>
          Dylai&apos;r cyfranogiad mewn gweithgarwch corfforol o ddwysedd egnïol
          iawn gael ei gynnwys dridiau yr wythnos o leiaf; mae hyn yn cynnwys
          unrhyw weithgareddau sy&apos;n cryfhau&apos;r cyhyrau a&apos;r esgyrn.
        </p>
      </div>

      <div className="section">
        <h1>Diffiniad</h1>
        <p>
          Y meincnod a ddefnyddiwyd gan y Gweithgor Ymchwil i neilltuo gradd
          i&apos;r dangosydd hwn oedd: Canran y plant a&apos;r bobl ifanc a oedd
          yn bodloni&apos;r canllawiau gweithgarwch corfforol a argymhellir.
        </p>
      </div>

      <div className="section">
        <h1>Y data o arolygon</h1>
        <p>
          Fel rhan o Arolwg Cenedlaethol Cymru (2016-17), gofynnwyd i
          rieni/gofalwyr plant rhwng 3 a 17 oed nodi am faint o amser roedd eu
          plentyn yn egnïol ar bob diwrnod yn ystod y saith diwrnod blaenorol.
          Dywedwyd wrth y rhieni y dylent ystyried gweithgareddau a oedd yn
          gwneud i&apos;w plentyn deimlo&apos;n gynnes neu golli eu gwynt o
          leiaf, ac y gallai&apos;r gweithgareddau hyn gynnwys cymryd rhan mewn
          chwaraeon, seiclo, rhedeg neu gerdded yn gyflym naill ai yn yr ysgol,
          y tu allan i&apos;r ysgol, gyda chlwb, gyda ffrindiau neu ar eu pen eu
          hunain. Dangosodd canlyniadau&apos;r arolwg fod
          <span className="bold">
            51% o blant yn egnïol am o leiaf awr, saith diwrnod yr wythnos.
          </span>
          Roedd cyfran uwch o fechgyn yn egnïol am o leiaf awr y dydd o gymharu
          â merched (55% o fechgyn o gymharu â 47% o ferched). Oherwydd y
          dulliau gwahanol a ddefnyddiwyd i gasglu&apos;r data, ni ellir
          cymharu&apos;r canlyniadau â chanlyniadau arolygon blaenorol (h.y.
          Arolwg Iechyd Cymru, 2014).
        </p>
        <p>
          Yn 2017, gofynnodd yr arolwg Ymddygiad Iechyd mewn Plant Oedran
          Ysgol/y Rhwydwaith Ymchwil Iechyd mewn Ysgolion i bobl ifanc rhwng 11
          ac 16 oed nodi ar sawl diwrnod roeddent yn gorfforol egnïol am
          gyfanswm o 60 munud o leiaf y dydd. Dangosodd canlyniadau&apos;r
          arolwg for
          <span className="bold">
            18.4% o bobl ifanc yn gorfforol egnïol am o leiaf awr, saith diwrnod
            yr wythnos.
          </span>
          Dywedodd mwy o fechgyn na merched eu bod yn egnïol (23% o fechgyn o
          gymharu â 14% o ferched). Gwelir bod cyfran y bobl ifanc a ddywedodd
          eu bod yn egnïol yn gostwng o 11 oed hyd at 16 oed (25.7%-11 oed,
          22.7%-12 oed, 18.4%-13 oed, 15.1%-14 oed, 12.4%-15 oed a 12.2%-16
          oed). Roedd cyfran y plant gwynion a phlant duon a lleiafrifoedd
          ethnig a ddywedodd eu bod yn egnïol yn debyg (18.3% o blant gwynion o
          gymharu â 19.1% o blant duon a lleiafrifoedd ethnig). Mae&apos;r
          canfyddiadau hyn yn debyg i ganlyniadau blaenorol yr un arolwg. Yn
          2015, dywedodd 17.8% o bobl ifanc eu bod yn egnïol am gyfanswm o 60
          munud o leiaf y dydd, ond 15% oedd y ffigur hwn yn 2014, ac roedd 19%
          yn gorfforol egnïol yn 2010.
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

      <div className="wrapper rm">
        <a className="button" id="rmBtn">
          {" "}
          ddarllen mwy{" "}
        </a>
      </div>

      <div className="rmView">
        <ol className="dataList">
          <li>
            <span className="dataNumber"> 1 </span>
            <p>
              <span className="underline">
                Mae&apos;r Arolwg Ymddygiad Iechyd Plant Oedran Ysgol (2013/14)
              </span>
              , yn casglu data am 9,055 o bobl ifanc 11-16 oed o ysgolion
              uwchradd yng Nghymru ac yn darparu data am ganran y plant a&apos;r
              bobl ifanc sy&apos;n cymryd rhan mewn o leiaf 60 munud o
              weithgarwch corfforol o ddwysedd cymedrol i egnïol iawn bob dydd
              o&apos;r wythnos. Dangosodd yr arolwg mai dim ond
              <span className="italic bold">
                15% o blant a phobl ifanc oedd yn bodloni&apos;r argymhelliad o
                60 munud o leiaf o weithgarwch corfforol o ddwysedd cymedrol i
                egnïol iawn bob diwrnod o&apos;r wythnos.
              </span>
              Canfu&apos;r arolwg bod bechgyn yn fwy egnïol na merched ar draws
              pob grŵp oedran a statws economaidd-gymdeithasol, gydag 20% o
              fechgyn a dim ond 11% o ferched yn bodloni&apos;r canllawiau
              gweithgarwch corfforol a argymhellir. Fodd bynnag, roedd ychydig o
              wahaniaeth yn y gweithgarwch corfforol o ddwysedd cymedrol i
              egnïol iawn a ganfuwyd ar draws y statws economaidd-gymdeithasol
              amrywiol, yn ogystal ag ar draws y gwahanol ranbarthau yng
              Nghymru. Hefyd, roedd tuedd fechan am ostyngiad yng ngweithgarwch
              corfforol y bechgyn a&apos;r merched rhwng 2006 a 2014, gyda
              lefelau&apos;r gweithgarwch corfforol yn mynd o 21% yn 2006 i 19%
              yn 2010 a 15% yn 2014.
            </p>
          </li>
          <li>
            <span className="dataNumber"> 2 </span>
            <p>
              <span className="underline">
                Gofynnodd Arolwg Iechyd Cymru (2014)
              </span>
              ar blant 4-15 oed faint o ymarfer oedd plant wedi&apos;i wneud bob
              diwrnod yn ystod yr wythnos ddiwethaf. Gofynnwyd i&apos;r plant
              gynnwys yr ymarfer yr oeddent wedi&apos;i wneud yn yr ysgol
              a&apos;r tu allan i&apos;r ysgol. Dangosodd yr arolwg bod
              <span className="italic bold">
                35% o blant wedi cymryd rhan mewn gweithgarwch corfforol o
                ddwysedd cymedrol i egnïol iawn am o leiaf 1 awr bob diwrnod.
              </span>
              Gwelwyd gwahaniaeth rhwng y bechgyn a&apos;r merched, gyda chyfran
              uwch o fechgyn (40%) yn cymryd rhan bob dydd o gymharu â merched
              (29%). Yn yr arolwg hwn, ni fu unrhyw newid sylweddol yn
              lefelau&apos;r gweithgarwch corfforol ers 2007. Y canlyniadau
              sy&apos;n peri pryder o&apos;r arolwg hwn yw nad oedd 12% o
              fechgyn nac 15% o ferched wedi cymryd rhan mewn unrhyw weithgarwch
              corfforol yn ystod yr wythnos ddiwethaf.
            </p>
          </li>
        </ol>
        <div className="closeRM">
          <div></div>
          <h6 className="light">Cau</h6>
        </div>
      </div>

      <div className="indicatorExpand">
        <div className="wide">
          <div className="expand xtraDarkBlue">
            <h5 className="light xtraDarkBlue">
              <div></div>
              Penderfynu ar Radd
            </h5>
          </div>

          <div className="expandContent grade">
            <p>
              Rhoddodd y Gweithgor Ymchwil radd o D+ i&apos;r categori
              gweithgarwch corfforol er mwyn adlewyrchu canfyddiadau&apos;r ddau
              arolwg. Roedd canran y bobl ifanc a oedd yn egnïol rhwng 18% a
              51%. Drwy ystyried cyfartaledd y ddau arolwg (34%), ar sail y
              cynllun graddio newydd a argymhellwyd gan y Cynghrair Byd-eang ar
              gyfer Plant Egnïol Iach, roedd hyn yn cynrychioli sgôr o D+.
              Mae&apos;r radd hon wedi codi o&apos;r radd D- a roddwyd yn 2016,
              ond mae hyn yn i&apos;w briodoli&apos;n bennaf i&apos;r newidiadau
              i feini prawf graddio&apos;r Cynghrair Byd-eang ar gyfer Plant
              Egnïol Iach. Hefyd, mae newidiadau i&apos;r ffordd y cafodd data
              eu casglu fel rhan o Arolwg Cenedlaethol newydd Cymru o gymharu ag
              Arolwg Iechyd blaenorol Cymru yn golygu ei bod yn anodd cymharu
              canlyniadau neu ddadansoddi tueddiadau yn y data. Gellir cymharu
              data&apos;r arolwg Ymddygiad Iechyd mewn Plant Oedran Ysgol/y
              Rhwydwaith Ymchwil Iechyd mewn Ysgolion â blynyddoedd blaenorol,
              ac wrth ddadansoddi tueddiadau, gellir gweld nad oes cymaint â
              hynny o newid wedi bod yn lefel gweithgarwch corfforol plant rhwng
              11 ac 16 oed ers yr arolygon blaenorol yn 2015 (17.8% yn egnïol),
              2014 (15% yn egnïol) a 2010 (19% yn egnïol).
            </p>
          </div>
        </div>

        <div className="wide">
          <div className="expand darkBlue">
            <h5 className="light darkBlue">
              <div></div>
              Ystyriaethau
            </h5>
          </div>
          <div className="expandContent considerations">
            <ul>
              <li>
                Mae Arolwg Cenedlaethol Cymru a&apos;r arolwg Ymddygiad Iechyd
                mewn Plant Oedran Ysgol yn defnyddio mesurau gweithgarwch
                corfforol hunangofnodedig er mwyn casglu data.
              </li>
              <li>
                Nid oes astudiaethau yn cael eu cynnal ar raddfa fawr o hyd i
                fesur ymddygiadau gweithgarwch corfforol pobl ifanc yn
                wrthrychol. Mae hyn yn arbennig o bwysig o ystyried bod lefelau
                gweithgarwch corfforol yn cael eu gorgofnodi wrth hunangofnodi o
                gymharu â gweithgarwch corfforol a gaiff ei fesur â mesurydd
                cyflymu (Arolwg Iechyd Lloegr, 2008).
              </li>
              <li>
                Dim ond hyn a hyn o ddata sydd ar gael ar lefelau gweithgarwch
                corfforol plant o bob oedran, yn enwedig yn ystod y blynyddoedd
                cynnar (plant dan 5 oed).
              </li>
              <li>
                Mae angen mesur effaith rhaglenni ymyrryd sydd â&apos;r nod o
                gynyddu gweithgarwch corfforol.
              </li>
              <li>
                Mae&apos;r dystiolaeth orau sydd ar gael yn dangos bod angen
                i&apos;r rhan fwyaf o bobl ifanc yng Nghymru gymryd rhan mewn
                mwy o weithgarwch corfforol. Gallant wneud hyn drwy amrywiaeth o
                weithgareddau gan gynnwys dawns, chwaraeon, dulliau egnïol o
                deithio a chwarae egnïol.
              </li>
              <li>
                Mae angen gwneud ymdrech sylweddol i fynd i&apos;r afael â
                lefelau isel iawn o weithgarwch corfforol ymhlith merched.
              </li>
              <li>
                Dylid ymdrechu i fynd i&apos;r afael â&apos;r gostyngiad mewn
                gweithgarwch corfforol sy&apos;n digwydd wrth fynd yn hŷn.
              </li>
            </ul>
          </div>
        </div>

        <div className="wide">
          <div className="expand blue">
            <h5 className="light blue">
              <div></div>
              Sut Mae Gwella&apos;r
            </h5>
          </div>
          <div className="expandContent improve">
            <ul className="indent" aria-label="Chwaraeon Cymru">
              <li>
                Llythrennedd Corfforol &#45;
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
                Aml-Sgiliau a Champau&apos;r Ddraig &#45;
                <a
                  href="http://sport.wales/community-sport/education/dragon-multi-skills--sport.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Amrywiol">
              <li>
                Bod Yn Egnïol Mewn Ffordd O&apos;ch Dewis Chi &#45;
                <a
                  href=" http://nhs.uk/Livewell/fitness/Pages/Activelifestyle.asp"
                  target="_blank"
                >
                  link
                </a>
              </li>
              <li>
                60 Munud Egnïol &#45;
                <a
                  href="http://change4lifewales.org.uk/families/active_minutes/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Llwybr Arfordir Cymru &#45;
                <a
                  href="http://walescoastpath.gov.uk/default.aspx?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Sustrans Cymru &#45;
                <a
                  href="http://sustrans.org.uk/wales"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Chwarae Cymru &#45;
                <a
                  href="http://playwales.org.uk"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  link{" "}
                </a>
              </li>
              <li>
                Sefydliad Prydeinig y Galon &#45;
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
          <div className="expand lightBlue">
            <h5 className="light lightBlue">
              <div></div>
              Ffynonellau Data
            </h5>
          </div>
          <div className="expandContent sources">
            <ul className="indent" aria-label="Llywodraeth Cymru">
              <li>
                Arolwg Cymru ar Ymddygiad Iechyd Plant Oedran Ysgol 2013/14
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
                Arolwg Iechyd Cymru 2014 &#45;
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
        <Link href="/cy/organised-sports">
          <a>
            <div className="card yellow link nextIndicator">
              <div className="grade grade-c">c+</div>
              <div className="cardTitle yellow">
                <h6 className="lower light">
                  Cymryd Rhan Mewn Chwaraeon Trefnus
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
                  alt="organise sport"
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
