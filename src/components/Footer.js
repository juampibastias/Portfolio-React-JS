import "./FooterStyles.css";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <p>Mendoza, Argentina</p>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +54 9 2634538584
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              juanpedrobastiastorresi@gmail.com
            </h4>
          </div>
          <div></div>
        </div>
        <div className="right">
          <h4>Queres Contratarme?</h4>
          <p>Estoy listo para comenzar!!</p>
          <div className="social">
            <a
              href="https://linkedin.com/in/juanpedrobastiastorresi-541b72216"
              target="_blank"
            >
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://instagram.com/juanpi_bt?igshid=ZDdkNTZiNTM="
              target="_blank"
            >
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://wa.me/+5492634538584"
              target="_blank"
            >
              <FaWhatsapp
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://github.com/juampibastias/"
              target="_blank"
            >
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
