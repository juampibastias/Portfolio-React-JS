import "./FormStyles.css";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";

const Form = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const resetForm = (form) => {
    setIsSent(false);
    form.reset();
  };

  const sendEmail = (event) => {
    event.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_rx2dvql",
        "template_dso8hcq",
        event.target,
        "vSF9ZqyggOdVn6Hja"
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          resetForm(event.target);
        },
        () => {
          setIsSending(false);
        }
      )
      .catch((error) => {
        console.log("Error al enviar el correo electrónico:", error);
        setIsSending(false);
      });
  };
  return (
    <div className="form">
      {isSent ? (
        <h2 className="success-message">El correo se envió correctamente.</h2>
      ) : (
        <form onSubmit={sendEmail}>
          <label>Tu Nombre</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Motivo del contacto</label>
          <input type="text" name="subject" required />
          <label>Mensaje</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Escribe aquí..."
            required
          />
          <button className="btn" disabled={isSending}>
            {isSending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      )}
      {isSent && (
        <button className="btn" onClick={(event) => resetForm(event.target)}>
          Enviar otro mensaje
        </button>
      )}
    </div>
  );
};

export default Form;
