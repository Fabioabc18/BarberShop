import React, { useEffect, useState } from "react";
import "./gallery.css";

function Gallery() {
  const [image, setImage] = useState([]);
  const [photo, setPhoto] = useState([]);

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
    <div className="gallery">
      <div>
        {image && (
          <div>
            {image.map(fam => (
              <div className="famous" key={fam.famous_id}>
                <img src={fam.url} alt="" />
                <h3>{fam.name}</h3>
                <p>{fam.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        {photo && (
          <div>
            {photo.map(client => (
              <div className="clients" key={client.image_id}>
                <img src={client.url} alt="" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
