import React from "react";
import signatureIcon from "../assets/signature-no-bg.png";
import { Link } from "react-scroll";

function Navbar() {
  const pages = ["about", "portfolio", "contact"];
  // use map
  return (
    <div id="nav" className="navbar">
      <div className="flex-1">
        <button>
          <Link to="landing" smooth={true} duration={750}>
            <img src={signatureIcon} alt="signature" className="h-20 w-20" />
          </Link>
        </button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-slate-300">
          {pages.map((item) => {
            return (
              <li>
                <Link
                  to={item}
                  smooth={true}
                  duration={750}
                  className="hover:scale-90 transition-transform duration-500"
                >
                  {item}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href="../assets/cv-mock.pdf"
              download={"cv-mock.pdf"}
              className="hover:scale-110 transition-transform duration-500 text-white"
            >
              resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
