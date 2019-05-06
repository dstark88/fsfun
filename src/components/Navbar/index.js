import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Juliette's Beer Cooler
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/beer"
              className={window.location.pathname === "/beer" ? "nav-link active" : "nav-link"}
            >
              Beer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
