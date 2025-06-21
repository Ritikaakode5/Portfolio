import React from "react";
import { FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="footer-content">
        <p className="name">&copy; {new Date().getFullYear()} Ritika Akode</p>
        <div className="footer-links">
          <a
            href="mailto:ritikaakode05@gmail.com"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="icon" /> 
          </a>
          <a
            href="https://www.linkedin.com/in/ritika-a-444428280/"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" /> 
          </a>
          <a
            href="/Ritika_Akode_Resume.pdf"
            className="footer-icon"
            download
            aria-label="Download Resume"
          >
            <FaDownload />
          </a>
        </div>
      </div>
    </footer>
  );
}
