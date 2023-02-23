import React, { useState, useEffect } from "react";
import "./scheduling.css";

function Scheduling() {
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
  return (
    <div className="form-container">
      <div className="image">
        <img src="/images/localizacao.JPG" alt="imagem exterior da barbearia" />
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Scheduling;
