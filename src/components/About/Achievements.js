import React from "react";
import { Col, Row } from "react-bootstrap";
import gcpBadge from "../../Assets/achievements/gcp.png";
import epam from "../../Assets/achievements/EPAM.png";
import cyberThreatBadge from "../../Assets/achievements/sm_cyber-threat-management.png";
import endpointSecurityBadge from "../../Assets/achievements/sm_endpoint-security.png";
import ethicalHackerBadge from "../../Assets/achievements/sm_ethical-hacker.png";
import juniorCybersecurityBadge from "../../Assets/achievements/sm_junior-cybersecurity-analyst-career-path.png";
import networkDefenseBadge from "../../Assets/achievements/sm_network-defense.png";
import networkTechnicianBadge from "../../Assets/achievements/sm_network-technician-career-path.png";

function Achievements() {
  return (
     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://google.accredible.com/63bc83c7-01dd-40f5-a26c-16ad53126920#gs.23goji" target="_blank" rel="noopener noreferrer">
          <img src={gcpBadge} alt="GCP Badge" style={{ width: "125px", height: "125px" }} />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.credly.com/badges/ecb3b494-fbe7-4ece-9e7c-97ba7bcef596" target="_blank" rel="noopener noreferrer">
          <img src={ethicalHackerBadge} alt="Ethical Hacker Badge" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.credly.com/badges/616b03c4-1498-4202-89f6-f05d5f7dcb03" target="_blank" rel="noopener noreferrer">
          <img src={networkDefenseBadge} alt="Network Defense Badge" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.credly.com/badges/8391f0a4-a945-4ee4-9688-eb07ec0a2ac1" target="_blank" rel="noopener noreferrer">
          <img src={cyberThreatBadge} alt="Cyber Threat Management Badge" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.credly.com/badges/79565c4d-dfcb-4efb-a416-d07cbeb43d9f" target="_blank" rel="noopener noreferrer">
          <img src={juniorCybersecurityBadge} alt="Junior Cybersecurity Analyst Career Path Badge" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.credly.com/badges/8edec4aa-9657-49ea-931f-90283d72b226" target="_blank" rel="noopener noreferrer">
          <img src={endpointSecurityBadge} alt="Endpoint Security Badge" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.credly.com/badges/9df01def-6b9b-4bc2-90e1-816a9dc4b1b2" target="_blank" rel="noopener noreferrer">
          <img src={networkTechnicianBadge} alt="Network Technician Career Path Badge" />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://certificates.epam.com/certificates/3419ea71-a724-4ecc-b00b-50469996fef4" target="_blank" rel="noopener noreferrer">
          <img src={epam} alt="EPAM" style={{ width: "125px", height: "125px" }}/>
        </a>
      </Col>
    </Row>
  );
}

export default Achievements;
