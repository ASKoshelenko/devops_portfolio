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
  category_cloud: ["AWS", "Azure", "GCP", "Cloud Storage"],
  category_cicd: ["Jenkins", "CI/CD", "Docker", "Kubernetes", "Git"],
  category_monitoring: ["ELK Stack", "Prometheus", "Grafana", "Monitoring"],
  category_iac: ["Terraform", "Ansible", "CloudFormation"],
  category_security: ["Security", "SSL/TLS", "VPN"],
  category_automation: ["Shell Scripting", "Python", "Automation"],
  category_infrastructure: ["Networking", "Linux", "Virtualization", "Proxmox"]
};

function Projects() {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const projectTypes = ['all', 'project', 'task'];

  // Projects data moved inside the component
  const ITEMS_DATA = [
    // Original DevOps Projects
    {
      type: 'project',
      imgPath: jira,
      title: t('project_jira_title'),
      description: t('project_jira_description'),
      skills: ["Python", "Automation", "REST API"],
      ghLink: "",
    },
    {
      type: 'project',
      imgPath: dockercompose,
      title: t('project_docker_compose_title'),
      description: t('project_docker_compose_description'),
      skills: ["Docker", "Docker Compose", "Microservices", "Networking"],
      ghLink: "",
    },
    {
      type: 'project',
      imgPath: proxmox,
      title: t('project_proxmox_title'),
      description: t('project_proxmox_description'),
      skills: ["Proxmox", "Virtualization", "Linux", "Networking"],
      ghLink: "",
    },
    {
      type: 'project',
      imgPath: nginx,
      title: t('project_nginx_title'),
      description: t('project_nginx_description'),
      skills: ["Networking", "Security", "SSL/TLS"],
      ghLink: "",
    },
    {
      type: 'project',
      imgPath: jenkins,
      title: t('project_jenkins_title'),
      description: t('project_jenkins_description'),
      skills: ["Jenkins", "CI/CD", "Docker", "Git", "Shell Scripting"],
      ghLink: "",
    },
    // Development Projects
    {
      type: 'project',
      imgPath: phbt,
      title: t('project_phbt_title'),
      description: t('project_phbt_description'),
      skills: ["React", "Firebase", "JavaScript", "CSS"],
      ghLink: "https://github.com/ASKoshelenko/phbt",
      demoLink: "https://crm-phbt.web.app/",
    },
    {
      type: 'project',
      imgPath: landing,
      title: t('project_landing_title'),
      description: t('project_landing_description'),
      skills: ["HTML", "CSS", "JavaScript"],
      ghLink: "https://github.com/ASKoshelenko/Landing-page#readme",
    },
    {
      type: 'project',
      imgPath: foxtar,
      title: t('project_multipage_title'),
      description: t('project_multipage_description'),
      skills: ["React", "Redux", "Node.js", "MongoDB"],
      ghLink: "https://github.com/ASKoshelenko/Project-Store#readme",
    },
    {
      type: 'project',
      imgPath: calc,
      title: t('project_calculator_title'),
      description: t('project_calculator_description'),
      skills: ["JavaScript", "HTML", "CSS"],
      ghLink: "https://github.com/ASKoshelenko/calculator",
    },
    {
      type: 'project',
      imgPath: chess,
      title: t('project_chess_title'),
      description: t('project_chess_description'),
      skills: ["React", "TypeScript"],
      ghLink: "https://github.com/ASKoshelenko/chess#readme",
    },
    {
      type: 'project',
      imgPath: fakestore,
      title: t('project_fakestore_title'),
      description: t('project_fakestore_description'),
      skills: ["React", "REST API"],
      ghLink: "https://github.com/ASKoshelenko/fakeStoreAPI#readme",
    },
    {
      type: 'project',
      imgPath: git,
      title: t('project_searchapp_title'),
      description: t('project_searchapp_description'),
      skills: ["React", "REST API", "GitHub API"],
      ghLink: "https://github.com/ASKoshelenko/react_githubSearch#readme",
    },
    // DevOps Tasks
    {
      type: 'task',
      imgPath: dockercompose,
      title: t('task_kubernetes_title'),
      description: t('task_kubernetes_description'),
      skills: ["Kubernetes", "Docker", "Monitoring"],
      ghLink: "",
    },
    {
      type: 'task',
      imgPath: jenkins,
      title: t('task_aws_title'),
      description: t('task_aws_description'),
      skills: ["AWS", "Terraform", "Infrastructure as Code"],
      ghLink: "",
    },
    {
      type: 'task',
      imgPath: nginx,
      title: t('task_elk_title'),
      description: t('task_elk_description'),
      skills: ["ELK Stack", "Monitoring", "Docker"],
      ghLink: "",
    },
    {
      type: 'task',
      imgPath: proxmox,
      title: t('task_cloud_migration_title'),
      description: t('task_cloud_migration_description'),
      skills: ["AWS", "Azure", "Terraform", "CloudFormation"],
      ghLink: "",
    }
  ];

  const hasSkillsFromCategory = (projectSkills, category) => {
    return projectSkills.some(skill => CATEGORIES[category]?.includes(skill));
  };

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
          {t('projects_my_recent_works')}
        </h1>

        {/* Main filters */}
        <div className="main-filters">
          {projectTypes.map((type) => (
            <Button
              key={type}
              onClick={() => handleTypeClick(type)}
              className={`btn ${selectedType === type ? 'active' : ''}`}
            >
              {type === 'all' ? t('all') : t(`type_${type}`)}
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
              {t(category)}
            </Button>
          ))}
        </div>

        {/* Active filters */}
        {(selectedType !== 'all' || selectedCategory || selectedSkill) && (
          <div className="active-filters">
            <span className="active-filters-label">{t('active_filters')}:</span>
            {selectedType !== 'all' && (
              <span className="filter-tag">{t(`type_${selectedType}`)}</span>
            )}
            {selectedCategory && (
              <span className="filter-tag">{t(selectedCategory)}</span>
            )}
            {selectedSkill && (
              <span className="filter-tag">{selectedSkill}</span>
            )}
            <Button
              variant="link"
              className="clear-filters"
              onClick={handleReset}
            >
              {t('clear_all')}
            </Button>
          </div>
        )}

        {/* Results count */}
        <div className="results-count">
          {t('showing_results', { count: filteredItems.length })}
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
            <h3>{t('no_results')}</h3>
            <p>{t('try_different_filters')}</p>
            <Button 
              className="reset-button"
              onClick={handleReset}
            >
              {t('reset_all_filters')}
            </Button>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Projects;