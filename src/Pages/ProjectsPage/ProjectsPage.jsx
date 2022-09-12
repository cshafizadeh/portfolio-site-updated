import React from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';
import './ProjectsPage.css';
import { projectData } from './projectData.js';
import { useNavigate } from 'react-router-dom';

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div id="ProjectsPage">
      <Container>
        <Helmet>
          <title>Projects</title>
        </Helmet>
        <h1>PROJECTS</h1>
        <p style={{ fontFamily: 'Inter, sans-serif' }}>
          Click on a project for more details.
        </p>
        <div className="projectsContainer my-3">
          {projectData.map((data, key) => {
            return (
              <div
                className="projectCard"
                key={key}
                onClick={() => navigate(`/projects/${data.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  className="projectBackground"
                  src={data.background}
                  alt={data.title}
                />
                <h3 className="singleProjectName">{data.title}</h3>
                <p className="clickForDetails">CLICK FOR DETAILS</p>
              </div>
            );
          })}
        </div>
      </Container>
      <br />
    </div>
  );
}
