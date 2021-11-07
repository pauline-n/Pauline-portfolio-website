import React from 'react'
import './menu.css'

function Menu({open, setMenu}) {
    return (
      <div className={"menu " + (open && "active")}>
        <ul className="men">
          <li onClick={() => setMenu(false)} className="new">
            <a href="#home">Home Page</a>
          </li>
          <li onClick={() => setMenu(false)} className="new">
            <a href="#about">About Me</a>
          </li>
          <li onClick={() => setMenu(false)} className="new">
            <a href="#port">My Projects / Portfolio</a>
          </li>
          <li onClick={() => setMenu(false)} className="new">
            <a href="#skills">Skills and Certificates</a>
          </li>
          <li onClick={() => setMenu(false)} className="new">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    );
}

export default Menu
