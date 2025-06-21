import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaDownload,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="section-title">Let’s Connect</h2>
            <p className="contact-intro">
              I'm currently exploring new opportunities where I can contribute
              to impactful projects through data, strategy, and collaboration.
              Whether it’s an analyst role that leans technical,
              business-focused, or a bit of both — I’m always open to meaningful
              conversations.Feel free to reach out if you’re hiring, open to
              networking, or just want to chat about data, analytics, or
              emerging tech. I’d love to connect!
            </p>
          </Col>

          <Col md={6}>
            <ul className="contact-list">
              <li>
                <FaEnvelope className="icon" />{" "}
                <a href="mailto:ritikaakode05@gmail.com">
                  ritikaakode05@gmail.com
                </a>
              </li>
              <li>
                <FaPhoneAlt className="icon" />{" "}
                <a href="tel:+13305545705">+1 (330) 554-5705</a>
              </li>
              <li>
                <FaLinkedin className="icon" />{" "}
                <a
                  href="https://www.linkedin.com/in/ritika-a-444428280/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <FaDownload className="icon" />{" "}
                <a href="/Ritika_Akode_Resume.pdf" download>
                  Download Resume
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
