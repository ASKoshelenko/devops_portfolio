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
              imgPath={phbt}
              isBlog={false}
              title="Pharmbiotest CRM"
              description="Developed a CRM system tailored for efficient service tracking, bonus system management, customer database handling, and loyalty program enhancement. This solution optimizes client engagement and streamlines service delivery, leveraging advanced database management for improved customer relationship operations."
              ghLink="https://github.com/ASKoshelenko/phbt"
              demoLink="https://crm-phbt.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dockercompose}
              isBlog={false}
              title="Create infrastructure by Docker-compose"
              description="An infrastructure has been created to ensure communication between a Wordpress site and a MySQL database using Docker-compose. The Wordpress web server is configured and accessible on port 8080, while the MySQL database is set up to interact effectively with the site."
              ghLink="https://github.com/ASKoshelenko/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proxmox}
              isBlog={false}
              title="Proxmox"
              description="Successfully deployed a virtual data center on Proxmox, establishing a versatile and robust infrastructure. In this environment, I manage virtual machines and ensure reliability through regular backups, guaranteeing optimal performance and security for all services."
              ghLink="https://github.com/ASKoshelenko/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nginx}
              isBlog={false}
              title="Nginx configuration"
              description="Configured Nginx for domain connection and SSL setup, ensuring secure and efficient web service hosting. This involved mapping a purchased domain to the server, adjusting Nginx configuration files for domain recognition, and implementing SSL/TLS encryption for secure data transfer. The process included obtaining and installing an SSL certificate, configuring HTTPS protocols, and optimizing server blocks for enhanced security and performance. This setup provided a robust, secure foundation for hosting web applications, with improved reliability and user trust."
              ghLink="https://github.com/ASKoshelenko/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jenkins}
              isBlog={false}
              title="Jenkins"
              description="Implemented Jenkins on a server, configuring it for automated workflows and continuous integration. This setup involved installing Jenkins, creating pipelines for automated builds, testing, and deployment. Customized Jenkins to cater to specific project requirements, integrating it with version control systems for streamlined development processes. This automation enhances efficiency, consistency, and speed in software development cycles."
              ghLink="https://github.com/ASKoshelenko/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jira}
              isBlog={false}
              title="Jira"
              description="Deployed Jira for project management and developed automation to enhance team workflows and efficiency. This process included configuring projects, customizing issue types, workflows, and dashboards, as well as writing automation scripts for recurring tasks and notifications. The automation streamlined task tracking, sprint planning, and reporting, significantly boosting productivity and aligning with agile methodologies. These efforts resulted in improved project management, team collaboration, and seamless integration of automated processes within Jira."
              ghLink="https://github.com/ASKoshelenko/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landing}
              isBlog={false}
              title="Landing page"
              description="Developed an adaptive landing page using only HTML and CSS, focusing on responsive design principles. This project entailed creating a visually appealing and user-friendly interface that dynamically adjusts to different screen sizes and devices. Utilized advanced CSS techniques like flexbox and media queries to ensure a seamless and engaging user experience across various platforms. The layout and design were meticulously crafted to provide optimal usability and aesthetic appeal without relying on JavaScript or other frameworks."
              ghLink="https://github.com/ASKoshelenko/Landing-page#readme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foxtar}
              isBlog={false}
              title="Foxtar store"
              description="Designed and developed Foxtar Store, a multi-page online retail platform. This project involved intricate web design, ensuring a user-friendly and responsive interface across various devices. Integrated e-commerce functionalities such as product listings, shopping cart, and checkout processes, providing a comprehensive online shopping experience."
              ghLink="https://github.com/ASKoshelenko/Project-Store#readme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Calculator"
              description="I developed a calculator project using Vue.js featuring undo and redo functionalities. This interactive calculator allows users to perform standard calculations with the added ability to revert or repeat actions, enhancing usability and efficiency. The implementation effectively leverages Vue.js's reactivity and state management capabilities."
              ghLink="https://github.com/ASKoshelenko/calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="Chess"
              description="ADeveloped a two-player chess game using React, offering a dynamic, interactive experience. This project integrates classic chess rules with a sleek, user-friendly interface, allowing for engaging gameplay. Implemented efficient state management for game progress tracking, enhancing the strategic aspect of the game."
              ghLink="https://github.com/ASKoshelenko/chess#readme"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fakestore}
              isBlog={false}
              title="Fake store"
              description="Developed a practice application using React that interacts with FakeStoreAPI for a realistic e-commerce experience. This app allows users to browse, add items to a cart, and simulate purchases, providing a hands-on way to understand API integration, state management, and UI design in React."
              ghLink="https://github.com/ASKoshelenko/fakeStoreAPI#readme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={git}
              isBlog={false}
              title="Github search"
              description="A web application designed for searching and collecting GitHub repositories. This app allows users to efficiently search for repositories using various criteria, view detailed information, and save their favorite repositories for easy access. The application leverages GitHub's API for real-time data and is built with a focus on user-friendly navigation and efficient data handling."
              ghLink="https://github.com/ASKoshelenko/react_githubSearch#readme"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
