import React from "react";
import "./topbar.css";
import logo from "../../images/logo4.png";

function TopBar({open, setMenu}) {
  return (
    <div className={"topbar " + (open && "active")}>
      <a href="#home">
        <img src={logo} alt="my logo" width="200" height="90" />
      </a>
      <div className="right">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#port">My Projects</a>
          </li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
        <div
          className="humberger"
          onClick={() => {
            setMenu(!open);
          }}
        >
          <span className="line 1"></span>
          <span className="line 2"></span>
          <span className="line 3"></span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
