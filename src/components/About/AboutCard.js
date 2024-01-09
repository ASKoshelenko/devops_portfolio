import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from 'react-i18next'; // Добавьте этот импорт

function AboutCard() {
  const { t } = useTranslation(); // Используйте хук useTranslation

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t('about_card_intro')} <span className="purple">{t('home_name')} </span>
            {t('about_card_from')} <span className="purple"> {t('about_card_country')}. </span>
            <br />
            <br />
            {t('about_card_currently_looking')}
            <br />
            <br />
            {t('about_card_certification')}
            <br />
            <br />
            {t('about_card_activities_intro')}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t('about_card_activity_sport')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('about_card_activity_tv')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('about_card_activity_reading')}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {t('about_card_quote')}
          </p>
          <footer className="blockquote-footer">ASKoshelenko</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
