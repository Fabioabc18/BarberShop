import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <video className="welcome-video" controls autoplay>
        <source src="/videos/c4.mp4" type="video/mp4" />
      </video>

      <div className="welcome-text">
        <h1>Bem-Vindo à Flexa Barber</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          adipisci, commodi nobis architecto quis iusto repellendus repudiandae
          consequuntur facilis! Nulla, commodi ducimus quisquam doloremque nihil
          consequatur animi. Eius, officia! Quisquam.
        </p>
      </div>
    </div>
  );
}

export default Home;
