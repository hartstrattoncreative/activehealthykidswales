import Overlay from "components/Overlay";
import { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <>
      <div className="wide landing indicatorPage">
        <div className="card red indicatorPage">
          <div className="grade grade-e">ang</div>
          <div className="cardTitle red">
            <h6 className="lower light">
              Y Gymuned a&apos;r Amgylchedd Adeiledig
            </h6>
            <span className="ui arrowRight"> </span>
          </div>
          <div className="cardIcon">
            <img
              alt="built environment"
              className="red"
              src="/icons/builtenviro-icon.svg"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <h1>argymhelliad</h1>
        <p>
          Mae dangosydd y Gymuned a&apos;r Amgylchedd Adeiledig yn cyfeirio at
          ddiogelwch ymddangosiadol, mynediad ac argaeledd cyfleusterau a gofod
          sy&apos;n darparu cyfleoedd ar gyfer gweithgarwch corfforol i blant a
          phobl ifanc. Nid oes unrhyw argymhelliad penodol ar gyfer y Gymuned
          a&apos;r Amgylchedd Adeiledig, fodd bynnag, mae ymchwilwyr wedi
          cofnodi perthynas rhwng yr amgylchedd adeiledig a gweithgarwch
          corfforol
          <span className="italic">(Sallis a Glanz, 2006).</span>
        </p>
        <p>
          Defnyddiwyd canran y plant/rhieni sy&apos;n fodlon ar y cyfleusterau
          chwarae sydd ar gael yn eu hardal leol, yn ogystal â chanran y
          plant/rhieni sy&apos;n byw mewn cymdogaeth ddiogel lle y gallant fod
          yn gorfforol egnïol, fel meincnodau ar gyfer graddio&apos;r dangosydd
          hwn.
        </p>
      </div>

      <div className="section">
        <h1>Diffiniad</h1>
        <p>
          Ar gyfer Cardiau Cofnodi 2016, defnyddiodd y Gweithgor Ymchwil ganran
          y plant/rhieni sy&apos;n fodlon ar y cyfleusterau chwarae sydd ar gael
          yn eu hardal leol i roi gradd ar gyfer y dangosydd hwn. Defnyddiwyd yr
          adborth yn dilyn yr ymgynghoriad mwyaf o&apos;i fath yng Nghymru hefyd
          i gynorthwyo â&apos;r broses raddio. Fodd bynnag, ar gyfer Cerdyn
          Cofnodi 2018, roedd y data a oedd ar gael mewn perthynas â&apos;r
          meincnodau hyn yn brin.
        </p>
      </div>

      <div className="section">
        <h1>Y data o arolygon</h1>
        <p>
          Fel rhan o Arolwg Cenedlaethol Cymru (2016/17), gwnaeth un oedolyn
          (16+ oed) ym mhob aelwyd ledled Cymru gymryd rhan mewn cyfweliad wyneb
          yn wyneb. Cynhaliwyd cyfanswm o 10,493 o gyfweliadau. Roedd yr arolwg
          yn cynnwys cwestiynau a addaswyd ar ôl y cyfweliadau yn 2014/15 am
          ddiogelwch canfyddedig, mynediad a&apos;r cyfleusterau a&apos;r mannau
          sydd ar gael i blant a phobl ifanc gymryd rhan mewn gweithgarwch
          corfforol.
        </p>
        <p>
          Yn 2014/15, dangosodd y data fod 54% o rieni â phlentyn rhwng 1 a 10
          oed a 38% o rieni â phlentyn rhwng 11 a 15 oed yn fodlon ar y
          cyfleusterau chwarae yn eu hardal leol. O&apos;r rhieni â phlentyn
          rhwng 1 a 10 oed a oedd yn anfodlon, dywedodd 83% nad oedd digon o
          fannau cyhoeddus addas ar gael yn yr awyr agored i&apos;w plentyn
          chwarae ynddynt, a dywedodd 64% nad oedd digon o fannau addas ar gael
          dan do. Yn ogystal, o&apos;r rhieni â phlentyn rhwng 11 a 15 oed a
          oedd yn anfodlon, dywedodd 77% nad oedd digon o fannau cyhoeddus addas
          ar gael yn yr awyr agored, dywedodd 79% nad oedd digon o fannau
          cyhoeddus ar gael dan do, a dywedodd 64% nad oedd digon o glybiau na
          gweithgareddau&apos;n cael eu trefnu.
          <span className="bold">
            Fodd bynnag, nid oedd cwestiynau i geisio&apos;r wybodaeth hon yn
            rhan o&apos;r cyfweliadau a gynhaliwyd yn 2015/16. O ganlyniad, nid
            oedd data newydd ar gael.
          </span>
        </p>
        <p>
          Yn 2016/2017, roedd data ar gael ar farn oedolion am eu hardal leol,
          ond nid oedd hyn yn ymwneud yn benodol â gweithgarwch corfforol. Pan
          ofynnwyd i bobl feddwl am eu hardal leol fel rhan o Arolwg
          Cenedlaethol Cymru: roedd 72% yn teimlo eu bod yn perthyn; roedd 72%
          yn teimlo bod pobl o wahanol gefndiroedd yn dod ymlaen yn dda â&apos;i
          gilydd; ac roedd 73% yn teimlo bod pobl yn trin ei gilydd â pharch ac
          ystyriaeth. Mae pob un o&apos;r rhain yn is nag yr oeddent yn 2014-15.
        </p>
      </div>

      <Overlay>
        <ol className="dataList">
          <li>
            <span className="dataNumber"> 1 </span>
            <p>
              <span className="underline">
                Mae&apos;r Arolwg Cenedlaethol ar gyfer Cymru (2014/15)
              </span>
              yn cynnal cyfweliadau 25 munud wyneb yn wyneb gydag un oedolyn
              (16+ oed) ym mhob teulu ledled Cymru. Cofnodwyd 14,285 o
              gyfweliadau gyda rhieni plant o ysgolion cynradd ac uwchradd.
              Canfu&apos;r data bod 54% o rieni sydd â phlentyn 1-10 oed a 38% o
              rieni sydd â phlentyn 11-15 oed yn fodlon gyda&apos;r cyfleusterau
              chwarae yn eu hardal leol. O blith y rhieni gyda phlentyn 1-10 oed
              a oedd yn anfodlon, dywedodd 83% bod diffyg llefydd cyhoeddus awyr
              agored addas i&apos;w plentyn chwarae, a dywedodd 64% bod diffyg
              gofod dan do addas. Hefyd, o blith y rhieni gyda phlentyn 11-15
              oed oedd yn anfodlon, dywedodd 77% bod diffyg llefydd cyhoeddus
              addas yn yr awyr agored, roedd 79% yn credu bod diffyg llefydd
              cyhoeddus dan do ac roedd 64% yn credu nad oedd digon o glybiau na
              gweithgareddau trefnus.
            </p>
          </li>
          <li>
            <span className="dataNumber"> 2 </span>
            <p>
              <span className="underline">Beth Nesa? (2015) </span> Rhoi llais i
              blant a phobl ifanc Cymru yn un o&apos;r ymgynghoriadau mwyaf
              o&apos;i fath. Sefydlwyd gan y Comisiynydd Plant ar gyfer Cymru ac
              roedd yr ymgynghoriadau gyda phlant a phobl ifanc (3-18+ oed) yng
              Nghymru, yn ogystal â&apos;u rhieni, yn rhoi adborth ar bedwar
              maes ffocws allweddol yn gysylltiedig â Chonfensiwn y Cenhedloedd
              Unedig ar Hawliau&apos;r Plentyn: Darparu, Amddiffyn, Cyfranogi a
              Hyrwyddo. Dangosodd y data mai ‘mwy o lefydd i chwarae&apos; oedd
              y brif flaenoriaeth (49%) i blant 3-7 oed. Ymhlith y
              blaenoriaethau cyffredin eraill ar gyfer y grŵp oedran hwn roedd
              trechu tlodi (29%), gwella diogelwch plant (28%) a threchu bwlio
              (28%). I blant 7-11 oed, stopio bwlio oedd y brif flaenoriaeth
              (55%). Y ddwy brif flaenoriaeth nesaf ar gyfer y grŵp oedran yma
              oedd helpu plant a theuluoedd mewn tlodi (47%) a gwneud ardaloedd
              lleol yn fwy diogel ar gyfer plant (41%). Y flaenoriaeth fwyaf
              cyffredin (53%) ar gyfer pobl ifanc 11-18 oed oedd trechu bwlio.
              Nododd mwy na 40% o bobl ifanc amddiffyn plant rhag trais a
              cham-drin yn y cartref, mwy o gyfleusterau yn yr ardal leol, a
              help i blant a theuluoedd mewn tlodi fel eu prif flaenoriaethau.
              Ar draws yr holl ddata a gafwyd, nid oedd y blaenoriaethau&apos;n
              amrywio&apos;n sylweddol yn ôl oedran, rhyw na rhanbarth ar gyfer
              yr holl grwpiau oedran.
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
              Yn ystod proses raddio Cerdyn Cofnodi 2018, dim ond rhywfaint o
              ddata cyfoes a oedd ar gael mewn perthynas â&apos;r meincnodau i
              gefnogi gradd ar gyfer y dangosydd hwn. Felly, penderfynodd y
              Gweithgor Ymchwil y dylid rhoi gradd amhendant.
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
                Roedd y radd ar gyfer dangosydd y Gymuned a&apos;r Amgylchedd
                Adeiledig wedi gostwng o B yng Ngherdyn Cofnodi 2014 i C yn
                2016. Ni ellir rhoi gradd ar gyfer Cerdyn Cofnodi 2018.
              </li>
              <li>
                Roedd ychydig iawn neu ddim tystiolaeth gyfoes ar gael ar gyfer
                y dangosydd hwn. Mae angen data, ymchwil ac ymyriadau pellach er
                mwyn lleihau&apos;r rhwystrau i weithgarwch corfforol a chwarae.
              </li>
              <li>
                Gall gwella diogelwch canfyddedig, mynediad a chyfleusterau
                arwain at wella gweithgarwch corfforol, chwarae yn yr awyr
                agored a chwarae egnïol a lleihau amser eisteddol.
              </li>
            </ul>
          </div>
        </div>

        <div className="wide">
          <div className="expand open  blue">
            <h5 className="light blue">Ffynonellau Data</h5>
          </div>
          <div className="expandContent open  sources">
            <ul className="indent" aria-label="Ilywodraeth Cymru">
              <li>
                Arolwg Cenedlaethol ar gyfer Cymru 2014/15 &#45;
                <a
                  href="http://gov.wales/statistics-and-research/national-survey/?tab=current&lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
              </li>
            </ul>
            <ul
              className="indent"
              aria-label="Children's Commissioner for Wales"
            >
              <li>
                Beth Nesa? &#45;
                <a
                  href="http://www.childcomwales.org.uk/wp-content/uploads/2016/04/CYP-FINAL.compressed.pdf"
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
        <Link href="/cy/indicators/government">
          <a>
            <div className="card yellow link nextIndicator">
              <div className="grade grade-c">c+</div>
              <div className="cardTitle yellow">
                <h6 className="lower light">
                  Polisïau, Strategaethau a Buddsoddiadau Cenedlaethol
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
                  alt="government"
                  className="yellow"
                  src="/icons/govt-icon.svg"
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
