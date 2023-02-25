import React, { useState, useEffect } from "react";
import "./contacts.css";

function Contacts() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    selectedService: "",
    selectedCut: "",
    comments: "",
  });

  useEffect(() => {
    fetch("/api/pricelist.json")
      .then(response => response.json())
      .then(data => setServices(data));
  }, []);

  const [services, setServices] = useState([]);
  const [showAddress, setShowAddress] = useState(false);

  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    comments,
    selectedService,
    selectedCut,
  } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = e => {
    setFormData({
      ...formData,
      selectedService: e.target.value,
      selectedCut: "",
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    alert("Recebemos a informação, entraremos em contato");
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      comments: "",
      selectedService: "",
      selectedCut: "",
    });
  };

  const handleAddressClick = () => {
    setShowAddress(!showAddress);
  };

  return (
    <div className="form-container">
      <div className="image" onClick={handleAddressClick}>
        <img
          src="/images/localizacao.JPG"
          alt="imagem exterior da barbearia"
          title="Carrega sobre a imagem"
        />

        {showAddress && (
          <p className="adress">
            <strong>Morada:</strong>
            <a
              href="https://www.google.com/maps/place/Estrada+das+%C3%81guas+Livres/@38.7656732,-9.2515339,3a,86.3y,280.15h,83.51t/data=!3m6!1e1!3m4!1sWTYSi9bVgUhnhFCrCY67qw!2e0!7i16384!8i8192!4m6!3m5!1s0xd1ecd4f5804cd8f:0xa21df2e95bcdcafe!8m2!3d38.7656656!4d-9.2516695!16s%2Fg%2F11k0l_tysg?hl=pt-PT"
              target="_blank"
              rel="noreferrer"
            >
              Estrada Águas Livres 19C, 2745-016 Queluz
            </a>
          </p>
        )}
      </div>
      <div className="form-wraper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="Primeiro Nome"
            aria-label="Primeiro Nome"
            value={firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Último Nome"
            aria-label="Último Nome"
            value={lastName}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Nº Telemóvel"
            aria-label="Nº Telemóvel"
            value={phoneNumber}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            value={email}
            onChange={handleChange}
            required
          />
          <label htmlFor="service">Serviço:</label>
          <select
            id="service"
            name="selectedService"
            value={selectedService}
            onChange={handleServiceChange}
            required
          >
            <option value="">-- Seleciona um serviço --</option>
            {services.map(service => (
              <option key={service.services_id} value={service.service}>
                {service.service}
              </option>
            ))}
          </select>
          {selectedService && (
            <div>
              <label htmlFor="cut">Corte:</label>
              <select
                id="cut"
                name="selectedCut"
                value={selectedCut}
                onChange={handleChange}
                required
              >
                <option value="">-- Seleciona o corte --</option>
                {services
                  .find(service => service.service === selectedService)
                  .cutz.map(cut => (
                    <option key={cut.cut_id} value={cut.name}>
                      {cut.name} ({cut.price}€)
                    </option>
                  ))}
              </select>
            </div>
          )}
          <textarea
            type="text"
            name="comments"
            placeholder="Comentário"
            aria-label="Comentário"
            value={comments}
            onChange={handleChange}
          />
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
      <div className="opening-hours">
        <h2>Horário</h2>
        <p>
          <strong>Segunda - Sábado:</strong> 9:00h-13h // 14h-20h
          <strong>Domingo:</strong> Fechado
        </p>
      </div>
    </div>
  );
}

export default Contacts;
