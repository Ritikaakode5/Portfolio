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
      "Predicted movie success (Hit/Flop) using 24 machine learning models in MATLAB, including SVM, Decision Trees, Neural Networks, and Naïve Bayes.Selected top 10 features using MRMR, Chi-Square, ReliefF, ANOVA, and Kruskal-Wallis techniques Conducted 27 experiments with different feature combinations; evaluated models using Accuracy, F1-Score, and Confusion Matrix Introduced CPU time as a metric and used the Ohio Supercomputer Center to identify the most efficient models (e.g., RUSBoosted Trees).",
  },
  {
    title: "Walmart Sales Forecasting",
    tools: ["R", "Time Series", "Random Forest"],
    icon: <FaShoppingCart size={30} color="#2c3e50" />,
    description:
      "Built a Random Forest model in R to forecast weekly sales, incorporating lag variables, holidays, and promotional periods. Applied time series decomposition to capture seasonality and trends in sales data.Evaluated model performance using RMSE, MAE,and R-squared for accuracy.Identified key sales drivers and provided insights to support inventory planning and marketing strategies.",
  },
  {
    title: "Uber Ride Analysis",
    tools: ["R", "Excel", "Heatmaps"],
    icon: <FaCarAlt size={30} color="#2c3e50" />,
    description:
      "Analyzed ride data in R and Excel to discover peak hours, high-demand zones, and customer patterns.Performed EDA and clustering to uncover insights from geospatial and time-based variables.Created heatmaps and dashboards to visualize demand and support surge pricing strategies.Provided recommendations for driver allocation and operational planning based on usage trends.",
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
