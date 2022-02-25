import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import * as React from "react";
import AHKWLogo from "../../public/images/ahkw_logo.svg";
import { useRouter } from "next/router";

const AppLayout: React.FC = (props) => {
  const { children } = props;
  const router = useRouter();
  const [navOpen, setNavOpen] = React.useState(false);
  const handleClick = () => setNavOpen((current) => !current);

  React.useEffect(() => {
    const handleRouteChange = () => setNavOpen(false);

    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <nav className={clsx(navOpen && "is-active")}>
        <div className="menuContent">
          <div className="column navColumn">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/report-card">
              <a>Report Cards</a>
            </Link>
            <Link href="about">
              <a>About</a>
            </Link>
          </div>
          <div className="column mapColumn">
            <Link href="/maps/swanlinx/home">
              <a target="_blank">Swanlinx Map</a>
            </Link>
            <Link href="/maps/dc/home">
              <a target="_blank">Dragon Challenge Map</a>
            </Link>
          </div>
        </div>
        <div className="socialContent">
          <div className="twitterWrapper">
            <a
              className="social twitter fa fa-twitter fa-3x"
              href="https://twitter.com/AHK_Wales"
              target="_blank"
              rel="noreferrer"
            ></a>
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
              menu
            </span>
            <span
              className={clsx(
                "hamburger-label",
                "close",
                navOpen && "is-active"
              )}
            >
              close
            </span>
          </button>
          <Link href="/">
            <a>
              <div className="logo">
                <Image
                  src={AHKWLogo.src}
                  layout="fixed"
                  alt="Active Healthy Kids Wales logo"
                  width={100}
                  height={80}
                />
              </div>
            </a>
          </Link>
          <div className="langSetting header">
            <a className="en is-active">en</a> <a className="cy">cy</a>
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
              <Link href="/cy/home">
                <a>Hafan</a>
              </Link>
              <Link href="/cy/home">
                <a>Cardiau Cofnodi</a>
              </Link>
              <Link href="/cy/about">
                <a>Amdanom Ni</a>
              </Link>
            </div>
            <div className="column mapColumn">
              <Link href="/maps/swanlinx/home">
                <a target="_blank">Swanlinx Map</a>
              </Link>
              <Link href="/maps/dc/home">
                <a target="_blank">Dragon Challenge Map</a>
              </Link>
            </div>
          </div>
        </div>
        <footer className="wide">
          <div className="footerInfo">
            <i className="fa fa-copyright" aria-hidden="true"></i>
            <span className="copyright"> copyright 2016 &#124; </span>
            <span className="siteBy">
              site by
              <a
                href="http://geoshepherds.com"
                target="_blank"
                rel="noreferrer"
              >
                geoshepherds
              </a>
            </span>
          </div>
          <div className="ui-BackToTop">
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
            <div className="ui-content">back to top</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AppLayout;
