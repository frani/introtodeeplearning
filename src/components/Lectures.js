import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/Cards/Lecture";

import lectures from "../data/lectures.json";

export default function Lectures() {
  return (
    <section id="lectures" className="bg-gray py-5 cards-2">
      <Container>
        <Row>
          <h1 className="title text-center">Lectures</h1>
          <h4 className="text-center">
            Lectures occured during MIT IAP 2021. All lectures, slides, and labs
            are now available!
          </h4>
        </Row>
        <Row className="py-5 my-5">
          {lectures.map((lecture) => {
            return (
              <Col xs={12} md={6} lg={4} key={lecture.id}>
                <Card
                  title={lecture.title}
                  subtitle={lecture.subtitle}
                  text={lecture.text}
                  id={lecture.id}
                  image={lecture.image}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
