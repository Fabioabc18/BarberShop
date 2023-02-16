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
  console.log(cutz);

  return (
    <main className="pricelist">
      <div>
        <h1> Flexa Barber </h1>
        <img src="/images/001-barber-shop.png" alt="simbolo de barbearia" />
        <hr />
        {cutz.map(service => (
          <section key={service.services_id}>
            {" "}
            {/* prende a a key ID */}
            <h2 className="main_service">{service.service}</h2>{" "}
            {/*  ira dizer nome do serviço */}
            <img className="icons" src={service.icon} alt={service.alt} />
            <ul className="cutz">
              {service.cutz.map(corte => (
                <div key={corte.cut_id}>
                  <li className="service"> {corte.name} </li>
                  <li className="price"> {corte.price}€</li>
                </div>
              ))}
            </ul>
            <hr />
          </section>
        ))}
        <footer>
          <h3>*Flexa Expresso</h3>
          <p>Cliente tem prioridade sob os que estão em espera</p>
          <h3>*Flexa Home</h3>
          <p>Corte ao domicílio até um raio de 70km</p>
          <NavLink className="scheduling" to={"/scheduling"}>
            Agende aqui
          </NavLink>
        </footer>
      </div>
    </main>
  );
}

export default Pricelist;
