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


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jira}
              isBlog={false}
              title="Jira Deployment and Automation"
              description="Deployed Jira for project management, customizing it with automated scripts for task tracking, sprint planning, and team workflows, thus boosting productivity and aligning with agile methods."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dockercompose}
              isBlog={false}
              title="Docker-compose Infrastructure"
              description="Created an infrastructure using Docker-compose, connecting a WordPress site with a MySQL database. Configured the WordPress server on port 8080 and set up MySQL for effective site interaction."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proxmox}
              isBlog={false}
              title="Proxmox Virtual Data Center"
              description="Deployed a Proxmox-based virtual data center, managing virtual machines and ensuring high reliability with regular backups. This setup guarantees performance and security for all services."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nginx}
              isBlog={false}
              title="Nginx Configuration"
              description="Configured Nginx for domain connection and SSL, enhancing web service security and efficiency. Adjusted server blocks for improved performance, installing SSL for encrypted data transfer."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jenkins}
              isBlog={false}
              title="Jenkins Implementation"
              description="Set up Jenkins for automated workflows and CI, customizing pipelines and integrating with version control systems. This enhanced development efficiency, speed, and consistency."
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phbt}
              isBlog={false}
              title="Pharmbiotest CRM"
              description="Developed a specialized CRM system for Pharmbiotest, enhancing service tracking, client database management, and loyalty programs. Optimized for improved client engagement and streamlined service delivery with advanced database tools."
              ghLink="https://github.com/ASKoshelenko/phbt"
              demoLink="https://crm-phbt.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landing}
              isBlog={false}
              title="Responsive Landing Page"
              description="Crafted an adaptive landing page using HTML and CSS, focusing on responsive design. Employed advanced CSS for flexibility across devices, ensuring a seamless user experience."
              ghLink="https://github.com/ASKoshelenko/Landing-page#readme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foxtar}
              isBlog={false}
              title="Foxtar Online Store"
              description="Developed the Foxtar Store, a comprehensive online retail platform with user-friendly design. Incorporated e-commerce features like product listings and shopping cart for a complete shopping experience."
              ghLink="https://github.com/ASKoshelenko/Project-Store#readme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Vue.js Calculator"
              description="Built an interactive calculator using Vue.js, featuring undo and redo functions. This project showcases Vue.js's capabilities in reactivity and state management."
              ghLink="https://github.com/ASKoshelenko/calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess Game in React"
              description="Developed a two-player chess game with React, integrating classic rules into a dynamic interface. Efficiently managed game state for enhanced strategic gameplay."
              ghLink="https://github.com/ASKoshelenko/chess#readme"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fakestore}
              isBlog={false}
              title="Fake Store Application"
              description="Developed a React application simulating an e-commerce experience with FakeStoreAPI. Features include browsing products, adding to cart, and understanding API integration."
              ghLink="https://github.com/ASKoshelenko/fakeStoreAPI#readme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={git}
              isBlog={false}
              title="GitHub Repository Search App"
              description="Designed a web app for searching GitHub repositories, enabling users to search, view details, and save favorite repositories. Utilizes GitHub's API for real-time data retrieval."
              ghLink="https://github.com/ASKoshelenko/react_githubSearch#readme"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
