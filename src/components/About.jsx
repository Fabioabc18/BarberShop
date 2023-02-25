import React, { useState, useEffect } from "react";
import "./about.css";

function About() {
  const images = [
    "/images/b6.jpeg",
    "/images/b1.jpeg",
    "/images/b2.jpeg",
    "/images/b3.jpeg",
    "/images/b4.jpeg",
    "/images/b5.jpeg",
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
    }, 4000);
  }, [images.length]);

  return (
    <main className="modal">
      <div className="modal-content">
        <div className="modal-image">
          <img src={images[currentImage]} alt="" />
        </div>
        <div className="text">
          <h1> Como cheguei aqui</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            nisi doloribus nesciunt distinctio dignissimos? Quasi, natus nihil
            pariatur reiciendis hic nisi alias dolor, quos expedita esse quia?
            Fuga cum ipsum corporis nulla tempore! Perspiciatis sapiente
            excepturi iure cumque maxime incidunt quisquam aliquam possimus, ad
            quasi, facere numquam! Quod, praesentium nemo repellendus molestias
            accusantium fugit assumenda beatae quas, libero, possimus rem.
            Dolores recusandae obcaecati blanditiis quas corrupti, enim libero
            deserunt impedit officia laborum vel veniam dolorem consequuntur.
            Quod sit voluptates repellendus labore cupiditate debitis dolores
            doloribus ab fugiat neque asperiores, similique, aperiam quasi
            minima eos itaque deserunt sapiente velit beatae? Maiores!
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
