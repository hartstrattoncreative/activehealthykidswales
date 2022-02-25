import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card orange indicatorPage">
          <div className="grade grade-d">d+</div>
          <div className="cardTitle orange">
            <h6 className="lower light">Teithio Egnïol</h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <Image
              alt="active transport"
              className="orange"
              src="/icons/activetransport-icon.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <div className="section">
        <h1>argymhelliad</h1>
        <p>
          Mae teithio egnïol yn unrhyw ffurf ar deithio drwy ddefnyddio
          cyfryngau egnïol felcerdded, beicio, sglefrfyrddio a mynd ar sgwter.
          Ar hyn o bryd nid oes unrhywargymhellion ar gyfer teithio egnïol, ond
          dylai plant a phobl ifanc gael eu hannog iddefnyddio ffurfiau egnïol
          ar deithio os yw hynny&apos;n bosib. Mae gwaith ymchwil wedidangos bod
          teithio egnïol, yn enwedig teithio i&apos;r ysgol ac adref yn ôl, yn
          cyfrannu atgyfran sylweddol o lefelau gweithgarwch corfforol
          cyffredinol plant a phobl ifanc ac yngysylltiedig â lefelau uwch o
          ddefnyddio egni. Gwelir y canllawiau ar gyfer lefelau gweithgarwch
          corfforol plant a phobl ifanc o dan y dangosydd &apos;lefelau
          gweithgarwch corfforol cyffredinol&apos;
        </p>
      </div>
      <div className="section">
        <h1>Diffiniad</h1>
        <p>
          Ar gyfer Cerdyn Cofnodi 2016, defnyddiodd Gweithgor Ymchwil gyfran y
          plant a&apos;r bobl ifanc sy&apos;n defnyddio teithio egnïol i fynd
          i&apos;r ysgol fel y meincnod ar gyfer graddio&apos;r dangosydd
          Teithio Egnïol.
        </p>
      </div>
      <div className="section">
        <h1>Y data o arolygon</h1>
        <h6>Arolwg Cenedlaethol Cymru (2016/17)</h6>
        <p>
          Fel rhan o Arolwg Cenedlaethol Cymru, mae un oedolyn (16+ oed) ym mhob
          aelwyd ledled Cymru yn cymryd rhan mewn cyfweliad wyneb yn wyneb
          sy&apos;n para 25 munud. Cafodd 10,493 o gyfweliadau â rhieni i blant
          mewn ysgolion cynradd ac uwchradd eu recordio. Dangosodd y data fod
          44% o blant mewn ysgolion cynradd a 34% o ddisgyblion mewn ysgolion
          uwchradd yn defnyddio ffordd egnïol o deithio i&apos;r ysgol (cerdded
          gydag oedolyn, cerdded ar eu pen eu hunain neu gyda phlant eraill,
          gyda rhai yn seiclo).
        </p>
        <h6>
          Arolwg Ymddygiad Iechyd mewn Plant Oedran Ysgol/y Rhwydwaith Ymchwil
          Iechyd Ysgolion 2017
        </h6>
        <p>
          Mae arolwg Ymddygiad Iechyd mewn Plant Oedran Ysgol/y Rhwydwaith
          Ymchwil Iechyd Ysgolion yn arolwg ysgol sy&apos;n casglu data drwy
          holiaduron a gaiff eu cwblhau gan blant yn yr ystafell
          ddosbarth.Gwnaeth sampl a oedd yn gynrychioliadol yn genedlaethol o
          fwy na 100,000 o blant a phobl ifanc rhwng 11 ac 16 oed yng Nghymru
          gwblhau&apos;r arolwg. Yn ôl data&apos;r arolwg, mae 33.79% (34,637 o
          blant a phobl ifanc rhwng 11 ac 16 oed) yn cerdded/seiclo I&apos;R
          ysgol, ac mae 36.09% yn cerdded/seiclo O&apos;R ysgol (10,257 o blant
          a phobl ifanc rhwng 11 ac 16 oed).
        </p>
        <p>
          Nid oedd yr arolygon eraill a gafodd eu hystyried yn flaenorol ar
          gyfer Plant Egnïol Iach 2016 yn gyfredol mwyach (h.y. cyn 2016)
          neu&apos;n gynrychioliadol yn genedlaethol (e.e. arolwg Hands Up
          Sustrans). Drwy edrych ar y data gorau sydd ar gael ar gyfer y
          dangosydd Teithio Egnïol, byddai&apos;n awgrymu bod tuedd i ganran y
          plant sy&apos;n defnyddio ffordd egnïol o deithio i&apos;r ysgol
          ostwng.
        </p>
      </div>
      <div className="wrapper rm">
        <a className="button" id="rmBtn">
          {" "}
          Ddarllen mwy{" "}
        </a>
      </div>
      <div className="rmView">
        <ol className="dataList">
          <li>
            <span className="dataNumber"> 1 </span>
            <p>
              <span className="underline">
                Mae&apos;r Arolwg ar Chwaraeon Ysgol (2015)
              </span>
              yn darparu data am 115,398 o blant 7-16 oed o bob cwr o Gymru.
              Dyma&apos;r data arolwg mwyaf sydd ar gael am deithio egnïol
              ymhlith plant a phobl ifanc. Yn gyffredinol, dangosodd y data bod
              40% o blant a phobl ifanc yn dweud eu bod yn cerdded, beicio,
              sglefrfyrddio neu fynd ar sgwter i&apos;r ysgol. Hefyd, dywedodd
              44% o Ddisgyblion Cynradd (blynyddoedd ysgol 3-6) a 37% o
              Ddisgyblion Uwchradd (blynyddoedd ysgol 7-11) eu bod yn cerdded,
              beicio, sglefrfyrddio neu fynd ar sgwter i&apos;r ysgol.
            </p>
          </li>
          <li>
            <span className="dataNumber"> 2 </span>
            <p>
              <span className="underline">
                Mae&apos;r arolwg Ymddygiad Iechyd Plant Oedran Ysgol (2013/14)
              </span>
              yn casglu data am 9,055 o blant a phobl ifanc 11-16 oed o ysgolion
              uwchradd yng Nghymru. Dangosodd y data bod 32% ohonynt (34% o
              fechgyn a 31% o ferched) wedi cwblhau prif ran eu siwrnai i&apos;r
              ysgol drwy gerdded neu feicio. Yn yr arolwg hwn, mae&apos;r
              data&apos;n dynodi nad oes llawer wedi newid yng nghyfran y plant
              a&apos;r bobl ifanc a deithiodd yn egnïol i&apos;r ysgol rhwng
              2006 a 2014.
            </p>
          </li>
          <li className="break"></li>
          <li>
            <span className="dataNumber"> 3 </span>
            <p>
              <span className="underline">
                Mae Arolwg Cenedlaethol Cymru (2014/15)
              </span>
              yn cynnal cyfweliad wyneb yn wyneb 25 munud gydag un oedolyn (16+
              oed) o deuluoedd ledled Cymru. Cynhaliwyd 14,285 o gyfweliadau
              gyda rhieni plant cynradd ac uwchradd a&apos;u recordio. Dangosodd
              data&apos;r arolwg yma bod 49% o blant cynradd a 35% o ddisgyblion
              uwchradd yn cerdded i&apos;r ysgol dim ots pa mor bell oedd y
              siwrnai o&apos;r cartref i&apos;r ysgol.
            </p>
          </li>
          <li>
            <span className="dataNumber"> 4 </span>
            <p>
              <span className="underline">
                Dangosodd data a ddarparwyd gan Sustrans Cymru
              </span>
              o&apos;u harolwg dwylo i fyny ar 4,356 o blant a phobl ifanc yn
              2014/15 bod 53.7% o blant 7-16 oed yn teithio i&apos;r ysgol naill
              ai drwy gerdded, beicio neu fynd ar sgwter/sglefrfyrddio.
              Dangosodd y data bod lefelau&apos;r plant a oedd yn teithio
              i&apos;r ysgol drwy gerdded, beicio neu fynd ar sgwter /
              sglefrfyrddio&apos;n gyson ar gyfer y 4 blynedd diwethaf o gasglu
              data.
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
              Penderfynodd y Gweithgor Ymchwil bwysoli&apos;r data yn y ffordd
              ganlynol:
              <br />
              Data Arolwg Cenedlaethol Cymru ar ysgolion cynradd = 50%
              <br />
              Data Arolwg Cenedlaethol Cymru ar ysgolion uwchradd, a data arolwg
              Ymddygiad Iechyd mewn <br />
              Plant Oedran Ysgol ar deithio I&apos;R ysgol ac O&apos;R ysgol =
              50%
              <br />
            </p>
            <p>
              Gellir cyfiawnhau hyn drwy ddadlau y byddai plant mewn ysgolion
              uwchradd yn cael eu cynrychioli ddwywaith pe baem yn pwysoli pob
              un o&apos;r pedwar ffigur yn gyfartal ac y byddai cyfartaledd
              o&apos;r data ar ysgolion uwchradd yn cyfrif am 50% a&apos;r data
              ar ysgolion cynradd yn cyfrif am y 50% arall. Ar ôl cyfrifo&apos;r
              uchod, daeth Teithio Egnïol i 39% (D+). Y radd yng ngherdyn
              cofnodi Plant Egnïol Iach 2016 oedd C. Gellir priodoli&apos;r
              gwahaniaeth i&apos;r amrywiaeth yn y ffynonellau data sydd ar gael
              a&apos;r newidiadau i&apos;r system sgorio ar gyfer graddau 2018.
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
                Mae&apos;r dystiolaeth orau sydd ar gael yn dangos bod llai na
                40% o blant a phobl ifanc yn defnyddio ffordd egnïol o deithio
                i&apos;r ysgol.
              </li>
              <li>
                Casglwyd yr holl ddata ar gyfer Teithio Egnïol drwy ddulliau
                hunangofnodi. Er hynny, un o&apos;r cryfderau mwyaf yw bod y
                ddau arolwg wedi darparu data cenedlaethol.
              </li>
              <li>
                Mae llai o setiau data ar gael o gymharu â blynyddoedd blaenorol
                i fesur y dangosydd hwn.
              </li>
              <li>
                Yn debyg i flynyddoedd blaenorol, dim ond data ar deithio
                i&apos;r ysgol ac oddi yno, ac nid i leoedd eraill (e.e. y parc,
                siopau), y mae&apos;r arolygon yn eu darparu. Mae angen
                ymchwilio&apos;n fwy i&apos;r ffyrdd y mae plant a phobl ifanc
                yn teithio i leoedd eraill, gan gynnwys siopau, parciau a thai
                ffrindiau neu berthnasau). Gall y teithiau hyn fod yn gyfle
                arall i ddefnyddio ffordd egnïol o deithio, a dylent gael eu
                hystyried ar gyfer arolygon cenedlaethol yn y dyfodol.
              </li>
              <li>
                Bydd Iechyd Cyhoeddus Cymru yn cynnal arolwg ar-lein y gall pob
                ysgol yng Nghymru ei gwblhau, a fydd yn casglu data ar sut mae
                plant yn teithio i&apos;r ysgol ac oddi yno fel arfer. Y gobaith
                yw y bydd y data hyn ar gael ar gyfer Plant Egnïol Iach 2020.
                Bydd y broses yn seiliedig ar waith sydd ar y gweill i
                ddilysu&apos;r fethodoleg a fformat y cwestiynau.
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
            <ul className="indent" aria-label="Sustrans Cymru">
              <li>
                Siwrneiau Egnïol i&apos;r Ysgol &#45;
                <a
                  href="http://www.sustrans.org.uk/wales/what-we-do/education-and-young-people-wales"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Newid Am Oes Cymru">
              <li>
                Cerdded Am Oes &#45;
                <a
                  href="http://change4lifewales.org.uk/families/walk4life/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>
            <ul className="indent" aria-label="Y Biwro Plant Cenedlaetho">
              <li>
                Cludiant a Theithio Egnïol &#45;
                <a
                  href="http://www.ncb.org.uk/sustainable-lifestyles/transport-and-active-travel"
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
            <ul className="indent" aria-label="Chwaraeon Cymru">
              <li>
                Arolwg ar Chwaraeon Ysgol 2015 &#45;
                <a
                  href="http://sportwales.org.uk/research--policy/surveys-and-statistics/school-sport-survey.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>
            <ul className="indent" aria-label="Ilywodraeth Cymru">
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
                Arolwg Cenedlaethol ar gyfer Cymru 2014/15. &#45;
                <a
                  href="http://gov.wales/statistics-and-research/national-survey/?tab=current&lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>
            <ul className="indent" aria-label="Sustrans Cumry">
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
            </ul>
          </div>
        </div>
      </div>
      <div className="wide">
        <Link href="/cy/sedentary-behaviour">
          <a>
            <div className="card red link nextIndicator">
              <div className="grade grade-inc">f</div>
              <div className="cardTitle red">
                <h6 className="lower light">
                  Ymddygiad Eisteddol
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
                  alt="sedentary"
                  className="red"
                  src="/icons/sedentary-icon.svg"
                  layout="fill"
                  objectFit="contain"
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
