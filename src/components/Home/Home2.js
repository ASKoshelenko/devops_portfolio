import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { TbMail } from "react-icons/tb";
import { useTranslation } from 'react-i18next'; // Імпорт хука useTranslation

function Home2() {
  const { t } = useTranslation(); // Ініціалізація хука

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t('home_introduce_myself')}
              <strong className="main-name"> {t('home_introduce')}</strong>
            </h1>
            <p className="home-about-body">
              {t('home_about_description1')}
              <br />
              <br />
              {t('home_about_description2')}
              <br />
              <br />
              {t('home_about_description3')}
              <br />
              <br />
              {t('home_about_description4')}
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
            <h1>{t('home_find_me_on')}</h1>
            
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
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/askoshelenko"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/askoshelenko"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
            <p>
              {t('home_connect_with_me')}
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
