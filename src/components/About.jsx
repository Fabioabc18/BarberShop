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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, aliquam? Dolor qui accusamus incidunt odit, ullam
            blanditiis magni amet sed rem earum saepe libero temporibus eligendi
            facilis dicta ex nulla quo culpa voluptates sequi consequatur
            accusantium ipsum. Magnam, aspernatur voluptatem. Veritatis fugit
            iure provident cum nihil nemo quidem dolore modi!
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
