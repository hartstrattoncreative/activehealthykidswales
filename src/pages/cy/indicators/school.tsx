import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card red indicatorPage">
          <div className="grade grade-e">ang</div>
          <div className="cardTitle red">
            <h6 className="lower light">Ysgol</h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <Image
              alt="school"
              layout="fill"
              objectFit="contain"
              className="red"
              src="/icons/school-icon.svg"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>argymhelliad</h1>
        <p>
          Gan fod plant a phobl ifanc yn treulio llawer iawn o&apos;u diwrnod yn
          yr ysgol, mae amgylchedd yr ysgol yn cynnig llawer o gyfleoedd i hybu
          a hwyluso gweithgarwch corfforol (e.e. AG, chwaraeon allgyrsiol).
        </p>
        <p>
          Yn y DU, argymhellir bod ysgolion yn darparu 120 munud (2 awr) o
          addysg gorfforol bob wythnos ar gyfartaledd. Hefyd, mae gwaith ymchwil
          wedi dangos bod cynnig mwy o gyfleoedd gweithgarwch corfforol yn yr
          ysgol (ac eithrio AG) yn gysylltiedig â lefelau uwch o weithgarwch
          corfforol mewn plant a phobl ifanc
          <span className="italic">(Carlson et al. 2013)</span>. Felly
          mae&apos;n bwysig bod ysgolion yn cynnig cyfleoedd allgyrsiol i annog
          disgyblion mwy egnïol.
        </p>
      </div>

      <div className="section">
        <h1>Diffiniad</h1>
        <p>
          Mae&apos;r meincnodau ar gyfer y dangosydd yma&apos;n gysylltiedig â
          chyfleoedd gweithgarwch corfforol yn yr ysgol ac mewn addysg
          gorfforol. Defnyddiodd y Gweithgor Ymchwil ddata am (1) canran yr
          ysgolion sy&apos;n cynnig cyfleoedd gweithgarwch corfforol (ac eithrio
          AG) i fwyafrif eu disgyblion; (2) canran yr ysgolion gyda digon o
          gyfleusterau/ offer i gefnogi gweithgarwch corfforol a chwaraeon eu
          disgyblion; (3) canran yr ysgolion sydd ag athrawon sy&apos;n ddigon
          hyderus i gyflwyno gwersi AG o safon uchel; (4) canran y plant
          sy&apos;n credu bod gwersi AG a chwaraeon ysgol yn eu helpu i
          fyw&apos;n iach; i neilltuo gradd i&apos;r dangosydd hwn.
        </p>
      </div>

      <div className="section">
        <h1>Y data o arolygon</h1>
        <p>
          Ers 2016, nid oes data cynrychioliadol wedi bod ar gael sy&apos;n rhoi
          gwybod am brofiadau plant o addysg gorfforol na chwaraeon mewn
          ysgolion.
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
              Hefyd, mae Arolwg 2015 yn darparu data gan 914 o gydlynwyr addysg
              gorfforol mewn ysgolion cynradd ac uwchradd yng Nghymru. <br />
              <br />
              Mae cyfanswm o 60% o ysgolion cynradd ac 80% o ysgolion uwchradd
              yn darparu amrywiaeth eang o gyfleoedd chwaraeon a dawns
              allgyrsiol i&apos;w disgyblion i gyd. Mae&apos;r ddarpariaeth hon
              yn cynnwys gweithgareddau iechyd, ffitrwydd a lles, gweithgareddau
              cystadleuol, gweithgareddau creadigol a hefyd gweithgareddau
              anturus. Ar gyfartaledd, mae ysgolion cynradd yn darparu 11 o
              wahanol weithgareddau allgyrsiol i ddisgyblion, ac mae ysgolion
              uwchradd yn darparu 16 o wahanol weithgareddau allgyrsiol. <br />
              <br />
              Dywedodd y staff addysg gorfforol bod 70% o ysgolion cynradd a 62%
              o ysgolion uwchradd yn cytuno bod gan yr ysgol fynediad digonol at
              gyfleusterau i ddarparu chwaraeon, a bod 54% o&apos;r ysgolion
              cynradd a 50% o&apos;r ysgolion uwchradd yn berchen ar
              gyfleusterau chwaraeon o safon digon uchel. Hefyd, roedd 73% o
              ysgolion cynradd a 71% o ysgolion uwchradd yn cytuno bod ganddynt
              fynediad at ddigon o offer i ddarparu addysg gorfforol a chwaraeon
              o safon uchel.
              <br />
              <br />
              <span className="italic bold">
                Dywedodd 77% o ysgolion cynradd ac 85% o ysgolion uwchradd bod
                eu hathrawon yn hyderus i gyflwyno gwersi addysg gorfforol o
                safon uchel yn yr ysgol.
              </span>
              <br />
              <br />O bersbectif y plant, dywedodd 62% o blant (64% o fechgyn a
              60% o ferched) bod gwersi addysg gorfforol a chwaraeon ysgol wedi
              eu helpu i fyw bywyd iach.
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
              Gan nad oes data diweddaredig wedi bod ar gael ers cerdyn cofnodi
              2016, rhoddodd y Gweithgor Ymchwil radd amhendant ar gyfer y
              dangosydd Ysgol.
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
                O ystyried y newidiadau sydd ar ddod i&apos;r cwricwlwm
                sy&apos;n rhoi pwyslais ar iechyd a lles, mae angen gwneud
                ymchwil sy&apos;n gynrychioliadol yn genedlaethol i&apos;r
                dangosydd Ysgol.
              </li>
              <li>
                Mae ymchwil flaenorol i&apos;r maes hwn wedi canolbwyntio ar
                faint o addysg gorfforol a chwaraeon mewn ysgolion sy&apos;n
                cael eu cynnig i blant a phobl ifanc.
              </li>
              <li>
                Yn y dyfodol, dylid ymchwilio i ansawdd addysg gorfforol a
                chwaraeon mewn ysgolion, a dylai&apos;r ymchwil fod yn
                gynrychioliadol yn genedlaethol.
              </li>
              <li>
                At hynny, dylai&apos;r ymchwil nodi ffactorau sy&apos;n
                dylanwadu ar gyfranogiad mewn gweithgarwch corfforol yn yr
                ysgol.
              </li>
              <li>
                Dylai&apos;r ymchwil fynd i&apos;r afael â&apos;r meincnodau
                canlynol a bennwyd gan y Cynghrair Byd-eang ar gyfer Plant
                Egnïol Iach: <br />- % yr ysgolion sydd â pholisïau ysgol egnïol{" "}
                <br />- % yr ysgolion lle mae&apos;r rhan fwyaf (≥ 80%) o&apos;r
                disgyblion yn cael eu haddysgu gan arbenigwr mewn addysg
                gorfforol <br />- % yr ysgolion lle mae&apos;r rhan fwyaf (≥
                80%) o&apos;r disgyblion yn cael addysg gorfforol i&apos;r
                graddau sy&apos;n orfodol <br />- % yr ysgolion lle mae gan yr
                athrawon yr hyder i roi gwersi addysg gorfforol o ansawdd uchel
                % y plant sy&apos;n credu bod gwersi addysg gorfforol a
                chwaraeon yn yr ysgol yn eu helpu i fyw mewn ffordd iach
              </li>
              <li>
                Ystyrir nad yw unigolion sy&apos;n rhoi data hunangofnodedig,
                h.y. y cydgysylltydd addysg gorfforol sy&apos;n rhoi data ar ran
                athrawon ysgol gynradd, yn gynrychioliadol. Fel y cyfryw, dylid
                bod yn ofalus wrth ddadansoddi atebion o&apos;r fath.
              </li>
              <li>
                Dylai ysgolion roi cymaint o gyfleodd â phosibl i ddisgyblion
                symud yn fwy ac eistedd yn llai yn ystod y diwrnod ysgol.
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
            <ul className="indent" aria-label="Chwareon Cymru">
              <li>
                Arolwg ar Chwaraeon Ysgol: Pecyn Adnoddau i Ysgolion &#45;
                <a
                  href="http://sportwales.org.uk/ymchwil-a-pholisi/arolygon-ac-ystadegau/arolwg-ar-chwaraeon-ysgol/defnyddio'r-canlyniadau.aspx?lang=cy&"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Chwareon Cymunedol &#45;
                <a
                  href="http://einsiwrnaiuchelgeisiol.sport.wales/"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>
            <ul className="indent" aria-label="Amrywiol">
              <li>
                Healthy School Scheme Wales &#45;
                <a
                  href="http://www.wales.nhs.uk/sitesplus/888/page/82249"
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
          </div>
        </div>
      </div>

      <div className="wide">
        <Link href="/cy/community">
          <a>
            <div className="card red link nextIndicator">
              <div className="grade grade-e">ang</div>
              <div className="cardTitle red">
                <h6 className="lower">
                  Y Gymuned a&apos;r Amgylchedd Adeiledig
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
                  alt="built environment"
                  layout="fill"
                  objectFit="contain"
                  className="red"
                  src="/icons/builtenviro-icon.svg"
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
