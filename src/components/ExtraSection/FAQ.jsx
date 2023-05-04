import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="mb-4">
      <h1 className="text-center">Faq Section</h1>
      <Container>
        <Row>
          <Col>
            <div className="card d-flex">
              <div className="d-lg-flex">
                <div className="card-body">
                  <img
                    src="https://rb.gy/6ticp"
                    className="card-img-top img-fluid   d-lg-block w-50 "
                    alt="Banner"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">FAQ</h5>
                  <div>
                    <p className="fw-bolder">
                      <span>1.What does FAQ mean? </span>
                    </p>
                    <br />
                    Ans:<p>
                      It stands for frequently-asked questions, and it’s a page
                      on a website that gives quick answers to customer
                      questions. The idea is to keep the answers short and
                      direct so that people find info quickly. We write it as
                      “an FAQ”…(“an eff-ay-cue”) instead of “a FAQ” (a “fack”).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          {/* <Col>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Question 1</h5>
              <p className="card-text">Answer 1</p>
              <h5 className="card-title">Question 2</h5>
              <p className="card-text">Answer 2</p>
              <h5 className="card-title">Question 3</h5>
              <p className="card-text">Answer 3</p>
              {/* Add more questions and answers here */}
          {/* </div>
          </div> */}
          {/* </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
