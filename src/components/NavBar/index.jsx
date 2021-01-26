import React from "react";
import "./styles.scss";
import { Link } from "gatsby";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Link
        to="/"
        className="nav-bar__path "
        activeStyle={{ backgroundColor: "black", color: "white" }}
      >
        Home
      </Link>
      <Link
        to="/portfolio/"
        className="nav-bar__path"
        activeStyle={{ backgroundColor: "black", color: "white" }}
      >
        Portfolio
      </Link>
      <Link
        to="/about/"
        className="nav-bar__path"
        activeStyle={{ backgroundColor: "black", color: "white" }}
      >
        About
      </Link>
      <Link
        to="/contact/"
        className="nav-bar__path"
        activeStyle={{ backgroundColor: "black", color: "white" }}
      >
        Contact
      </Link>
    </div>
  );
}
