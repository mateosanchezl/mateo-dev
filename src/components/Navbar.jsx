import React from "react";
import signatureIcon from "../assets/signature-no-bg.png";
import { Link } from "react-scroll";

function Navbar() {
  const pages = ["about", "portfolio", "contact"];

  return (
    <nav className="flex justify-between items-center w-full fixed top-0 z-50 px-4 bg-opacity-90">
      <div className="shrink-0">
        <button>
          <Link to="landing" smooth={true} duration={750}>
            <img src={signatureIcon} alt="signature" className="h-24 w-24" />
          </Link>
        </button>
      </div>

      {/* Navbar links, aligned according to your design */}
      <ul className="menu menu-horizontal p-0">
        {pages.map((page) => (
          <li key={page}>
            <Link
              to={page}
              smooth={true}
              duration={750}
              className="hover:scale-90 transition-transform duration-500 text-slate-300"
            >
              {page}
            </Link>
          </li>
        ))}
        <li>
          <a
            href={"../assets/cv-doc.docx"}
            download="mateo-sanchez-cv.docx"
            className="hover:scale-110 transition-transform duration-500 text-white"
          >
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
