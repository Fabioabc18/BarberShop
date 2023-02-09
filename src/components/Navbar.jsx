import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../navBarData";

function Navbar() {
  /* const [show, setShow] = useState(); */

  return (
    <main>
      <header className="header">
        <div>
          <i class="fas fa-bars"></i>
          <i class="fa-solid fa-xmark"></i>
          <h1 className="title">Flexa Barber</h1>
          <p>More then a barber</p>
        </div>
      </header>
      <aside>
        <nav className="navbar">
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
