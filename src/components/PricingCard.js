import "./PricingCardStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
  <div className="pricing">
    <div className="card-container">
      <div className="card">
        <h3 style={{color:"#fff"}}>- Basico -</h3>
        <span className="bar"></span>
        <p className="btc">$3500</p>
        <p>- Hosting y Dominio -</p>
        <p>- Pagina Institucional -</p>
        <p>- 3 secciones -</p>
        <p>- 3 Destacados -</p>
        <p>- Diseño responsivo</p>
        <p>- 2hs de mantenimiento mensual</p>
        <Link to="/contacto" className="btn cart">Consultar ahora</Link>
      </div>
      <div className="card">
        <h3 style={{color:"#fff"}}>- Inicial -</h3>
        <span className="bar"></span>
        <p className="btc">$5500</p>
        <p>- Hosting y Dominio -</p>
        <p>- Pagina Institucional -</p>
        <p>- E-Commerce -</p>
        <p>- 4 secciones -</p>
        <p>- 4 Destacados -</p>
        <p>- Diseño responsivo</p>
        <p>- 4hs de mantenimiento mensual</p>
        <Link to="/contacto" className="btn cart">Consultar ahora</Link>
      </div>
      <div className="card">
        <h3 style={{color:"#fff"}}>- Premium -</h3>
        <span className="bar"></span>
        <p className="btc">$8500</p>
        <p>- Hosting y Dominio -</p>
        <p>- Pagina Institucional -</p>
        <p>- E-Commerce con checkout de pago en Mercadopago</p>
        <p>- 5 secciones -</p>
        <p>- 5 Destacados -</p>
        <p>- Diseño responsivo</p>
        <p>- 8hs de mantenimiento mensual</p>
        <Link to="/contacto" className="btn cart">Consultar ahora</Link>
      </div>
    </div>
  </div>
)};

export default PricingCard;
