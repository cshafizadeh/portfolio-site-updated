import React from 'react';
import './AboutPage.css';
import SocialButtons from '../../Components/SocialButtons/SocialButtons';
import { Helmet } from 'react-helmet-async';
import Contact from '../../Components/Contact/Contact';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiCplusplus,
  SiC,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiCsharp,
  SiRuby,
  SiRubyonrails,
  SiFirebase,
} from 'react-icons/si';
import { TbBrandPython } from 'react-icons/tb';
import { FaNode } from 'react-icons/fa';
import Resume from './Resume.pdf';

export default function AboutPage() {
  const skills = [
    <SiReact />,
    <SiJavascript />,
    <FaNode />,
    <TbBrandPython />,
    <SiMysql />,
    <SiMongodb />,
    <SiGithub />,
    <SiCsharp />,
    <SiCplusplus />,
    <SiC />,
    <SiBootstrap />,
    <SiHtml5 />,
    <SiCss3 />,
    <SiFigma />,
    <SiRuby />,
    <SiRubyonrails />,
    <SiFirebase />,
  ];
  return (
    <div id="AboutPage" className="mt-5">
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <Container className="my-3">
        <Row>
          <Col md={6}>
            <h1>ABOUT ME</h1>
            <div className="skillsDescription m-3">
              <p>
                I am a 4th-year student at the College of Engineering at Oregon
                State University currently achieving my Bachelors of Science in
                computer science and a minor in business. I also work as a
                Student Software Developer for the Center for Applied Systems
                and Software{' '}
                <a
                  className="aboutLink"
                  href="https://cass.oregonstate.edu/"
                  target="_blank"
                  rel="noreferrer"
                  title="Center for Applied Systems and Software - Oregon State"
                >
                  (CASS)
                </a>{' '}
                at Oregon State. My passion is creating unique stylish user
                experiences that achieve business objectives while scaling and
                delighting users. I am on a non-stop mission to find an
                internship in the San Francisco Bay Area this summer.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <h1>SKILLS</h1>
            <Container className="skillsContainer">
              {skills.map((skill, key) => {
                return (
                  <div className="skill m-3" key={key}>
                    {skill}
                  </div>
                );
              })}
            </Container>
          </Col>
        </Row>
        <div className="resume-button m3">
          <a href={Resume} target="_blank" rel="noreferrer">
            <button>RESUME</button>
          </a>
        </div>
      </Container>
      <br />
      <Contact />
      <SocialButtons />
    </div>
  );
}
