import React, { useState, useEffect } from "react";
import "./contacts.css";

function About() {
  const images = [
    "/images/logo1.png",
    "/images/logo2.png",
    "/images/logo3.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrentImage(prevImage => {
        prevImage++;
        if (prevImage === images.length) {
          prevImage = 0;
        }

        return prevImage;
      });
    }, 3000);
  }, [images.length]);

  return (
    <main className="modal">
      <div className="modal-content">
        <div>
          <img src={images[currentImage]} alt="" />
        </div>
        <div className="text">
          <h1> Como cheguei aqui</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, at,
            corrupti illum doloribus vero nobis voluptatem molestiae ipsum
            minima maxime quisquam in dolore explicabo quod sit ipsa laboriosam
            neque dolores reprehenderit. Officiis sequi eos totam debitis
            doloremque vero voluptatem ex?
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
