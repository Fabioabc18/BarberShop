import React, { useEffect, useState } from "react";
import "./gallery.css";

function Gallery() {
  const [image, setImage] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [famousModal, setFamousModal] = useState(false);
  const [entryModal, setEntryModal] = useState(true);
  const [selectedFamous, setSelectedFamous] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [clientModal, setClientModal] = useState(false);

  const closeModal = () => {
    setFamousModal(false);
    setClientModal(false);
  };

  const prevImage = () => {
    setSelectedClient(
      selectedClient === 0 ? photo.length - 1 : selectedClient - 1
    );
  };

  const nextImage = () => {
    setSelectedClient(
      selectedClient === photo.length - 1 ? 0 : selectedClient + 1
    );
  };

  useEffect(() => {
    fetch("/api/famousgallery.json")
      .then(response => response.json())
      .then(data => {
        setImage(data.famous);
      });
  }, []);

  useEffect(() => {
    fetch("/api/clientsgallery.json")
      .then(response => response.json())
      .then(data => {
        setPhoto(data.clients);
      });
  }, []);

  return (
    <div>
      {entryModal && (
        <div className="entry-modal">
          <div className="entry-modal-container">
            <img
              src="/images/flexaacortar.jpg"
              alt="Foto do Flexa Barber a cortar o cabelo"
            />
            <div className="entry-content">
              <h2>Inspira-te em alguns cortes</h2>
              <p>
                Nesta Galeria encontrarás alguns modelos de corte. Tudo o que
                faço é com enorme paixão. Dizem que quem corre por gosto não
                cansa, então cá estou eu na corrida!
                <strong>More than a barber.</strong>
              </p>
              <button className="entrybtn" onClick={() => setEntryModal(false)}>
                Entrar
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="gallery">
        <section className="gallery-items">
          <div className="grid-container">
            {!entryModal && (
              <>
                {image.map((fam, index) => (
                  <div
                    className="famous"
                    key={fam.famous_id}
                    onClick={() => {
                      setSelectedFamous(index);
                      setFamousModal(true);
                    }}
                  >
                    <img src={fam.url} alt={fam.description} />
                  </div>
                ))}
                {photo &&
                  photo.map((client, index) => (
                    <div
                      className="clients"
                      key={client.image_id}
                      onClick={() => {
                        setSelectedClient(index);
                        setClientModal(true);
                      }}
                    >
                      <img src={client.url} alt="exemplo de corte de cabelo" />
                    </div>
                  ))}
              </>
            )}
          </div>
        </section>
      </main>
      {famousModal && (
        <div className="modal-famous">
          <div className="modal-famous-container">
            <div className="modal-famous-content">
              <span onClick={() => setFamousModal(false)}>
                <button className="close-btn" onClick={closeModal}>
                  X
                </button>
              </span>
              <img
                className="modal-famous-img"
                src={image[selectedFamous].url}
                alt={image[selectedFamous].name}
              />
              <div>
                <div className="inside-famous-image">
                  {image.map((fam, index) => (
                    <div
                      key={fam.famous_id}
                      onClick={() => setSelectedFamous(index)}
                      className={`small-famous ${
                        selectedFamous === index ? "selected" : ""
                      }`}
                    >
                      <img
                        className="image-container"
                        src={fam.url}
                        alt={fam.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-content">
                <h3>{image[selectedFamous].name}</h3>
                <p>{image[selectedFamous].description}.</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {clientModal && (
        <div className="modal-client">
          <div className="modal-client-container">
            <button className="close-btn-client" onClick={closeModal}>
              X
            </button>
            <div className="modal-client-content">
              <div className="modal-client-img-container">
                <button className="prev-btn" onClick={prevImage}>
                  &#8249;
                </button>
                <img
                  className="modal-client-img"
                  src={photo[selectedClient].url}
                  alt="exemplo de corte de cabelo"
                />
                <button className="next-btn" onClick={nextImage}>
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
