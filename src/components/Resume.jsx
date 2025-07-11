import React from "react";
import { Container, Button } from "react-bootstrap";

export default function Resume() {
  return (
    <Container className="text-center mt-5">
      <h2 className="mb-4">My Resume</h2>

      {/* Embedded PDF viewer (requires modern browser) */}
      <iframe
        src="/Ritika_Resume.pdf"
        width="100%"
        height="600px"
        title="Resume"
        style={{ border: "1px solid #ccc" }}
      ></iframe>

      {/* Download Button */}
      <div className="mt-3">
        <Button variant="success" href="/Ritika_Resume.pdf" download>
          Download Resume
        </Button>
      </div>
    </Container>
  );
}
