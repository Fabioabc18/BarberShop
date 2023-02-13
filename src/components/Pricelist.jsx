import React, { useEffect, useState } from "react";
import "./pricelist.css";

function Pricelist(props) {
  const [cutz, setCutz] = useState([]);

  useEffect(() => {
    fetch("/api/pricelist.json")
      .then(response => response.json())
      .then(data => setCutz(data));
  }, []);

  return (
    <main id="services">
      <div>
        <h1> Flexa Barber </h1>
        <img src="/images.PL-barber-shop.png" alt="" />
        <hr />
        {cutz.map(service => (
          <section key={service.services_id}>
            {" "}
            {/* prende a a key ID */}
            <h2>{service.service}</h2> {/*  ira dizer nome do serviço */}
            <img src={service.icon} alt="" />
            <hr />
            <ul>
              {service.cutz.map(corte => (
                <div key={corte.cut_id}>
                  <li> {corte.name} </li>
                  <li> {corte.price}€</li>
                </div>
              ))}
            </ul>
            <hr />
            <footer></footer>
          </section>
        ))}
      </div>
    </main>
  );
}

export default Pricelist;
