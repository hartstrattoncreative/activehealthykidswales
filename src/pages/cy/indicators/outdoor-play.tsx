import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card yellow indicatorPage">
          <div className="grade grade-c">c-</div>
          <div className="cardTitle yellow">
            <h6 className="lower light">Chwarae Egnïol ac yn yr Awyr Agored</h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <Image
              alt="outdoor"
              className="yellow"
              src="/icons/outdoor-icon.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>Cefndir</h1>
        <p>
          Gall chwarae egnïol olygu gweithgarwch neu gemau symbolaidd gyda
          rheolau clir neu hebddynt; gall y gweithgarwch fod yn
          ddistrwythur/di-drefn, yn gymdeithasol neu&apos;n rhywbeth y mae plant
          yn ei wneud ar eu pen eu hunain, ond mae cyd-destun chwaraes a&apos;r
          ffaith ei fod yn weithgarwch sy&apos;n sylweddol uwch na&apos;r
          gyfradd metabolaeth waelodol yn dynodi&apos;r gwahaniaeth rhwng
          chwarae arferol a chwarae egnïol. Mae chwarae egnïol yn tueddu i
          ddigwydd yn achlysurol, gyda chyfnodau gorffwys rheolaidd, sy&apos;n
          ei gwneud yn anodd ei gofnodi. Mae&apos;r plentyn yn rhydd i
          benderfynu beth i&apos;w wneud, ac nid yw&apos;r gweithgarwch yn cael
          ei arwain na&apos;i gynllunio gan oedolyn.
        </p>
        <p>
          Mae gan blant yr hawl i chwarae, fel y nodir yn erthygl 31 o
          Gonfensiwn y Cenhedloedd Unedig ar Hawliau&apos;r Plentyn. Mae&apos;r
          Confensiwn yn diffinio chwarae fel gweithgaredd nad yw&apos;n orfodol
          y mae plant yn ei ddechrau, ei reoli a&apos;i strwythuro ac sydd
          wedi&apos;i ysgogi gan gymhelliant mewnol. Maent yn hwyl, amhendant,
          heriol, hyblyg ac anghynhyrchiol yn bennaf. Yng Nghymru, mae
          fframwaith polisi ar gyfer chwarae wedi bod ar waith ers 2002 drwy
          gyhoeddi polisi chwarae cenedlaethol, wedi&apos;i ddilyn gan
          strategaeth genedlaethol yn 2006. Er mwyn cyflawni ei nod o greu Cymru
          sy&apos;n hyrwyddo chwarae a rhoi&apos;r cyfle i&apos;n plant chwarae,
          mae Llywodraeth Cymru yn cydnabod bod angen i awdurdodau lleol, eu
          partneriaid a rhanddeiliaid eraill weithio tuag at y diben hwn. Felly,
          cafodd adran ar Gyfleoedd Chwarae (dyletswyddau digonolrwydd chwarae)
          ei chynnwys ym Mesur Plant a Theuluoedd (Cymru) 2010.
        </p>
        <p>
          Mae plant yn dweud mai chwarae yw un o&apos;r agweddau mwyaf pwysig ar
          eu bywydau; maent yn gwerthfawrogi&apos;r amser i chwarae, y rhyddid i
          chwarae ac ansawdd mannau i chwarae. Mae ymgynghoriadau wedi dangos
          bod plant a phobl ifanc yng Nghymru yn ffafrio chwarae yn yr awyr
          agored oddi wrth oedolion, mewn mannau diogel ond difyr.
        </p>
        <p>
          Chwarae yn yr awyr agored yw un o 10 o gamau sy&apos;n seiliedig ar
          dystiolaeth a hyrwyddir yn rhaglen Pob Plentyn Iechyd Cyhoeddus Cymru
          i helpu plant yn y blynyddoedd cynnar i gynnal pwysau iach. Mae cam 6
          yn canolbwyntio ar chwarae yn yr awyr agored, a&apos;r uchelgais yw y
          bydd pob plentyn yn cael y cyfle i chwarae yn yr awyr agored bob dydd.
          Fel rhan o arolwg i lywio&apos;r rhaglen, roedd bron pob rhiant (97%)
          i blentyn dan 5 oed o&apos;r farn ei bod yn bwysig bod ei blentyn yn
          chwarae yn yr awyr agored bob dydd. Fodd bynnag, nid yw bron traean o
          blant dan 5 oed (29%) yn treulio&apos;r amser sydd ei angen arnynt yn
          yr awyr agored.
        </p>
        <p>
          Y meincnod a ddefnyddiwyd gan y Gweithgor Ymchwil i roi gradd ar gyfer
          y dangosydd hwn oedd: <br />- % y plant a phobl ifanc sydd
          wrthi&apos;n chwarae&apos;n egnïol mewn ffordd ddistrwythur/di-drefn
          am sawl awr y dydd
          <br />- % y plant a phobl ifanc sy&apos;n dweud eu bod yn treulio sawl
          awr y dydd yn yr awyr agored <br />- % y plant a phobl ifanc sy&apos;n
          defnyddio strydoedd sy&apos;n agos i&apos;r cartref neu&apos;r ysgol,
          parc, iard chwarae nad yw ar safle&apos;r ysgol, meysydd chwarae nad
          ydynt ar safle&apos;r ysgol a&apos;r traeth/môr fel man i gymryd rhan
          mewn gweithgarwch corfforol/chwarae
        </p>
      </div>

      <div className="section">
        <h1>Diffiniad</h1>
        <p>
          Mae tystiolaeth yn awgrymu bod plant yn fwy egnïol pan maen nhw&apos;r
          tu allan. Felly, yn y Cerdyn Cofnodi blaenorol (2014), defnyddiwyd
          &apos;defnydd o barc&apos; yn unig i sefydlu&apos;r radd ar gyfer y
          dangosydd yma. Ar gyfer Cerdyn Cofnodi 2016, defnyddiodd y Gweithgor
          Ymchwil gyfran y plant oedd yn defnyddio amrywiaeth o lefydd ar gyfer
          chwarae fel meincnod i raddio&apos;r dangosydd yma, yn ogystal â
          chanran y plant a ddywedodd eu bod yn treulio ≥3 awr yn chwarae y tu
          allan.
        </p>
      </div>

      <div className="section">
        <h1>Y data o arolygon</h1>
        <h6>ArolygonoDdigonolrwyddCyfleoeddChwarae</h6>
        <p>
          Er mwyn cydymffurfio â dyletswyddau Digonolrwydd Chwarae, mae pob
          awdurdod lleol yng Nghymru wedi cyflwyno Asesiadau o Ddigonolrwydd
          Chwarae i Weinidogion Llywodraeth Cymru. Cynhaliodd yr awdurdodau
          lleol arolygon gyda phlant, ac mae llawer ohonynt wedi defnyddio
          cwestiynau tebyg, yn seiliedig ar holiadur enghreifftiol. Yn 2016,
          gofynnodd 13 o 22 o awdurdodau lleol yng Nghymru gwestiynau am chwarae
          i gyfanswm o 5,478 o blant rhwng 5 a 17 oed.
        </p>
        <p>
          Roedd 13,109 o 21,060 o blant yn ffafrio mannau yn yr awyr agored i
          gymryd rhan mewn gweithgarwch corfforol/chwarae. O ran y meincnod ar
          gyfer canran y plant a phobl ifanc sy&apos;n dweud eu bod yn treulio
          sawl awr y dydd yn yr awyr agored, dywedodd 41% o blant a phobl ifanc
          eu bod yn chwarae yn yr awyr agored bron bob dydd. Y data hyn oedd y
          data gorau a oedd ar gael sy&apos;n ceisio barn plant am yr amser
          a&apos;r mannau sydd ganddynt i chwarae yn yr awyr agored. Cytunodd y
          Gweithgor Ymchwil fod plant yn tueddu i fod yn gorfforol egnïol ac yn
          herio&apos;u hunain yn gorfforol ac yn feddyliol yn yr awyr agored nag
          y byddant yn ei wneud dan oruchwyliaeth.
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
          gwblhau&apos;r arolwg. Mae&apos;r arolwg yn cynnwys set graidd o
          gwestiynau sy&apos;n edrych ar y canlynol:
        </p>
        <ul>
          <li>
            Ffactorau cefndir: demograffeg, aeddfedrwydd a chefndir cymdeithasol
          </li>
          <li>
            Adnoddau unigol a chymdeithasol: delwedd o&apos;r corff, cefnogaeth
            y teulu, cyfoedion, amgylchedd yr ysgol
          </li>
          <li>
            Ymddygiadau iechyd: gweithgarwch corfforol, bwyta a dilyn deiet,
            ysmygu, yfed alcohol, defnyddio canabis, ymddygiad rhywiol, trais a
            bwlio, anafiadau
          </li>
          <li>
            Canlyniadau iechyd: symptomau, boddhad o fywyd, iechyd
            hunangofnodedig a thaldra a phwysau y mae mynegai màs y corff yn
            deillio ohonynt
          </li>
        </ul>
        <p>
          O ran y dangosydd Chwarae Egnïol, gofynnodd arolwg 2017: &quot;Yn
          ystod gwyliau&apos;r haf diwethaf, pa mor aml y gwnaethoch ymarfer
          corff yn eich amser hamdden i&apos;r graddau y gwnaethoch
          golli&apos;ch anadl neu chwysu?&quot; Dywedodd cyfanswm o 44% (44,629
          o blant) y gwnaethant ymarfer corff &apos;yn aml&apos; neu
          &apos;drwy&apos;r amser&apos; yn ystod gwyliau&apos;r haf. Roedd y
          canlyniadau&apos;n dangos gwahaniaeth rhwng y rhywiau, gyda 50% o
          fechgyn (n = 25,287) o gymharu â 38% o ferched (n = 19,342) yn dweud y
          gwnaethant ymarfer corff &apos;yn aml&apos; neu &apos;drwy&apos;r
          amser&apos; yn ystod gwyliau&apos;r haf.
        </p>
        <p>
          Mae arolwg 2017 yn cynrychioli pob rhanbarth yng Nghymru. Fodd bynnag,
          mae&apos;r arolwg yn canolbwyntio ar blant o oedran ysgol uwchradd
          (rhwng 11 ac 16 oed) yn unig, sy&apos;n duedd debygol yn y
          canlyniadau.
        </p>
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
                Mae&apos;r Arolwg ar Chwaraeon Ysgol (2015)
              </span>
              yn darparu data am 115,398 o blant 7-16 oed o bob cwr o Gymru.
              Cafodd y data am gyfran y plant a&apos;r ieuenctid oedd yn
              defnyddio &apos;strydoedd ger eu cartref neu eu hysgol&apos;
              (43%), &apos;parc&apos; (61%), &apos;maes chwarae heb fod yn yr
              ysgol&apos; (38%), &apos;caeau chwarae yn yr ysgol&apos; (48%),
              &apos;caeau chwarae heb fod yn yr ysgol&apos; (50%) a
              &apos;thraeth/môr&apos; (42%) fel llefydd i ymarfer/ chwarae yn
              ystod y flwyddyn flaenorol eu cyfuno i roi cyfran gyffredinol o
              47% o blant ac ieuenctid yn defnyddio o leiaf un o&apos;r llefydd
              hyn (Arolwg ar Chwaraeon Ysgol 2015).
            </p>
          </li>
          <li>
            <span className="dataNumber"> 2 </span>
            <p>
              <span className="underline">
                Adroddodd yr arolwg Little Voices Shouting Out
              </span>
              ar blant 7-11 oed o bob cwr o Gymru bod 18% yn treulio 3 awr, 15%
              4 awr a 27% mwy na 4 awr yn chwarae allan ar ddiwrnod arferol.
              Felly, dywedodd 60% o blant eu bod yn treulio &ge;3 awr yn
              chwarae&apos;r tu allan.
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
              Mae&apos;r Gweithgor Ymchwil yn nodi bod casglu data gan blant
              wrth iddynt chwarae mewn ffordd ddistrwythur yn heriol, yn
              foesegol ac yn logistaidd. Cytunodd y Gweithgor y dylid ystyried
              yr amrywiaeth o fannau i chwarae. Cafodd y data ar ganran y plant
              a ddywedodd eu bod yn chwarae yn yr awyr agored bron bob dydd
              (41%), yn ogystal â chanran y plant a ddywedodd eu bod yn gwneud
              ymarfer corff pan nad ydynt yn yr ysgol (44%) eu syntheseiddio i
              roi cyfartaledd cofnodi gyffredinol o 43% (42.5%), sy&apos;n
              gyfystyr â gradd C- ar gyfer y data sydd ar gael. Y radd yng
              ngherdyn cofnodi Plant Egnïol Iach 2016 oedd C, am fod mwy o ddata
              cynhwysfawr ar gael gan blant.
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
            <p>
              Mae&apos;r dystiolaeth orau sydd ar gael yn dangos, o ran Chwarae
              Egnïol, bod Cymru yn llwyddo o drwch blewyn, gyda llai na hanner o
              blant a phobl ifanc. Dengys ymchwil ddiweddar bod plant, os cânt y
              cyfle, yn gwneud ymarfer corff amrywiol ac yn sicrhau buddiannau
              iechyd sylweddol sy&apos;n gysylltiedig â chael y rhyddid i
              chwarae fel y mynnant. Mae angen i bob plentyn a pherson ifanc
              chwarae. Mae chwarae&apos;n hollbwysig i ddatblygiad a lles
              unigolion a chymunedau, felly mae angen annog plant i chwarae yn
              yr awyr agored. Mae plant a rhieni yn dweud bod amrywiaeth o
              bethau yn atal plant rhag chwarae yn yr awyr agored, gan gynnwys
              pryderon ynghylch diogelwch, traffig, pwysau amser a lleihad yn
              nifer y mannau i chwarae.
            </p>
            <ul>
              <li>
                Mae angen gwella&apos;r dull o gasglu data drwy Asesiadau o
                Ddigonolrwydd Chwarae er mwyn cael darlun mwy cyflawn o
                safbwyntiau plant.
              </li>
              <li>
                Dylai Arolwg Cenedlaethol Cymru gasglu gwybodaeth gan rieni am
                yr amser a&apos;r mannau sydd ar gael i blant i chwarae.
              </li>
              <li>
                Dylid hyrwyddo gallu plant i chwarae yn yr awyr agored yn lleol,
                ac mae angen blaenoriaethu ymyriadau lleol yn y gymuned er mwyn
                mynd i&apos;r afael â rhwystrau i chwarae: <br />-
                <span className="bold">Ffyrdd diogelach</span> Bydd terfyn
                cyflymder o 20mya ym mhob ardal breswyl yn cael effaith
                bellgyrhaeddol a chadarnhaol. Dylai awdurdodau lleol ymgysylltu
                â chymunedau lleol a hwyluso prosiectau chwarae sy&apos;n cael
                eu harwain gan drigolion a strydoedd ledled Cymru. <br />-
                <span className="bold">
                  Gwneud y mwyaf o asedau cymunedol-safle&apos;r ysgol i chwarae{" "}
                </span>
                Dylid annog ysgolion, fel un o adnoddau canolog y gymuned leol,
                i ystyried trefnu bod safle&apos;r ysgol ar gael i blant chwarae
                arno ar ôl ysgol ac ar benwythnosau. <br />-
                <span className="bold">Amser chwarae yn yr ysgol </span> Dylai
                ysgolion ystyried gwerth unrhyw benderfyniadau a wneir ynghylch
                trefn neu hyd y diwrnod ysgol i les disgyblion, gan gynnwys
                amseroedd chwarae, amser cinio a gwaith cartref sy&apos;n cael
                ei drefnu.
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
            <ul className="indent" aria-label="Chwarae Cymru">
              <li>
                Chwarae Allan &#45;
                <a
                  href="http://playwales.org.uk/eng/playingout"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Hybu Gweithgarwch Corfforol drwy Chwarae Awyr Agored
                (blynyddoedd cynnar) &#45;
                <a
                  href="http://playwales.org.uk/login/uploaded/documents/INFORMATION%20SHEETS/Promoting%20physical%20activity%20through%20outdoor%20play%20in%20early%20years%20settings.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Chwarae Am Oes">
              <li>
                Mynd Amdani &#45;
                <a
                  href="http://change4lifewales.org.uk/families/get-going-campaign/get-going/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Chwarae Am Oes &#45;
                <a
                  href="http://www.nhs.uk/Change4Life/supporter-resources/downloads/297553_P4L_outdoor_acc2.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Sustrans Cymru">
              <li>
                Ymgyrch Plant Awyr Agored &#45;
                <a
                  href="http://www.sustrans.org.uk/what-you-can-do/children-and-families"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Amrywiol">
              <li>
                Chwarae Allan &#45;
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
              <li>
                Adroddiad Little Voices Shouting Out 2015 &#45;
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
        <Link href="/cy/active-transport">
          <a>
            <div className="card orange link nextIndicator">
              <div className="grade grade-d">d+</div>
              <div className="cardTitle orange">
                <h6 className="lower light">
                  Teithio Egnïol
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
