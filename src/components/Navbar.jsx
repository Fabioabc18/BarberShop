import React from "react";

function Navbar() {
  return (
    <main>
      <header></header>

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
    </main>
  );
}

export default Navbar;
