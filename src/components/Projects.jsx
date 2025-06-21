import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./Projects.css";
import { FaChartLine, FaShoppingCart, FaCarAlt } from "react-icons/fa";

const projects = [
  {
    title: "IMDB Movie Success Prediction",
    tools: ["Python", "Random Forest", "Tableau", "Matlab"],
    icon: <FaChartLine size={30} color="#2c3e50" />,
    description:
      "Developed a machine learning pipeline to predict the commercial success of movies using the IMDB Movies dataset. Conducted in-depth data cleaning, visualization, and feature engineering to identify key attributes influencing box office performance Used MATLAB for feature selection techniques such as correlation analysis and recursive feature elimination to improve model accuracy and interpretability. Trained ensemble models including Random Forest and XGBoost in Python and compared their performance using precision, recall, and AUC scores. Visualized results in Tableau to highlight high-impact factors like cast, budget, and genre.",
  },
  {
    title: "Walmart Sales Forecasting",
    tools: ["R", "Time Series", "Random Forest"],
    icon: <FaShoppingCart size={30} color="#2c3e50" />,
    description:
      "Built a time series forecasting model to predict weekly sales across Walmart stores, incorporating seasonal trends, holidays, and promotional events. Engineered features based on date, store type, and regional factors, then applied Random Forest regression in R to improve predictive performance. Evaluated the model using metrics like RMSE and MAPE, and presented findings through a dashboard identifying trends, anomalies, and high-performing outlets",
  },
  {
    title: "Uber Ride Analysis",
    tools: ["R", "Excel", "Heatmaps"],
    icon: <FaCarAlt size={30} color="#2c3e50" />,
    description:
      "Performed geospatial and temporal analysis of Uber trip data to understand demand patterns and operational hotspots. Cleaned and transformed datasets in R and Excel, then used visualization tools to generate heatmaps, trend lines, and frequency charts.Identified peak demand zones and time windows, offering actionable insights for pricing strategies and fleet deployment.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <h2 className="section-title text-center mb-5">Featured Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="project-card shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="project-icon mb-3">{project.icon}</div>
                  <Card.Title className="project-title">
                    {project.title}
                  </Card.Title>

                  <div className="mb-3">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="badge rounded-pill bg-light text-dark border me-2 mb-1"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <Card.Text className="project-desc">
                    {project.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
