import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills-section py-5">
      <Container>
        <h2 className="text-center section-title mb-5">Skills</h2>

        <Row className="mb-4">
          <Col>
            <h4>💻 Technical Tools & Languages</h4>
            <ul>
              <li>
                <strong>Programming:</strong> Python, R, MATLAB, SQL
              </li>
              <li>
                <strong>Data Manipulation & Analysis:</strong> Pandas, NumPy,
                dplyr, Tidyverse, EDA
              </li>
              <li>
                <strong>Visualization & Dashboarding:</strong> Power BI,
                Tableau, ggplot2, Excel (Pivot Tables, Power Query, Macros)
              </li>
              <li>
                <strong>Databases:</strong> RDBMS, SQL Server, Excel, SharePoint
              </li>
              <li>
                <strong>Web Technologies:</strong> HTML, CSS (basic proficiency)
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h4>📊 Data Science & Analytics</h4>
            <ul>
              <li>Machine Learning (Supervised & Unsupervised Learning)</li>
              <li>Predictive Modeling & Forecasting</li>
              <li>Feature Engineering & Selection (Python, R, MATLAB)</li>
              <li>Time Series Analysis</li>
              <li>Classification & Regression (Random Forest, XGBoost)</li>
              <li>Model Evaluation (Precision, Recall, AUC, RMSE, MAPE)</li>
            </ul>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h4>🔄 Business Analysis & Process Tools</h4>
            <ul>
              <li>Business Requirement Documents (BRDs)</li>
              <li>User Stories & Acceptance Criteria</li>
              <li>Process Flow Diagrams (Lucidchart)</li>
              <li>JIRA, Agile & Scrum Methodologies</li>
              <li>UAT Testing & Defect Tracking</li>
              <li>Stakeholder Communication (PowerPoint)</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <h4>🧠 Soft Skills</h4>
            <ul>
              <li>Problem Solving & Critical Thinking</li>
              <li>Data Storytelling & Insight Communication</li>
              <li>Cross-Functional Collaboration</li>
              <li>Adaptability & Continuous Learning</li>
              <li>Attention to Detail</li>
              <li>Strategic Thinking</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
