import Overlay from "components/Overlay";
import { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card yellow indicatorPage">
          <div className="grade grade-c">c+</div>
          <div className="cardTitle yellow">
            <h6 className="lower light">Cymryd Rhan Mewn Chwaraeon Trefnus</h6>
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
        <h1>argymhelliad</h1>
        <p>
          Ar hyn o bryd nid oes unrhyw argymhellion penodol ar gyfer faint mae
          plant a phobl ifanc yn cymryd rhan mewn chwaraeon. Fodd bynnag, yn
          unol â Gweledigaeth Chwaraeon Cymru ar gyfer &apos;Pob Plentyn Wedi
          Gwirioni ar Chwaraeon am Oes&apos;, defnyddiwyd canran y plant sydd
          &apos;wedi gwirioni ar chwaraeon&apos; gan y Gweithgor Ymchwil fel y
          meincnod ar gyfer graddio&apos;r dangosydd yma.
        </p>
        <p>
          Yng Ngherdyn Cofnodi 2016 Plant Egnïol Iach Cymru, defnyddiodd y
          Gweithgor Ymchwil ganran y plant sydd &apos;wedi gwirioni ar
          chwaraeon&apos; (yn unol â gweledigaeth Chwaraeon Cymru &apos;i gael
          pob plentyn i wirioni ar chwaraeon am oes&apos;) fel meincnod ar gyfer
          graddio&apos;r dangosydd hwn. Fodd bynnag, am fod Chwaraeon Cymru
          bellach yn cynnal yr Arolwg ar Chwaraeon Ysgol bob tair blynedd yn lle
          pob dwy flynedd, nid oedd data cyfoes ar blant a phobl ifanc sydd
          &apos;wedi gwirioni ar chwaraeon&apos; ar gael.
        </p>
        <p>
          Felly, penderfynodd y Gweithgor Ymchwil ddefnyddio meincnod y
          Cynghrair Byd-eang ar gyfer Plant Egnïol Iach i&apos;w gwneud yn
          bosibl i gynnwys y data gorau a oedd ar gael yn y broses o
          raddio&apos;r dangosydd hwn.
        </p>
      </div>

      <div className="section">
        <h1>Diffiniad</h1>
        <p>
          <span className="underline">Ar gyfer plant 7-16 oed</span> <br />
          Canran y plant sy&apos;n cymryd rhan mewn chwaraeon deirgwaith neu fwy
          yr wythnos mewn clwb allgyrsiol (yn yr ysgol) neu gymunedol. Nid yw
          gweithgarwch AG cwricwlaidd wedi&apos;i gynnwys. <br />
          <br />
          <span className="underline">Ar gyfer pobl ifanc 16+ oed </span> <br />
          Canran y bobl ifanc sy&apos;n cymryd rhan mewn chwaraeon deirgwaith
          neu fwy yr wythnos mewn unrhyw leoliad.
        </p>
      </div>

      <div className="section">
        <h1>Data&apos;r arolwg ar hyn o bryd:</h1>
        <p>
          Defnyddiwyd dau arolwg cenedlaethol gynrychioliadol a gynhaliwyd gan
          Chwaraeon Cymru gan y Gweithgor Ymchwil i bennu gradd ar gyfer cymryd
          rhan mewn chwaraeon trefnus.
        </p>
        <p>
          Fel rhan o Arolwg Iechyd a Lles Myfyrwyr y Rhwydwaith Ymchwil Iechyd
          Ysgolion (2017), casglwyd data hunangofnodedig ar 112,054 o blant a
          phobl ifanc rhwng 11 a 17 oed. Roedd yr arolwg, a anfonwyd i 193 o
          ysgolion yng Nghymru, yn gofyn i blant a phobl ifanc nodi pa
          weithgareddau trefnus roeddent yn cymryd rhan ynddynt, yn eu hamser
          hamdden y tu allan i&apos;r ysgol. Roedd yr atebion posibl i&apos;r
          cwestiwn hwn fel a ganlyn: <br />
          <br />
          a) Cymryd rhan mewn chwaraeon tîm trefnus (e.e. pêl-droed, pêl-fasged,
          pêl foli) <br />
          b) Cymryd rhan mewn chwaraeon unigol trefnus (e.e. tenis, gymnasteg,
          karate) <br />
          c) Mynd i grwpiau drama, celfyddydau neu gerddoriaeth (e.e. cerddorfa,
          côr, dawns, theatr, chwarae offeryn cerdd) <br />
          d) Mynd i glwb (e.e. clwb gwyddbwyll, clwb trafod, clwb gwyddoniaeth){" "}
          <br />
          e) Mynd i sefydliadau plant ac ieuenctid (e.e. sgowtiaid, cadetiaid,
          Gwobr Dug Caeredin) <br />
          f) Cymryd rhan mewn gweithgareddau ffydd (e.e. gwasanaethau a
          dosbarthiadau crefyddol, grwpiau ieuenctid crefyddol) <br />
          g) Gwirfoddoli ar gyfer clwb neu sefydliad
        </p>
        <p>
          Penderfynodd y Gweithgor Ymchwil y dylai a) Cymryd rhan mewn chwaraeon
          tîm trefnus (e.e. pêl-droed, pêl-fasged, pêl foli), b) Cymryd rhan
          mewn chwaraeon unigol trefnus (e.e. tenis, gymnasteg, karate) ac e)
          Mynd i sefydliadau plant ac ieuenctid (e.e. sgowtiaid, cadetiaid,
          Gwobr Dug Caeredin) gael eu hystyried wrth raddio&apos;r dangosydd
          hwn. Gellir cyfiawnhau&apos;r penderfyniad i gynnwys &apos;mynd i
          sefydliadau plant a phobl ifanc&apos; drwy ddadlau bod y sefydliadau
          hyn yn hyrwyddo gweithgarwch corfforol drwy weithgareddau ac
          anturiaethau yn yr awyr agored. (Ystyriodd y Gweithgor Ymchwil
          ddefnyddio c) er mwyn cynnwys dawns, ond cafodd yr ateb hwn ei eithrio
          am fod dawns wedi&apos;i chyfuno â ffurfiau eraill ar gelfyddyd)
        </p>
        <p>
          Dangosodd yr arolwg fod
          <span className="bold">
            55% o blant a phobl ifanc yn gwneud un o&apos;r rhain o leiaf y tu
            allan i&apos;r ysgol.
          </span>
          Roedd gwahaniaeth yng nghyfran y bechgyn a merched sy&apos;n gwneud un
          o&apos;r rhain o leiaf y tu allan i&apos;r ysgol (60% o fechgyn a 51%
          o ferched). Roedd gwahaniaeth hefyd yng nghyfran y plant a phobl ifanc
          o gefndiroedd ethnig gwahanol; dywedodd 56% o blant gwynion a 47% o
          blant duon a lleiafrifoedd ethnig eu bod yn gwneud o leiaf un o&apos;r
          rhain y tu allan i&apos;r ysgol.
        </p>
      </div>

      <Overlay>
        <ol className="dataList">
          <li>
            <span className="dataNumber"> 1 </span>
            <p>
              <span className="underline">
                Mae&apos;r Arolwg ar Chwaraeon Ysgol (2015)
              </span>
              yn darparu data am 115,398 o blant 7-16 oed o bob cwr o Gymru.
              Dangosodd yr arolwg bod 48% o blant &apos;wedi gwirioni ar
              chwaraeon&apos; (plant sy&apos;n cymryd rhan mewn chwaraeon
              deirgwaith neu fwy yr wythnos mewn clwb allgyrsiol neu gymunedol).
              Dangosodd y data hyn duedd o gynnydd cynyddol yng nghanran y plant
              sydd &apos;wedi gwirioni ar chwaraeon&apos;, o 27 y cant yn 2011,
              40 yn 2013 a 48 y cant yn 2015. Yn fwy na hynny, roedd cyfrannau
              tebyg o blant ysgolion cynradd (49%) ac uwchradd (48%) &apos;wedi
              gwirioni ar chwaraeon&apos;, ond roedd mwy o fechgyn (52%)
              &apos;wedi gwirioni ar chwaraeon&apos; na merched (44%). Er bod
              gwahaniaethau yn ôl oedran, ethnigrwydd, anabledd a statws
              economaidd-gymdeithasol, mae cynnydd cyffredinol wedi bod yng
              nghyfran y plant sydd &apos;wedi gwirioni ar chwaraeon&apos; rhwng
              2013 a 2015 ar gyfer y bechgyn a&apos;r merched yn yr holl
              is-grwpiau hyn (oedran, ethnigrwydd, anabledd a statws
              economaidd-gymdeithasol).
            </p>
          </li>
          <li>
            <span className="dataNumber"> 2 </span>
            <p>
              <span className="underline">
                Casglodd yr Arolwg Chwaraeon Addysg Bellach (2015)
              </span>
              data am 4,568 o fyfyrwyr 16+ oed o 12 Coleg AB ledled Cymru.
              Dangosodd yr arolwg bod 49% o&apos;r myfyrwyr &apos;wedi gwirioni
              ar chwaraeon&apos; (cymryd rhan mewn chwaraeon deirgwaith neu fwy
              yr wythnos mewn unrhyw leoliad). Yn benodol, ymhlith y myfyrwyr
              iau 16-19 oed, roedd 52% o&apos;r myfyrwyr hyn &apos;wedi gwirioni
              ar chwaraeon&apos;. Roedd y canfyddiadau mewn perthynas â&apos;r
              is-grwpiau (rhyw, oedran, ethnigrwydd, anabledd a statws
              economaidd-gymdeithasol) yn yr arolwg hwn yn debyg iawn i
              ganfyddiadau&apos;r Arolwg ar Chwaraeon Ysgol (2015). Fodd bynnag,
              ni ellid sefydlu tueddiadau gan mai hon oedd y flwyddyn gyntaf i
              ddata gael eu casglu o&apos;r arolwg yma.
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
              Rhoddodd y Gweithgor Ymchwil radd o C+ i&apos;r dangosydd hwn gan
              fod cyfran y plant a phobl ifanc a oedd yn cymryd rhan mewn
              chwaraeon tîm trefnus, a oedd yn cymryd rhan mewn chwaraeon unigol
              trefnus ac a oedd yn mynd i sefydliadau plant ac ieuenctid rhwng
              54% a 59%.
              <span className="bold">
                Mae&apos;n bwysig nodi bod cwestiynau ac arolygon gwahanol
                wedi&apos;u defnyddio ar gyfer graddio dangosydd Cymryd Rhan
                mewn Chwaraeon Trefnus 2018 o gymharu â chardiau cofnodi 2014 a
                2016.
              </span>
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
                Mae&apos;n bwysig ystyried bod cwestiynau ac arolygon gwahanol
                wedi&apos;u defnyddio ar gyfer graddio dangosydd Cymryd Rhan
                mewn Chwaraeon Trefnus 2018 o gymharu â chardiau cofnodi
                blaenorol. Felly, nid yw&apos;r ffaith bod y radd C a roddwyd
                yng Ngherdyn Cofnodi 2016 wedi codi i C+ ar hyn o bryd yn golygu
                bod mwy o blant a phobl ifanc yn cymryd rhan mewn chwaraeon, ond
                yn hytrach bod y data sydd ar gael a&apos;r meincnod a
                ddefnyddir wrth raddio wedi newid. Er hynny, mae&apos;r radd yn
                dal i fod o fewn y categori C, sy&apos;n golygu y dylai cynyddu
                nifer y plant a phobl ifanc sy&apos;n cymryd rhan mewn
                chwaraeon, dawns a gweithgareddau/anturiaethau corfforol trefnus
                gael ei flaenoriaethu yng Nghymru o hyd. Yn ogystal, dylid
                ymdrechu i fynd i&apos;r afael â&apos;r anghydraddoldebau
                sy&apos;n bodoli rhwng bechgyn a merched a rhwng grwpiau ethnig
                gwahanol.
              </li>
              <li>
                Fel rhan o Arolwg Iechyd a Lles Myfyrwyr y Rhwydwaith Ymchwil
                Iechyd Ysgolion, defnyddiwyd dulliau hunangofnodi i gasglu data
                ar weithgareddau trefnus. Er bod yr arolwg yn rhoi gwybodaeth am
                y mathau gwahanol o weithgareddau trefnus y mae plant a phobl
                ifanc yn cymryd rhan ynddynt, nid yw&apos;r arolwg yn nodi pa
                mor aml y maent yn gwneud hynny (h.y. sawl gwaith yr wythnos y
                maent yn cymryd rhan mewn chwaraeon).
              </li>
              <li>
                Nid yw arolygon sy&apos;n bodoli eisoes ar gymryd rhan mewn
                chwaraeon/dawns/gweithgarwch corfforol sy&apos;n hyrwyddo
                clybiau yng Nghymru yn nodi hyd y sesiynau y mae plant a phobl
                ifanc yn cymryd rhan ynddynt.
              </li>
              <li>
                Mae&apos;r dystiolaeth ar gyfer plant dan 5 oed yn brin. Mae
                angen mynd i&apos;r afael â hyn drwy ddulliau casglu data cadarn
                systematig. Ar gyfer cerdyn cofnodi 2018, nid oes data cyfoes ar
                gael ar gyfer plant dan 11 oed.
              </li>
              <li>
                Mae Arolwg ar Chwaraeon Ysgol 2018 a&apos;r Arolwg Chwaraeon
                Addysg Bellach yn cael eu cynnal yng Nghymru ar hyn o bryd. Er
                nad yw&apos;r data ar gael ar gyfer y cerdyn cofnodi hwn, bydd y
                data hyn yn cael eu defnyddio yng ngherdyn cofnodi Plant Egnïol
                Iach Cymru 2020 ac yn ei gwneud yn bosibl i ddadansoddi
                tueddiadau ymhlith y plant a phobl ifanc sydd &apos;wedi
                gwirioni ar chwaraeon&apos;.
              </li>
              <li>
                Mae&apos;r dystiolaeth orau sydd ar gael yn dangos bod ychydig
                dros hanner y plant a phobl ifanc yng Nghymru yn cymryd rhan
                mewn chwaraeon trefnus (unigol neu dîm) neu&apos;n mynd i
                sefydliadau plant ac ieuenctid sy&apos;n rhoi&apos;r cyfle i
                gymryd rhan mewn gweithgareddau/anturiaethau corfforol.
              </li>
            </ul>
          </div>
        </div>

        <div className="wide">
          <div className="expand open  blue">
            <h5 className="light blue">Sut Mae Gwella&apos;r</h5>
          </div>
          <div className="expandContent open  improve">
            <ul className="indent" aria-label="Chwaraeon Cymru">
              <li>
                Chwaraeon Cymunedol &#45;
                <a
                  href="http://ourambitiousjourney.sport.wales/"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
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

            <ul className="indent" aria-label="Netmums">
              <li>
                E.e. ar gyfer DO Cymru &#45;
                <a
                  href="http://www.netmums.com/sw-wales/places-to-go/after-school-activities"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Chwaraeon Anabledd Cymru">
              <li>
                Clybiau &#45;
                <a
                  href="http://www.disabilitysportwales.com/clubs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Chwaraeon Parlys yr Ymennydd &#45;
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
          </div>
        </div>

        <div className="wide">
          <div className="expand open  lightBlue">
            <h5 className="light lightBlue">Ffynonellau Data</h5>
          </div>
          <div className="expandContent open  sources">
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
              <li>
                Arolwg Chwaraeon Addysg Bellach 2015 &#45;
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
        <Link href="/cy/indicators/outdoor-play">
          <a>
            <div className="card yellow link nextIndicator">
              <div className="grade grade-c">c-</div>
              <div className="cardTitle yellow">
                <h6 className="lower light">
                  Chwarae Egnïol ac yn yr Awyr Agored
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
