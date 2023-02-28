import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <video className="welcome-video" controls autoPlay>
        <source src="/videos/c4.mp4" type="video/mp4" />
      </video>

      <div className="welcome-text">
        <h1>Bem-Vindo à Flexa Barber</h1>
        <p>
          A Flexa Barber abriu as suas portas em 2018, sendo uma barbearia onde
          se mistura corte tradicional com o moderno. Aqui pode encontrar um
          espaço atrativo, para que os clientes se sintam "em casa" e desfrutem
          do momento. O seu fundador Carlos, mais conhecido por Flexa, é
          barbeiro há cerca de 7 anos, e sempre sonhou em abrir a sua própria
          barbearia, onde o atendimento de excelência é uma prioridade. Venha
          desfrutar de uma experiência de um corte de cabelo e barba com estilo,
          num espaço acolhedor e higienizado.
        </p>
      </div>
    </div>
  );
}

export default Home;
