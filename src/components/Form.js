import "./FormStyles.css";
import emailjs from "emailjs-com";
import React from "react";

const Form = () => {
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm('service_rx2dvql', )
        }
  return (
  <div className="form">
    <form onSubmit={sendEmail}>
      <label>Tu Nombre</label>
      <input type="text" name="user_name "></input>
      <label>Email</label>
      <input type="email" name="user_email"></input>
      <label>Motivo del contacto</label>
      <input type="text"></input>
      <label>Mensaje</label>
      <textarea name="user_message" rows="6" placeholder="Escribe aquí..." />
      <button className="btn">Enviar</button>
    </form>
  </div>
)};

export default Form;
