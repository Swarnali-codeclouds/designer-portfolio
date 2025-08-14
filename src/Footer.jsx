import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Logo / Name */}
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0">© {new Date().getFullYear()} All rights reserved.</p>
          </Col>

          {/* Social Links */}
          <Col md={6}>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light fs-5"><FaFacebook /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-light fs-5"><FaLinkedin /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-light fs-5"><FaGithub /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light fs-5"><FaTwitter /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
