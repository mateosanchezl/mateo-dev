import React from "react";
import { Link } from "react-scroll";

function Arrow({ direction, to }) {
  return (
    <>
      {direction == "up" ? (
        <button className="hover:scale-110 transition-transform duration-500">
          <Link
            to={to}
            smooth={true}
            duration={750}
            className="hover:scale-90 transition-transform duration-500"
          >
            <svg
              width="48"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                fill="white"
                d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"
              />
            </svg>
          </Link>
        </button>
      ) : (
        <button className="hover:scale-110 transition-transform duration-500">
          <Link
            to={to}
            smooth={true}
            duration={750}
            className="hover:scale-90 transition-transform duration-500"
          >
            <svg
              width="48"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                fill="white"
                d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"
              />
            </svg>
          </Link>
        </button>
      )}
    </>
  );
}

export default Arrow;
