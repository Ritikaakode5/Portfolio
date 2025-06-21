import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaBriefcase, FaUniversity } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section id="hero" className="hero-section">
        <Container className="hero-content text-center">
          <img src="/picture.jpg" alt="Ritika" className="profile-img" />
          <h1 className="hero-title">Ritika Akode</h1>
          <h4 className="hero-subtitle">Business Analyst</h4>

          <div className="hero-buttons mt-3">
            <Button
              variant="primary"
              href="https://www.linkedin.com/in/ritika-a-444428280/"
              target="_blank"
              className="me-2"
            >
              LinkedIn
            </Button>
            <Button
              variant="outline-success"
              href="/Ritika_Akode_Resume.pdf"
              download
            >
              Download Resume
            </Button>
          </div>
        </Container>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="about-section py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8} className="text-center">
              <h2 className="section-title mb-4">About Me</h2>
              <p className="about-text">
                I’m a Business Analyst with a Master’s in Business Analytics,
                specialized in Machine Learning, from Kent State University. I
                combine technical proficiency with business insight to deliver
                data-driven solutions that improve performance and guide
                strategic decisions.
              </p>
              <p className="about-text">
                At Nextgen Solutions, I led requirements gathering, built KPI
                dashboards in Power BI/Tableau, automated reporting using Excel
                Macros and Power Query, and enhanced reporting efficiency by
                40%. I also supported UAT and created process flows to align
                cross-functional teams.
              </p>
              <p className="about-text">
                During my internship at AB Technologies, I built machine
                learning models for forecasting, developed real-time dashboards,
                and delivered insights through exploratory analysis using R,
                Python, and Excel
              </p>
              <p className="about-text">
                My academic work includes predicting movie success, forecasting
                Walmart sales, and analyzing Uber ride data using advanced
                analytics and visualization tools like Python, R, and Tableau.
              </p>
              <p className="about-text">
                Skilled in Power BI, SQL, Python, R, and Excel, I thrive in
                collaborative environments and am currently open to
                opportunities where I can apply my skills across analytics,
                reporting, and strategy to support innovation and
                business growth.
              </p>
            </Col>
          </Row>

          <Row className="mt-5 justify-content-center">
            {/* Work Experience */}
            <Col md={5} className="mb-4">
              <div className="about-box shadow-sm p-4 h-100 bg-white rounded">
                <h4 className="mb-3">
                  <FaBriefcase className="me-2 text-success" />
                  Work Experience
                </h4>
                <ul className="about-list">
                  <li>
                    <strong>Business Analyst</strong> – Nextgen Solutions
                    <br />
                    <small className="text-muted">Sep 2021 – Jul 2023</small>
                  </li>
                  <li>
                    <strong>Business Analyst Intern</strong> – AB Technologies
                    <br />
                    <small className="text-muted">Aug 2024 – Dec 2024</small>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Education */}
            <Col md={5} className="mb-4">
              <div className="about-box shadow-sm p-4 h-100 bg-white rounded">
                <h4 className="mb-3">
                  <FaUniversity className="me-2 text-success" />
                  Education
                </h4>
                <ul className="about-list">
                  <li>
                    <strong>M.S. Business Analytics</strong>
                    <br />
                    Kent State University – GPA: 3.8/4
                  </li>
                  <li>
                    <strong>B.Com, Computer Applications</strong>
                    <br />
                    Little Flower Degree College – GPA: 3.36/4
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
