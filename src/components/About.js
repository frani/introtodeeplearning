import React from "react";
import { Container, Row } from "react-bootstrap";

import AboutImage from "../assets/images/about-image.jpg";

export default function About() {
  return (
    <div id="about" className="basic-1">
      <Container>
        <Row>
          <div className="col-lg-6 col-xl-5">
            <div
              className="image-container shadow overflow-auto"
              style={{
                borderRadius: "30px",
              }}
            >
              <img className="img-fluid" src={AboutImage} alt="alternative" />
            </div>
            <p>
              <a
                className="text-decoration-none fst-italic float-end"
                href="https://github.com/lengstrom/fast-style-transfer/"
                target="_blank"
                rel="noreferrer"
              >
                this image was style using AI
              </a>
            </p>
          </div>
          <div className="col-lg-6 col-xl-7">
            <div className="text-container">
              <div className="section-title">About</div>
              <h2>Course Description</h2>
              <p>
                MIT's introductory course on deep learning methods with
                applications to computer vision, natural language processing,
                biology, and more! Students will gain foundational knowledge of
                deep learning algorithms and get practical experience in
                building neural networks in TensorFlow. Course concludes with a
                project proposal competition with feedback from staff and panel
                of industry sponsors. Prerequisites assume calculus (i.e. taking
                derivatives) and linear algebra (i.e. matrix multiplication),
                we'll try to explain everything else along the way! Experience
                in Python is helpful but not necessary. This class is taught
                during MIT's IAP term by current MIT PhD researchers. Listeners
                are welcome!
              </p>
              <p className="fw-bold">
                A complete syllabus, grading info, and student deliverables is{" "}
                <a
                  href="https://docs.google.com/document/d/1p1zAcNlogBCQFDXnSntwHFQ06pwmzewXpiQns-KfOd8/edit?usp=sharing"
                  className="text-primary text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  available HERE.
                </a>
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
