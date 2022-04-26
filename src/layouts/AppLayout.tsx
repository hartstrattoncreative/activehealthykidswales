import Link from "next/link";
import clsx from "clsx";
import * as React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import AHKWLogo from "../../public/images/ahkw_logo.svg";

const AppLayout: React.FC = (props) => {
  const { children } = props;
  const router = useRouter();
  const [navOpen, setNavOpen] = React.useState(false);
  const [lang, setLang] = React.useState(
    router.asPath.includes("/cy") ? "cy" : "en"
  );

  const handleClick = () => setNavOpen((current) => !current);
  const handleLangToggle = (e: React.MouseEvent) => {
    const lang = (e.target as HTMLElement).dataset.lang;
    setLang(lang as string);

    if (lang === "cy") {
      if (!router.asPath.includes("/cy")) {
        router.push(`/cy${router.asPath}`);
      }
    } else {
      if (router.asPath === "/cy") {
        router.push(router.asPath.replace("/cy", "/"));
      } else {
        router.push(router.asPath.replace("/cy", ""));
      }
    }
  };

  const handleBackToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  React.useEffect(() => {
    if (navigator.language.includes("cy") && !router.asPath.includes("/cy")) {
      router.push(`/cy${router.asPath}`);
      setLang("cy");
    }

    const handleRouteChange = () => setNavOpen(false);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <nav className={clsx(navOpen && "is-active")}>
        <div className="menuContent">
          <div className="column navColumn">
            {lang === "cy" && (
              <>
                <Link href="/cy/home">
                  <a>Hafan</a>
                </Link>
                <Link href="/cy/report-card">
                  <a>Cardiau Cofnodi</a>
                </Link>
                <Link href="/cy/about">
                  <a>Amdanom Ni</a>
                </Link>
              </>
            )}
            {lang === "en" && (
              <>
                <Link href="/">
                  <a>Home</a>
                </Link>
                <Link href="/report-card">
                  <a>Report Card</a>
                </Link>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </>
            )}
          </div>
          {/* <div className="column mapColumn">
            <Link href="/maps/swanlinx/home">
              <a target="_blank">Swanlinx Map</a>
            </Link>
            <Link href="/maps/dc/home">
              <a target="_blank">Dragon Challenge Map</a>
            </Link>
          </div> */}
        </div>
        <div className="socialContent">
          <div className="twitterWrapper">
            <a
              className="social twitter"
              href="https://twitter.com/AHK_Wales"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
        </div>
      </nav>
      <div className="container rc">
        <header className={clsx("wide", navOpen && "fixed")}>
          <button
            onClick={handleClick}
            className={clsx(
              "hamburger",
              "hamburger--spin",
              navOpen && "is-active"
            )}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
            <span
              className={clsx(
                "hamburger-label",
                "menu",
                !navOpen && "is-active"
              )}
            >
              {lang === "en" ? "menu" : "Dewislen"}
            </span>
            <span
              className={clsx(
                "hamburger-label",
                "close",
                navOpen && "is-active"
              )}
            >
              {lang === "en" ? "close" : "Cau"}
            </span>
          </button>
          <Link href={lang === "cy" ? "/cy" : "/"}>
            <a>
              <div className="logo">
                <img
                  src={AHKWLogo.src}
                  alt="Active Healthy Kids Wales logo"
                  width={100}
                  height={80}
                />
              </div>
            </a>
          </Link>
          <div className="langSetting header">
            <a
              className={clsx("en", lang === "en" && "is-active")}
              onClick={handleLangToggle}
              data-lang="en"
            >
              en
            </a>
            <a
              className={clsx("cy", lang === "cy" && "is-active")}
              onClick={handleLangToggle}
              data-lang="cy"
            >
              cy
            </a>
          </div>
        </header>
        <main>{children}</main>
        <div className="wide">
          <a
            href="https://twitter.com/hashtag/AHKWales?src=hash"
            target="_blank"
            rel="noreferrer"
          >
            <div className="twitterHashtag teal">
              <h6 className="lower light teal">&#35;AHKWales</h6>
            </div>
          </a>
        </div>
        <div className="preFooter-nav wide">
          <div className="menuContent">
            <div className="column navColumn">
              {lang === "cy" && (
                <>
                  <Link href="/cy/home">
                    <a>Hafan</a>
                  </Link>
                  <Link href="/cy/report-card">
                    <a>Cardiau Cofnodi</a>
                  </Link>
                  <Link href="/cy/about">
                    <a>Amdanom Ni</a>
                  </Link>
                </>
              )}
              {lang === "en" && (
                <>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <Link href="/report-card">
                    <a>Report Card</a>
                  </Link>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </>
              )}
            </div>
            {/* <div className="column mapColumn">
              <Link href="/maps/swanlinx/home">
                <a target="_blank">Swanlinx Map</a>
              </Link>
              <Link href="/maps/dc/home">
                <a target="_blank">Dragon Challenge Map</a>
              </Link>
            </div> */}
          </div>
        </div>
        <footer className="wide">
          <div className="footerInfo">
            <i className="fa fa-copyright" aria-hidden="true"></i>
            <span className="copyright">
              copyright {new Date().getFullYear()} &#124;{" "}
            </span>
            <span className="siteBy">
              site by{" "}
              <a href="http://hsc.studio" target="_blank" rel="noreferrer">
                hsc
              </a>
            </span>
          </div>
          <div className="ui-BackToTop" onClick={handleBackToTop}>
            <span>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="18.47px"
                height="58.904px"
                viewBox="0 0 18.47 58.904"
                enableBackground="new 0 0 18.47 58.904"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    fill="#299ad6"
                    d="M9.919,0.3c-0.376-0.4-0.993-0.4-1.369,0L0.21,9.342c-0.376,0.4-0.234,0.896,0.315,0.896h6.709
                                c0.55,0,1.334,0.116,1.334,0.666v47c0,0.55,0.45,1,1,1l0,0c0.55,0,1-0.45,1-1v-47c0-0.55,0.116-0.666,0.666-0.666h6.709
                                c0.55,0,0.692-0.495,0.315-0.896L9.919,0.3z"
                  />
                </g>
              </svg>
            </span>
            <div className="ui-content">
              {lang === "en" ? "back to top" : "Yn ôl i'r top"}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AppLayout;
