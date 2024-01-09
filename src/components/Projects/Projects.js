import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import phbt from "../../Assets/Projects/phbt.png";
import calc from "../../Assets/Projects/calc.png";
import nginx from "../../Assets/Projects/nginx.png";
import chess from "../../Assets/Projects/chess.png";
import dockercompose from "../../Assets/Projects/dockercompose.png";
import fakestore from "../../Assets/Projects/fakestore.png";
import foxtar from "../../Assets/Projects/foxtar.png";
import git from "../../Assets/Projects/git.png";
import jenkins from "../../Assets/Projects/jenkins.png";
import jira from "../../Assets/Projects/jira.png";
import landing from "../../Assets/Projects/landing.png";
import proxmox from "../../Assets/Projects/proxmox.png";
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("projects_my_recent_works")}
        </h1>
        <p style={{ color: "white" }}>
          {t("projects_description")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jira}
              isBlog={false}
              title={t("project_jira_title")}
              description={t("project_jira_description")}
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dockercompose}
              isBlog={false}
              title={t("project_docker_compose_title")}
              description={t("project_docker_compose_description")}
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proxmox}
              isBlog={false}
              title={t("project_proxmox_title")}
              description={t("project_proxmox_description")}
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nginx}
              isBlog={false}
              title={t("project_nginx_title")}
              description={t("project_nginx_description")}
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jenkins}
              isBlog={false}
              title={t("project_jenkins_title")}
              description={t("project_jenkins_description")}
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phbt}
              isBlog={false}
              title={t("project_phbt_title")}
              description={t("project_phbt_description")}
              ghLink="https://github.com/ASKoshelenko/phbt"
              demoLink="https://crm-phbt.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landing}
              isBlog={false}
              title={t("project_landing_title")}
              description={t("project_landing_description")}
              ghLink="https://github.com/ASKoshelenko/Landing-page#readme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foxtar}
              isBlog={false}
              title={t("project_multipage_title")}
              description={t("project_multipage_description")}
              ghLink="https://github.com/ASKoshelenko/Project-Store#readme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title={t("project_calculator_title")}
              description={t("project_calculator_description")}
              ghLink="https://github.com/ASKoshelenko/calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title={t("project_chess_title")}
              description={t("project_chess_description")}
              ghLink="https://github.com/ASKoshelenko/chess#readme"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fakestore}
              isBlog={false}
              title={t("project_fakestore_title")}
              description={t("project_fakestore_description")}
              ghLink="https://github.com/ASKoshelenko/fakeStoreAPI#readme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={git}
              isBlog={false}
              title={t("project_searchapp_title")}
              description={t("project_searchapp_description")}
              ghLink="https://github.com/ASKoshelenko/react_githubSearch#readme"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
