import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alex Koshelenko </span>
            from <span className="purple"> Ukraine.</span>
            <br />
            I am currently looking for a Dream job.
            <br />
            I successfully complited all the requerements to be recognized as a Google Cloud Certified Professional Cloud DevOps Engineer.
            <br />
            <br />
            Apart from self-learning, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sport activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching a TV shows
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "DevOpsDive: Engineering Tomorrow's Solutions, Today"{" "}
          </p>
          <footer className="blockquote-footer">ASKoshelenko</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
