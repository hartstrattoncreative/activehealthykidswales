import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card red indicatorPage">
          <div className="grade grade-f">f</div>
          <div className="cardTitle red">
            <h6 className="lower light">Ymddygiad Eisteddol</h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <img
              alt="sedentary"
              className="red"
              src="/icons/sedentary-icon.svg"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>argymhelliad</h1>
        <p>
          Mae ymddygiad eisteddol yn gysylltiedig â chanlyniadau iechyd gwaeth,
          megis diabetes math II, clefydau cardiofetabolig a marwolaeth o bob
          achos, ni waeth beth yw lefel gweithgarwch corfforol unigolyn. Yn
          syml, mae hyn yn golygu po hiraf y bydd person yn eistedd, lleiaf y
          bydd yn byw. Mae plant a phobl ifanc yn treulio llawer iawn o&apos;u
          diwrnod yn eistedd; yn eistedd tra&apos;u bod yn yr ysgol (e.e. yn
          ystod gwersi neu egwyliau ac ati), yn teithio mewn ffordd nad
          yw&apos;n egnïol (e.e. ar fws neu mewn car ac ati), yn eistedd yn
          ystod amser hamdden (e.e. gwylio teledu neu chwarae gemau fideo ac
          ati). Mae astudiaethau cynharach wedi dangos bod canlyniadau iechyd
          corfforol a seicogymdeithasol plant a phobl ifanc sy&apos;n treulio
          llai na dwy awr yn eistedd yn well.
        </p>
        <p>
          Mae Sefydliad y Galon ym Mhrydain wedi crynhoi argymhellion
          rhyngwladol o UDA, Awstralia a&apos;r Deyrnas Unedig. Yr argymhelliad
          ar gyfer faint o amser ddylai plant a phobl ifanc ei dreulio&apos;n
          <a
            className="textLink"
            href="http://www.bhfactive.org.uk/files/525/sedentary_evidence_briefing.pdf"
            target="_blank"
            rel="noreferrer"
          >
            eistedd yn ystod eu hamser hamdden yw dim llai na 2 awr y dydd.
          </a>
        </p>
        <p>
          Hefyd, mae canllawiau o Awstralia&apos;n awgrymu na ddylai babanod,
          plant bach na
          <a
            className="textLink"
            href="http://www.health.gov.au/internet/main/publishing.nsf/content/health-pubhlth-strateg-phys-act-guidelines#npa05"
            target="_blank"
            rel="noreferrer"
          >
            plant bach na phlant cyn oedran ysgol fod yn eisteddol, cael eu
            ffrwyno na&apos;u cadw&apos;n anweithredol am fwy nag awr y dydd
          </a>
          ar wahân i&apos;r amser pan maent yn cysgu.
        </p>
      </div>

      <div className="section">
        <h1>Diffiniad</h1>
        <p>
          Y meincnod a ddefnyddiwyd gan y Gweithgor Ymchwil i roi gradd ar gyfer
          y dangosydd hwn oedd &apos;canran y bobl ifanc sy&apos;n treulio mwy o
          amser yn eistedd na&apos;r hyn a argymhellir yn y canllawiau (h.y. dwy
          awr neu fwy)&apos;. Defnyddiwyd data ar ymddygiad eisteddol, megis yr
          amser sy&apos;n cael ei dreulio&apos;n eistedd yn ystod yr wythnos ac
          ar benwythnosau y tu allan i oriau ysgol.
        </p>
      </div>

      <div className="section">
        <h1>Y data o arolygon</h1>
        <p>
          Defnyddiwyd ffynhonnell ddata genedlaethol gynrychioliadol gan y
          Gweithgor Ymchwil i bennu gradd ar gyfer ymddygiad eisteddol.
        </p>
        <p>
          <span className="bold">1. </span>Fel rhan o Arolwg Iechyd a Lles
          Myfyrwyr y Rhwydwaith Ymchwil Iechyd Ysgolion (2017), casglwyd data ar
          ymddygiad eisteddol a hunangofnodwyd gan 112,054 o blant rhwng 11 a 17
          oed. Yn yr arolwg, a anfonwyd i 193 o ysgolion yng Nghymru, gofynnwyd
          i bobl ifanc faint o amser roeddent yn treulio&apos;n eistedd y tu
          allan i oriau&apos;r ysgol. Gofynnwyd i&apos;r bobl ifanc hefyd roi
          ateb ar gyfer diwrnodau&apos;r wythnos yn ogystal â phenwythnosau.
        </p>
        <p>
          Dangosodd yr arolwg fod 81% o bobl ifanc yn treulio dwy awr neu fwy yn
          eistedd yn ystod yr wythnos. Roedd cyfran uwch o fechgyn (82%) na
          merched (80%) yn gwneud hyn. Wrth gymharu grwpiau oedran, roedd y
          gyfran yn uwch ymhlith grwpiau oedran hŷn (14 oed a throsodd), gydag
          88% yn dweud eu bod yn treulio dwy awr neu fwy yn eistedd yn ystod yr
          wythnos o gymharu â chyfoedion iau (75%). Roedd cyfran y bobl ifanc
          nad ydynt yn dilyn y canllawiau yn wahanol ar draws grwpiau ethnig
          (78% o bobl dduon a lleiafrifoedd ethnig ac 81% o bobl wynion).
        </p>
        <p>
          O gymharu â diwrnodau&apos;r wythnos, dangosodd yr arolwg fod cyfran
          hyd yn oed yn fwy o bobl ifanc yn treulio amser yn eistedd ar
          benwythnosau, gydag 88% ohonynt yn dweud eu bod yn treulio dwy awr neu
          fwy yn eistedd. Ni nodwyd gwahaniaeth rhwng y rhywiau (88% yn y ddwy
          ryw). Yn debyg i ddata ar ddiwrnodau&apos;r wythnos, nid oedd cyfran
          uwch o bobl ifanc 14 oed a throsodd yn dilyn y canllawiau (92% o
          gymharu ag 84%). Roedd gwahaniaeth rhwng grwpiau ethnig; gydag 88% o
          bobl wynion ac 86% o bobl dduon a lleiafrifoedd ethnig yn dweud eu bod
          yn treulio dwy awr neu fwy yn eistedd.
        </p>
        <br />
        <p>
          <span className="bold">2. </span> Fel rhan o Arolwg Cenedlaethol Cymru
          (2016-17), gofynnwyd i rieni/gofalwyr plant rhwng 3 a 17 oed nodi am
          faint o amser roedd eu plentyn yn egnïol ar bob diwrnod yn ystod y
          saith diwrnod blaenorol. Dywedwyd wrth y rhieni y dylent ystyried
          gweithgareddau a oedd yn gwneud i&apos;w plentyn deimlo&apos;n gynnes
          neu golli eu gwynt o leiaf, ac y gallai&apos;r gweithgareddau hyn
          gynnwys cymryd rhan mewn chwaraeon, seiclo, rhedeg neu gerdded yn
          gyflym naill ai yn yr ysgol, y tu allan i&apos;r ysgol, gyda chlwb,
          gyda ffrindiau neu ar eu pen eu hunain. Dangosodd canlyniadau&apos;r
          arolwg fod 81% o blant yn treulio o leiaf ddwy awr o flaen sgrîn (yn
          defnyddio dyfeisiau electronig neu&apos;n gwylio teledu) ar ddiwrnod
          arferol yn ystod yr wythnos a bod mwy na 92% yn treulio o leiaf ddwy
          awr o flaen sgrîn ar ddiwrnod dros y penwythnos. Roedd plant yn
          treulio mwy o amser o flaen sgrin wrth fynd yn hŷn.
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
                Mae&apos;r Arolwg Ymddygiad Iechyd Plant Oed Ysgol (2013/14)
              </span>
              ar 9,055 o blant a phobl ifanc 11-16 oed mewn ysgolion uwchradd yn
              darparu data am ganran y plant a&apos;r bobl ifanc sy&apos;n
              treulio 2 neu fwy o oriau y dydd yn ymddwyn yn eisteddol.
            </p>
            <p>
              Ar ddiwrnod yn ystod yr wythnos, treuliodd 53% o blant a phobl
              ifanc 2+ awr y dydd yn chwarae gemau ar ddyfais electronig,
              treuliodd 64% 2+ awr y dydd yn defnyddio dyfais electronig at
              ddibenion ar wahân i chwarae gemau, a threuliodd 68% 2+ awr y dydd
              yn gwylio adloniant ar sgrin. Yn ystod y penwythnos, cynyddodd
              cyfran y plant a&apos;r bobl ifanc oedd yn treulio 2+ awr y dydd
              yn chwarae gemau ar ddyfais electronig i 65%, y ganran yn
              defnyddio dyfais electronig at ddibenion ar wahân i chwarae gemau
              i 71%, a&apos;r ganran yn gwylio adloniant ar sgrin i 80%.
            </p>
            <p>
              Yn ystod yr wythnos, treuliodd cyfran fwy o fechgyn 2 awr neu fwy
              y dydd yn chwarae gemau ar ddyfais electronig ac yn gwylio
              adloniant ar sgrin o gymharu â merched. Treuliodd y merched ar y
              llaw arall fwy na 2 awr y dydd yn defnyddio dyfais electronig at
              ddibenion ar wahân i chwarae gemau. Yn ystod y penwythnos, roedd y
              gwahaniaethau rhwng y rhywiau o ran y gyfran a oedd yn chwarae
              gemau ar ddyfais electronig ac yn defnyddio dyfais electronig at
              ddibenion ar wahân i chwarae gemau yr un fath ag ar
              ddyddiau&apos;r wythnos. Ond roedd cyfrannau tebyg o fechgyn a
              merched yn treulio mwy na 2 awr y dydd yn gwylio adloniant ar
              sgrin.
            </p>
            <p>
              Roedd y canfyddiadau ar gyfer dyddiau&apos;r wythnos a&apos;r
              penwythnos yn gyson ar draws pob statws economaidd-gymdeithasol ac
              roedd y canfyddiadau ar gyfer chwarae gemau ar ddyfais electronig
              yn debyg ar draws y grwpiau oedran. Cynyddodd y defnydd o ddyfais
              electronig at ddibenion ar wahân i chwarae gemau a gwylio
              adloniant gydag oedran ar gyfer y bechgyn a&apos;r merched.
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
              Penderfynodd y Gweithgor Ymchwil roi gradd o F i&apos;r categori
              hwn, gan mai dim ond rhwng 12% a 19% oedd cyfran y bobl ifanc nad
              oeddent yn treulio llawer o amser yn eistedd ar ôl ystyried data
              ar ddiwrnodau&apos;r wythnos a phenwythnosau. Mae&apos;r radd hon
              wedi newid o gerdyn cofnodi Plant Egnïol Iach 2016, a benderfynodd
              ar radd D-. Mae&apos;n bwysig nodi bod y cwestiynau a ddefnyddiwyd
              ar gyfer dangosyddion ymddygiad eisteddol 2016 a 2018 yn wahanol,
              gydag un cwestiwn yn casglu data ar bob math o ymddygiad eisteddol
              yn 2018 (h.y. pob gweithgaredd eisteddol).
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
                Fel rhan o Arolwg Iechyd a Lles Myfyrwyr y Rhwydwaith Ymchwil
                Iechyd Ysgolion, defnyddiwyd dulliau hunangofnodi i gasglu data
                ar ymddygiad eisteddol. Mae astudiaethau dilysu wedi dangos bod
                pobl ifanc yn goramcangyfrif gweithgarwch wrth gwblhau arolygon
                i fesur gweithgarwch corfforol.
              </li>
              <li>
                Nid oes astudiaethau yn cael eu cynnal ar raddfa fawr yn y DU
                sy&apos;n mesur ymddygiad eisteddol yn wrthrychol, er
                enghraifft, gan ddefnyddio mesurydd cyflymu.
              </li>
              <li>
                Ychydig iawn o ymchwil sydd ar gael ar gyfer plant dan 11 oed.
                Mae angen mynd i&apos;r afael â hyn drwy ddulliau casglu data
                cadarn a systematig.
              </li>
              <li>
                Mae angen meintoli effaith ymyriadau i leihau faint o amser
                sy&apos;n cael ei dreulio&apos;n eistedd.
              </li>
              <li>
                Mae&apos;r dystiolaeth orau sydd ar gael yn dangos bod angen
                i&apos;r rhan fwyaf o blant a phobl ifanc yng Nghymru leihau
                faint o amser y maent yn eu treulio&apos;n eistedd.
              </li>
              <li>
                Mae angen gwneud ymdrech sylweddol i fynd i&apos;r afael â lefel
                uchel iawn o ymddygiad eisteddol ymhlith pobl ifanc yng Nghymru.
                Er mwyn llywio cynllun strategaethau effeithiol, yn gyntaf, mae
                angen cynhyrchu tystiolaeth o ansawdd uchel gan ddefnyddio
                mesurau gwrthrychol a chasglu gwybodaeth ar yr un pryd am yr
                amgylchiadau (e.e. amser ysgol, amser hamdden ac ati), y math
                (e.e. eistedd wrth ddefnyddio&apos;r ffôn) a chyd-destun
                ymddygiadau eisteddol.
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
                  href="http://playwales.org.uk/eng/playingout"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                5 x 60 &#45;
                <a href="http://sport.wales/community-sport/education/5x60.aspx">
                  link
                </a>
              </li>
              <li>
                Aml-Sgiliau a Champau&apos;r Ddraig &#45;
                <a href="http://sport.wales/community-sport/education/dragon-multi-skills--sport.aspx">
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Iechyd Cyhoeddus Cymru">
              <li>
                Bod yn egnïol yn 2016 &#45;
                <a href="http://www.bhfactive.org.uk/resources-and- publications-item/40/328/home">
                  link
                </a>
              </li>
            </ul>

            <ul className="indent" aria-label="Sefydliad Prydeinig y Galon">
              <li>
                Sedentary behaviour evidence briefing &#45;
                <a
                  href="http://www.bhfactive.org.uk/resources-and- publications-item/40/328/home"
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
                  href="http://www.nhs.uk/Livewell/fitness/Pages/Activelifestyle.aspx"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Newid Am Oes Cymru &#45;
                <a
                  href="http://change4lifewales.org.uk/families/active_minutes/?lang=en"
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
                Ar Eich Traed Brydain &#45;
                <a
                  href="https://getbritainstanding.org/onyourfeet-britain"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
              <li>
                Prosiect UP4FUN i leihau ymddygiad segur &#45;
                <a
                  href="http://www.worldobesity.org/site_media/uploads/UP4FUN_Implementation_report.pdf"
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
            <ul className="indent" aria-label="llywodraeth Cymru">
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
            </ul>
          </div>
        </div>
      </div>

      <div className="wide">
        <Link href="/cy/physical-literacy">
          <a>
            <div className="card red link nextIndicator">
              <div className="grade grade-e">ang</div>
              <div className="cardTitle red">
                <h6 className="lower light">
                  Llythrennedd Corfforol
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
                  alt="physical literacy"
                  className="red"
                  src="/icons/physlit-icon.svg"
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
