import React from 'react'
import './menu.css'

function Menu({open, setMenu}) {
    return (
      <div className={"menu " + (open && "active")}>
        <ul>
          <li onClick={() => setMenu(false)}>
            <a href="#home">Home Page</a>
          </li>
          <li onClick={() => setMenu(false)}>
            <a href="#about">About Me</a>
          </li>
          <li onClick={() => setMenu(false)}>
            <a href="#port">My Projects / Portfolio</a>
          </li>
          <li onClick={() => setMenu(false)}>
            <a href="#skills">Skills and Certificates</a>
          </li>
          <li onClick={() => setMenu(false)}>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    );
}

export default Menu
