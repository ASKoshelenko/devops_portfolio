import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function Github() {
  const { t } = useTranslation();

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        {t('github_days_i_code')} <strong className="purple">{t('github_code')}</strong>
        <h6>{t('github_web_hobby')}</h6>
      </h1>
      <GitHubCalendar
        username="askoshelenko"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
