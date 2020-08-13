import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreatePollForm from "../components/CreatePollForm";
import PollsList from "../components/PollsList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <CreatePollForm />
        </Col>
        <Col size="md-6 sm-12">
          <PollsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
