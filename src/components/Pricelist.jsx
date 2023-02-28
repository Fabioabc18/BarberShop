import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./pricelist.css";

function Pricelist() {
  const [cutz, setCutz] = useState([]);

  useEffect(() => {
    fetch("/api/pricelist.json")
      .then(response => response.json())
      .then(data => setCutz(data));
  }, []);

  return (
    <main className="pricelist">
      <div className="header-price">
        <img src="/images/001-barber-shop.png" alt="" />
        <hr />
        {cutz.map(service => (
          <section key={service.services_id}>
            <h2 className="main_service">{service.service}</h2>
            <img className="icons" src={service.icon} alt={service.alt} />
            <ul className="cutz">
              {service.cutz.map(corte => (
                <div className="teste" key={corte.cut_id}>
                  <li className="service"> {corte.name} </li>
                  <li className="price"> {corte.price}€</li>
                </div>
              ))}
            </ul>
            <hr />
          </section>
        ))}
        <footer className="footer">
          <h3>*Flexa Expresso</h3>
          <p>Cliente tem prioridade sob os que estão em espera</p>
          <h3>*Flexa Home</h3>
          <p>Corte ao domicílio até um raio de 70km</p>
          <NavLink className="contacts" to={"/contacts"}>
            Agende aqui
          </NavLink>
        </footer>
      </div>
    </main>
  );
}

export default Pricelist;
