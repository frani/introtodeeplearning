import React from "react";
import { Container, Accordion, Row } from "react-bootstrap";

import faqs from "../data/faqs.json";

export default function FAQ() {
  return (
    <section id="faq" className=" py-5 cards-2">
      <Container>
        <Row>
          <h1 className="title text-center">Frequently Asked Questions</h1>
          <h6 className="text-center">
            For any other questions please reach out to the course staff at{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:introtodeeplearning-staff@mit.edu"
            >
              introtodeeplearning-staff@mit.edu
            </a>
          </h6>
        </Row>
        <Row className="py-5">
          <Accordion defaultActiveKey="0" flush>
            {faqs.map((faq) => {
              return (
                <Accordion.Item eventKey={faq.id}>
                  <Accordion.Header>
                    {faq.id}. {faq.question}
                  </Accordion.Header>
                  <Accordion.Body>{faq.anwser}</Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Row>
      </Container>
    </section>
  );
}
