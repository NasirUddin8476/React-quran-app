import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";

const Topbar = () => {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Row>
            <Col>
              <Navbar.Brand href="#home">Quran Mazid</Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
