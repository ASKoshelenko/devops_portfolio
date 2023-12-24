import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { 
  FaLinkedinIn,
  FaTelegramPlane, 
} from "react-icons/fa";

import { 
  TbMail, 
} from "react-icons/tb";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            In the world of DevOps, I strive for a high level of professionalism, effectively tackling challenges across diverse technical environments.
              <br />
              <br />My expertise includes leveraging
              <i><b className="purple"> Docker and Kubernetes </b></i>
              for developing robust solutions, and I skillfully use 
              <i><b className="purple"> Jenkins </b></i>
              for automating and streamlining system processes.
              <br />
              <br />
              I'm focused on crafting and optimizing scalable cloud solutions on platforms like 
              <i><b className="purple"> GCP and AWS </b></i>
              to achieve peak efficiency.
              <br />
              <br />
              Committed to Agile principles, I aim to enhance project management processes and foster continuous innovation in system infrastructure.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:askoshelenko@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <TbMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/askoshelenko"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTelegramPlane />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/askoshelenko/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/askoshelenko"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/askoshelenko"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
