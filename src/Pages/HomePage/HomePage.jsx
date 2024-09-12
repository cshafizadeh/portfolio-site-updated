import React from 'react';
import './HomePage.css';
import { Helmet } from 'react-helmet-async';
import SocialButtons from '../../Components/SocialButtons/SocialButtons.jsx';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';
import { homeProjectData } from './homeProjectData.js';

export default function HomePage() {
  const navigate = useNavigate();

  function checkLink(dataLink, type) {
    if (dataLink !== '') {
      return (
        <div>
          <a href={dataLink} target="_blank" rel="noreferrer">
            {type} →
          </a>
        </div>
      );
    }
  }

  return (
    <div id="main">
      <Helmet>
        <title>Cyrus Shafizadeh</title>
      </Helmet>
      <div id="HomePage">
        <div className="pt-3">
          <h3 className="mx-5 my-3">Hi, my name is</h3>
          <h1 className="mx-5 my-3">CYRUS SHAFIZADEH</h1>
          <div className="info-container mx-5 my-3">
            <p
              style={{
                letterSpacing: '1px',
                fontWeight: 'lighter',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              PRODUCT DEVELOPER, PROBLEM SOLVER
            </p>
          </div>
          <div className="projectsButton m-5">
            <a href="#projects">
              <button>SEE MY WORK →</button>
            </a>
          </div>
        </div>
      </div>
      <div id="projects" className="mt-3">
        <Container>
          <h1 className="projectsTitle my-5">PROJECTS</h1>
          <div className="projectsContainer">
            {homeProjectData.map((data, key) => {
              return (
                <div
                  className="projectCard"
                  key={key}
                  onClick={() => navigate(`/projects/${data.id}`)}
                >
                  <img
                    className="projectBackground"
                    src={data.background}
                    alt="Img Background"
                  />
                  <h3 className="projectName">{data.title}</h3>
                  <div className="projectDescription">
                    <p>{data.description}</p>
                    <div className="projectLinks">
                      {checkLink(data.visit, 'Visit')}
                      {checkLink(data.github, 'Github')}
                      {checkLink(data.video, 'Video')}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="allProjectsButton my-5">
            <button onClick={() => navigate('/projects')}>
              ALL PROJECTS →
            </button>
          </div>
        </Container>
      </div>
      <SocialButtons />
    </div>
  );
}
