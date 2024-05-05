import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Dedicated and results-driven professional with a goal of delivering high-quality software solutions in challenging environments. I am eager to leverage my extensive experience and expertise in coding to contribute significantly to the growth and success of an organization. I am seeking a role ina dynamic and innovative company where I can utilize my programming skills to their full potential. My goal is to not only make meaningful contributions
to the employer but also continue my own professional development within a stimulating and challenging work environment.
          </p>

          
          <h1> <strong className="purple">Work</strong> Timeline</h1>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Technical Trainer
            </li>
            <li className="about-activity">
              <ImPointRight />  At Siriam Infotech Private Limited
            </li>
            <li className="about-activity">
              <ImPointRight /> September 2022-December 2022
            </li>
          </ul>


       




          <p style={{ color: "rgb(155 126 172)" }}>
            "Clean code always looks like it was written by someone who cares. "
          </p>
          <footer className="blockquote-footer">Unknown</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
