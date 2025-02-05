import React, { useState, useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useTranslation } from 'react-i18next';

// Import images
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

// DevOps categories with their respective skills
const CATEGORIES = {
  'Cloud Services': ["AWS", "Azure", "GCP", "Cloud Storage"],
  'CI/CD & Containers': ["Jenkins", "CI/CD", "Docker", "Kubernetes", "Git"],
  'Monitoring & Logging': ["ELK Stack", "Prometheus", "Grafana", "Monitoring"],
  'Infrastructure as Code': ["Terraform", "Ansible", "CloudFormation"],
  'Security': ["Security", "SSL/TLS", "VPN"],
  'Automation': ["Shell Scripting", "Python", "Automation"],
  'Infrastructure': ["Networking", "Linux", "Virtualization", "Proxmox"]
};

// Projects data
const ITEMS_DATA = [
  // Original DevOps Projects
  {
    type: 'project',
    imgPath: jira,
    title: "Jira Integration Project",
    description: "Complex Jira integration project with automated workflows. Created automated workflows using REST API and Python scripts. Integrated with Slack for notifications and ticket management.",
    skills: ["Python", "Automation", "REST API"],
    ghLink: "",
  },
  {
    type: 'project',
    imgPath: dockercompose,
    title: "Docker Infrastructure",
    description: "Developed comprehensive Docker infrastructure for microservices architecture. Created and maintained Docker Compose configurations for development and staging environments.",
    skills: ["Docker", "Docker Compose", "Microservices", "Networking"],
    ghLink: "",
  },
  {
    type: 'project',
    imgPath: proxmox,
    title: "Proxmox VE Cluster",
    description: "Set up and managed Proxmox Virtual Environment cluster. Implemented high availability configuration and automated backup solutions.",
    skills: ["Proxmox", "Virtualization", "Linux", "Networking"],
    ghLink: "",
  },
  {
    type: 'project',
    imgPath: nginx,
    title: "NGINX Load Balancer",
    description: "Configured NGINX as a load balancer and reverse proxy for web applications. Implemented SSL termination and caching strategies.",
    skills: ["Networking", "Security", "SSL/TLS"],
    ghLink: "",
  },
  {
    type: 'project',
    imgPath: jenkins,
    title: "CI/CD Pipeline with Jenkins",
    description: "Implemented complete CI/CD pipeline using Jenkins, including automated testing, building, and deployment processes.",
    skills: ["Jenkins", "CI/CD", "Docker", "Git", "Shell Scripting"],
    ghLink: "",
  },

  // Development Projects
  {
    type: 'project',
    imgPath: phbt,
    title: "PHBT CRM System",
    description: "Developed a custom CRM system for business task management and client tracking.",
    skills: ["React", "Firebase", "JavaScript", "CSS"],
    ghLink: "https://github.com/ASKoshelenko/phbt",
    demoLink: "https://crm-phbt.web.app/",
  },
  {
    type: 'project',
    imgPath: landing,
    title: "Responsive Landing Page",
    description: "Created a modern responsive landing page with animations and optimized performance.",
    skills: ["HTML", "CSS", "JavaScript"],
    ghLink: "https://github.com/ASKoshelenko/Landing-page#readme",
  },
  {
    type: 'project',
    imgPath: foxtar,
    title: "Foxtar Marketplace",
    description: "Built a multi-page marketplace platform with user authentication and product management.",
    skills: ["React", "Redux", "Node.js", "MongoDB"],
    ghLink: "https://github.com/ASKoshelenko/Project-Store#readme",
  },
  {
    type: 'project',
    imgPath: calc,
    title: "JavaScript Calculator",
    description: "Implemented a fully functional calculator with advanced mathematical operations.",
    skills: ["JavaScript", "HTML", "CSS"],
    ghLink: "https://github.com/ASKoshelenko/calculator",
  },
  {
    type: 'project',
    imgPath: chess,
    title: "React Chess Game",
    description: "Developed a chess game with move validation and game state management.",
    skills: ["React", "TypeScript"],
    ghLink: "https://github.com/ASKoshelenko/chess#readme",
  },
  {
    type: 'project',
    imgPath: fakestore,
    title: "E-commerce Platform",
    description: "Created an e-commerce platform using Fake Store API with shopping cart functionality.",
    skills: ["React", "REST API"],
    ghLink: "https://github.com/ASKoshelenko/fakeStoreAPI#readme",
  },
  {
    type: 'project',
    imgPath: git,
    title: "GitHub User Search",
    description: "Built a GitHub user search application using GitHub's REST API.",
    skills: ["React", "REST API", "GitHub API"],
    ghLink: "https://github.com/ASKoshelenko/react_githubSearch#readme",
  },

  // DevOps Tasks
  {
    type: 'task',
    imgPath: dockercompose,
    title: "Kubernetes Deployment",
    description: "Set up Kubernetes cluster and deployed microservices with auto-scaling and monitoring.",
    skills: ["Kubernetes", "Docker", "Monitoring"],
    ghLink: "",
  },
  {
    type: 'task',
    imgPath: jenkins,
    title: "AWS Infrastructure Setup",
    description: "Implemented AWS infrastructure using Terraform, including VPC, EC2, and RDS setups.",
    skills: ["AWS", "Terraform", "Infrastructure as Code"],
    ghLink: "",
  },
  {
    type: 'task',
    imgPath: nginx,
    title: "ELK Stack Implementation",
    description: "Implemented ELK stack for centralized logging and monitoring of applications.",
    skills: ["ELK Stack", "Monitoring", "Docker"],
    ghLink: "",
  },
  {
    type: 'task',
    imgPath: proxmox,
    title: "Cloud Migration Project",
    description: "Migrated on-premise applications to cloud platform using Infrastructure as Code.",
    skills: ["AWS", "Azure", "Terraform", "CloudFormation"],
    ghLink: "",
  }
];

