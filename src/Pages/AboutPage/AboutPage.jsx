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
  SiUnity,
  SiUnrealengine,
  SiCypress,
  SiPostman,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
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
    <SiUnity />,
    <SiUnrealengine />,
    <SiCypress />,
    <SiPostman />,
    <SiDocker />,
    <SiKubernetes />,
    <SiPostgresql />,
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
            <div className="skillsDescription mx-3 my-5">
              <p>
                I'm a Software Developer at Intel and a graduate student at
                Oregon State University pursuing a Master of Science in Computer
                Science. My work spans full-stack development, AI-powered
                applications, and machine learning, with a focus on building
                software that simplifies complex problems and improves the way
                people work. I enjoy taking projects from an idea to a
                production-ready solution while continually exploring new
                technologies and approaches.
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
        <div className="resume-button my-3">
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
