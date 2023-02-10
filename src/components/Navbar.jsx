import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../navBarData";
import "./navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? "hamburger" : ""}>
      <header className={`header ${show ? "hamburguer" : ""}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          {" "}
          {/* p /mostrar a side bar */}
          <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : ""}`}></i>
          <h1 className="title">Flexa Barber</h1>
          <p>More then a barber</p>
        </div>
      </header>
      <aside className={`sidebar ${show ? "show" : ""}`}>
        <nav className="nav">
          <ul>
            {links.map(({ icon, path, id, name }) => (
              <li key={id}>
                <NavLink className="nav-path" to={path}>
                  <i className="nav-icon">{icon}</i>
                  <span>{name}</span>
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                className="nav-path"
                to="https://www.instagram.com/flexa_barber3/"
                target="_blank"
              >
                <i className="nav-icon fa-brands fa-instagram"></i>
                <span> Instagram </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </main>
  );
}

export default Navbar;