function Projects() {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Function to check if a project has skills from selected category
  const hasSkillsFromCategory = (projectSkills, category) => {
    return projectSkills.some(skill => CATEGORIES[category]?.includes(skill));
  };

  // Filtered items based on all selected filters
  const filteredItems = useMemo(() => {
    return ITEMS_DATA.filter(item => {
      const matchesType = selectedType === 'all' || item.type === selectedType;
      const matchesCategory = !selectedCategory || hasSkillsFromCategory(item.skills, selectedCategory);
      const matchesSkill = !selectedSkill || item.skills.includes(selectedSkill);
      
      return matchesType && matchesCategory && matchesSkill;
    });
  }, [selectedType, selectedCategory, selectedSkill]);

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setSelectedSkill(null);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setSelectedSkill(null);
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
    setSelectedCategory(null);
  };

  const handleReset = () => {
    setSelectedType('all');
    setSelectedCategory(null);
    setSelectedSkill(null);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects</strong>
        </h1>

        {/* Main filters */}
        <div className="main-filters">
          {['all', 'project', 'task'].map((type) => (
            <Button
              key={type}
              onClick={() => handleTypeClick(type)}
              className={`btn ${selectedType === type ? 'active' : ''}`}
            >
              {type}
            </Button>
          ))}
        </div>

        {/* Category filters */}
        <div className="category-filters">
          {Object.keys(CATEGORIES).map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Active filters */}
        {(selectedType !== 'all' || selectedCategory || selectedSkill) && (
          <div className="active-filters">
            <span className="active-filters-label">Active filters:</span>
            {selectedType !== 'all' && (
              <span className="filter-tag">{selectedType}</span>
            )}
            {selectedCategory && (
              <span className="filter-tag">{selectedCategory}</span>
            )}
            {selectedSkill && (
              <span className="filter-tag">{selectedSkill}</span>
            )}
            <Button
              variant="link"
              className="clear-filters"
              onClick={handleReset}
            >
              Clear all
            </Button>
          </div>
        )}

        {/* Results count */}
        <div className="results-count">
          showing {filteredItems.length} results
        </div>

        {/* Projects grid */}
        <Row className="project-cards-container">
          {filteredItems.map((item, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                {...item}
                isBlog={false}
                onSkillClick={handleSkillClick}
                activeSkill={selectedSkill}
              />
            </Col>
          ))}
        </Row>

        {/* No results message */}
        {filteredItems.length === 0 && (
          <div className="no-results">
            <h3>No projects found</h3>
            <p>Try different filters or reset current selection</p>
            <Button 
              className="reset-button"
              onClick={handleReset}
            >
              Reset all filters
            </Button>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Projects;