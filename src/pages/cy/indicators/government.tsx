import { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card yellow indicatorPage">
          <div className="grade grade-c">c+</div>
          <div className="cardTitle yellow">
            <h6 className="lower light">
              Polisïau, Strategaethau a Buddsoddiadau&apos;r Llywodraeth
            </h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <img
              alt="government"
              className="yellow"
              src="/icons/govt-icon.svg"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Cefndir</h1>
        <p>
          Yn wahanol i ddangosyddion eraill, nid oes mesurau hollol wrthrychol y
          gellir eu defnyddio i lywio&apos;r cerdyn cofnodi. Fodd bynnag,
          defnyddiwyd adnodd archwilio polisi (PAT) gweithgarwch corfforol
          sy&apos;n gwella iechyd (HEPA) Sefydliad Iechyd y Byd. Roedd yr adnodd
          hwn yn darparu fframwaith a gydnabyddir yn rhyngwladol a fydd yn
          sicrhau credadwyedd a pharhad, efallai, os caiff ei ddefnyddio yn y
          dyfodol. Gallai hefyd sicrhau bod modd cymharu os caiff ei fabwysiadu
          gan wledydd eraill.
        </p>
        <p>
          Wrth ddehongli&apos;r dangosydd hwn, gwnaethom gynnwys polisïau
          cenedlaethol, strategaethau, cynlluniau gweithredu, deddfwriaeth ac
          ychydig o ddogfennau cynghori a thechnegol eraill sy&apos;n
          effeithio&apos;n uniongyrchol ar weithgarwch corfforol plant a oedd
          &apos;ar waith&apos; o hyd. Nodwyd 21 o offerynnau cenedlaethol.
        </p>
      </div>

      <div className="section">
        <h1>Data&apos;r arolwg ar hyn o bryd</h1>
        <p>
          Gyda chymorth y PAT HEPA, ystyriwyd y dystiolaeth sy&apos;n ymwneud â
          meysydd polisi allweddol sy&apos;n dylanwadu ar weithgarwch corfforol
          plant, gan gynnwys: Iechyd, Addysg, Chwaraeon, Cludiant, Amgylchedd,
          Dylunio a Chynllunio, Chwarae, Datblygu Cynaliadwy, a Thrawsbynciol
          (h.y. yn croesi pob portffolio polisi). Ym mhob un o&apos;r meysydd
          hyn, nododd y PAT HEPA a fireiniwyd gan y Gweithgor Ymchwil amrywiaeth
          o &apos;elfennau&apos; allweddol a allai effeithio ar effeithiolrwydd
          yr offeryn polisi yn unigol neu ar y cyd. Roedd yr elfennau hyn yn
          cynnwys:
        </p>
        <ul>
          <li>Nifer y polisïau a&apos;u cwmpas</li>
          <li>Camau gweithredu ategol a nodwyd</li>
          <li>Sefydliad(au) atebol a nodwyd</li>
          <li>Strwythurau adrodd a nodwyd</li>
          <li>Cynlluniau monitro a gwerthuso</li>
          <li>Cyllid/adnoddau a nodwyd</li>
        </ul>
      </div>

      <div className="section">
        <h1>Diffiniad</h1>
        <p>
          Dringo&apos;n Uwch, Creu Cymru Egnïol, y Ddeddf Teithio Egnïol,
          Chwaraeon Cymru, Pob Plentyn Wedi Gwirioni ar Chwaraeon, Chwarae
          Cymru, Yr Hawl i Chwarae, Ysgolion Iach, Cenedlaethau&apos;r Dyfodol,
          y Gwasanaeth Iechyd Gwladol Law yn Llaw at Iechyd, a Llywodraeth Cymru
          Ein Dyfodol Iach.
        </p>
        <p>
          Ni chafodd polisïau lleol eu hystyried yn y broses raddio oherwydd
          cyfyngiadau amser ac adnoddau.
        </p>
      </div>
      <div className="noContent"></div>

      <div className="indicatorExpand">
        <div className="wide">
          <div className="expand open  xtraDarkBlue">
            <h5 className="light xtraDarkBlue">Penderfynu ar Radd</h5>
          </div>

          <div className="expandContent open  grade">
            <p>
              Er bod y PAT HEPA yn ddefnyddiol iawn wrth ddadansoddi&apos;r
              dangosydd hwn, roedd yn dal i fod yn broses oddrychol yn bennaf.
              Felly, cafodd system sgorio syml ei datblygu gan ddefnyddio&apos;r
              &apos;elfennau&apos; a ddisgrifiwyd yn yr adnodd. Rhoddwyd sgôr
              ganran i bob elfen, wedi&apos;i &apos;phwysoli&apos; i adlewyrchu
              pwysigrwydd canfyddedig yr elfen wrth weithredu&apos;r offerynnau
              polisi yn effeithiol. Felly, er enghraifft, ystyriwyd bod nifer y
              polisïau yn llai pwysig na&apos;r camau gweithredu ategol a
              nodwyd. Ar ôl i&apos;r arbenigwyr arweiniol yn y dangosydd
              ymgymryd â&apos;r broses &apos;bwysoli&apos; gychwynnol, gwnaeth y
              Gweithgor Ymchwil ystyried, mireinio a chytuno ar y pwysoliad
              terfynol.
            </p>
            <p>Roedd y matrics sgorio terfynol fel a ganlyn:</p>
            <ul>
              <li>
                Nifer y polisïau perthnasol a&apos;u cwmpas – 10% (5% ar gyfer
                nifer a 5% ar gyfer cwmpas)
              </li>
              <li>Camau gweithredu ategol a nodwyd – 20%</li>
              <li>Sefydliad atebol a nodwyd – 25%</li>
              <li>Strwythurau adrodd a nodwyd – 15%</li>
              <li>
                Cyllid ac adnoddau a nodwyd – 20% (5% ar gyfer rhaglenni
                cenedlaethol a nodwyd a 15% ar gyfer cyllid)
              </li>
              <li>Cynllun monitro a gwerthuso – 10%</li>
            </ul>
            <p>
              Arweiniodd hyn at radd gyffredinol o 54%, sy&apos;n golygu gradd o
              C+. Ers cerdyn cofnodi 2016 Plant Egnïol Iach Cymru, mae&apos;r
              radd ar gyfer Llywodraeth wedi gostwng ychydig o B- i C+. Gellir
              priodoli&apos;r newid hwn o bosibl i&apos;r PAT HEPA yn 2018, a
              olygodd fod y broses yn llai goddrychol.
            </p>
          </div>
        </div>

        <div className="wide">
          <div className="expand open  darkBlue">
            <h5 className="light darkBlue">
              Pethau i&apos;w hystyried ar gyfer y dyfodol
            </h5>
          </div>
          <div className="expandContent open  considerations">
            <p>
              Er eu bod &apos;ar waith&apos; ac yn bodoli o hyd, mae rhai
              o&apos;r polisïau yn eithaf hen erbyn hyn. Mae&apos;n bwysig
              ystyried hyn, gan y bydd rhai o&apos;r gweithgareddau gwreiddiol a
              bwriadedig, y dulliau ariannu a&apos;r systemau cyflawni wedi
              newid dros amser, yn enwedig yn ystod y cyfnod hwn o ddirwasgiad
              economaidd yn fyd-eang a arweiniodd at newidiadau sefydliadol,
              strwythurol a systematig sylweddol. Dylid nodi hefyd bod cwricwlwm
              newydd yn cael ei ddatblygu ar gyfer lleoliadau ac ysgolion yng
              Nghymru. Er na all y cwricwlwm arfaethedig hwn ategu gradd y
              cerdyn cofnodi eleni, mae&apos;n cyfleu&apos;r rhan i&apos;w
              chwarae gan y llywodraeth yn y dyfodol ac ymrwymiad sefydliadol i
              ddatblygu polisïau a strategaethau perthnasol i helpu&apos;r
              boblogaeth o bobl ifanc i gymryd rhan mewn gweithgarwch corfforol.
            </p>
            <p>
              Mae 14 o&apos;r 21 o bolisïau wedi nodi camau gweithredu yn
              ymwneud â gweithgarwch corfforol, ond dim ond hyn a hyn o gamau
              gweithredu a oedd yn benodol ac yn berthnasol i weithgarwch
              corfforol a gafodd eu nodi ym mholisïau Cymru, gan mai dim ond un
              cam gweithredu neu ofyniad ategol a gafodd ei nodi mewn rhai, ac
              mae&apos;r llall wedi nodi camau gweithredu a oedd yn ymddangos
              rhy eang.
            </p>
            <p>
              Roedd 14 o&apos;r 21 o bolisïau yn nodi&apos;r sefydliadau
              &apos;arweiniol&apos; sy&apos;n cefnogi ac yn cymryd cyfrifoldeb
              am rai o&apos;r polisïau a&apos;r darpariaethau a nodwyd ar gyfer
              gweithgarwch corfforol. Fodd bynnag, er bod &apos;arweinwyr&apos;
              wedi&apos;u nodi, nid yw llawer o&apos;r polisïau yn cyfeirio at
              atebolrwydd am gyflawni&apos;r camau gweithredu penodol yn aml. At
              hynny, dylid nodi bod atebolrwydd wedi&apos;i gyfyngu i
              Weinidogion Llywodraeth Cymru neu asiantaeth unigol mewn rhai
              achosion, a allai fod yn broblem a lleihau atebolrwydd yn
              gyffredinol oherwydd, er mwyn cyflawni, gall fod angen dibynnu ar
              sefydliadau neu unigolion eraill nad oes angen neu reswm iddynt
              gydymffurfio.
            </p>
            <p>
              Yn aml, nid oedd cadwyni awdurdod nac awdurdod, cyfathrebu na
              dyletswyddau clir. Fodd bynnag, er mwyn gwella effeithiolrwydd
              polisïau gweithgarwch corfforol a rôl y llywodraeth yn gyffredinol
              yn y gwaith o&apos;u gweithredu, mae&apos;n amlwg y dylid diffinio
              strwythur adrodd clir.
            </p>
            <p>
              Roedd pump o&apos;r 21 o bolisïau yn cyfleu cynllun gwerthuso a
              monitro. Er bod hyn yn eithaf isel, o gymharu â chyfanswm y
              polisïau a nodwyd, mae pedwar o&apos;r pum polisi yn ymwneud â
              meysydd polisi prif ffrwd sy&apos;n effeithio&apos;n uniongyrchol
              ar weithgarwch corfforol. Yn ogystal, mae&apos;n werth nodi,
              o&apos;r gwahanol fathau o bolisi (e.e. deddfwriaeth, strategaeth,
              cynllun gweithredu, canllawiau) a gafodd eu nodi gan y Gweithgor
              Ymchwil ar gyfer y dangosydd hwn, bod yr holl &apos;cynlluniau
              gweithredu&apos; yn amlinellu strategaethau monitro a gwerthuso.
              Efallai mai&apos;r rheswm dros hyn yw bod terfyn amser yn
              gysylltiedig â chynlluniau gweithredu a bod cynlluniau gweithredu
              yn cynnwys amcanion neu dargedau mesuradwy penodol yn gyffredinol,
              sy&apos;n golygu ei bod yn haws eu gwerthuso, pan fo deddfwriaeth
              lywodraethol yn rhywbeth parhaus sy&apos;n tueddu i aros yn eang o
              ran ei chwmpas.
            </p>
            <p>
              Roedd pump o&apos;r 21 o bolisïau yn nodi cyllid penodol i
              ategu&apos;r camau gweithredu a nodwyd ynddynt. Fodd bynnag, roedd
              y rhan fwyaf o&apos;r rhain yn cyfeirio at &apos;nodi&apos; neu
              &apos;adolygu&apos; cyfleoedd cyllido yn hytrach na rhoi
              tystiolaeth o gyllid a ddyrannwyd neu a roddwyd eisoes yn
              uniongyrchol.
            </p>
            <p>
              Fel rhan o ymrwymiad y llywodraeth i roi cyfleoedd i gymryd rhan
              mewn gweithgarwch corfforol a hyrwyddo gweithgarwch corfforol yng
              Nghymru, mae wedi cefnogi nifer o raglenni cenedlaethol a
              gynlluniwyd i gynyddu lefelau gweithgarwch corfforol plant a phobl
              ifanc. Cafodd naw o&apos;r rhaglenni hyn eu nodi gan y Gweithgor
              Ymchwil fel tystiolaeth o &quot;adnoddau&quot; cenedlaethol sydd
              â&apos;r nod o gynyddu lefelau gweithgarwch corfforol. Ystyrir bod
              pob un o&apos;r naw rhaglen yn gyfle i blant gymryd rhan mewn
              gweithgarwch corfforol neu&apos;n fenter hyrwyddol i annog y
              boblogaeth hon gymryd rhan mewn gweithgarwch corfforol yn y
              dyfodol.
            </p>
          </div>
        </div>

        <div className="wide">
          <div className="expand open  blue">
            <h5 className="light blue">Ffynonellau Data</h5>
          </div>
          <div className="expandContent open  sources">
            <ul className="indent" aria-label="Miscellaneous">
              <li>
                Llywodraeth Cymru &#45;
                <a
                  href="https://gov.wales/?skip=1&lang=cy"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Iechyd Cyhoeddus Cymru: &#45;
                <a
                  href="http://www.wales.nhs.uk/sitesplus/888/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Chwaraeon Cymru &#45;
                <a
                  href="http://sport.wales/cartref.aspx?lang=cy&"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Cyfoeth Naturiol Cymru &#45;
                <a
                  href="http://naturalresources.wales/?lang=cy"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Chwarae Cymru &#45;
                <a
                  href="http://www.chwaraecymru.org.uk/cym/cartref"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Sustrans Cymru &#45;
                <a
                  href="https://www.sustrans.org.uk/wales/our-work-wales"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Comisiynydd Cenedlaethau&apos;r Dyfodol Cymru &#45;
                <a href=" https://futuregenerations.wales/cy/" target="_blank">
                  link
                </a>
              </li>
              <li>
                Comisiynydd Plant Cymru &#45;
                <a href=" https://www.complantcymru.org.uk/" target="_blank">
                  link
                </a>
              </li>
              <li>
                Y Porth Cynllunio &#45;
                <a
                  href=" https://www.planningportal.co.uk/wales_cy/info/6/cynllunio/60/polisi_cynllunio_yng_nghymru"
                  target="_blank"
                >
                  link
                </a>
              </li>
              <li>
                Yr Arolygiaeth dros Addysg a Hyfforddiant yng Nghymru &#45;
                <a href=" https://www.estyn.gov.wales/language" target="_blank">
                  link
                </a>
              </li>
              <li>
                Cymdeithas Llywodraeth Leol Cymru &#45;
                <a
                  href="http://wlga.cymru/home"
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
        <Link href="/cy/indicators/overall-physical-activity">
          <a>
            <div className="card orange link nextIndicator">
              <div className="grade grade-d">d+</div>
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
                  alt="overall physical activity"
                  className="orange"
                  src="/icons/overallphys-icon.svg"
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
