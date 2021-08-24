import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Carousel from "../components/Carousel";
import TeamMember from "../components/Cards/Team";
import Assistant from "../components/Cards/Assistant";

import team from "../data/team.json";
import assistants from "../data/assistants.json";

export default function Team() {
  return (
    <section id="team" className=" py-5 cards-2">
      <Container>
        <Row>
          <h1 className="title text-center">6.S191 Team</h1>
        </Row>
        <Row className="py-5">
          {team.map((t) => (
            <Col>
              <TeamMember
                name={t.name}
                picture={t.picture}
                roles={t.roles}
                links={t.links}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <h2 className="title text-center">Teaching Assistants</h2>
        </Row>
        <Row className="py-5">
          <Carousel>
            {assistants.map((a) => {
              return <Assistant name={a.name} picture={a.picture} />;
            })}
          </Carousel>
        </Row>
        <Row className="py-5">
          <h6 className="text-center">
            We are always accepting new applications to join the course staff.
            If you are interested in becoming a TA, please contact{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:introtodeeplearning-staff@mit.edu"
            >
              introtodeeplearning-staff@mit.edu
            </a>
          </h6>
        </Row>
      </Container>
    </section>
  );
}
