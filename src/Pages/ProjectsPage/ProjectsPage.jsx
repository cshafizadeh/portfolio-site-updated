import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet-async';
import './ProjectsPage.css';
import { projectData } from './projectData.js';
import { useNavigate } from 'react-router-dom';

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState({
    title: '',
    link: '',
    embed: '',
    background: '',
    description: '',
    features: [],
    languages: [],
    code: '',
  });

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
                onMouseEnter={() => setCurrentProject(data)}
                onClick={() => navigate(`/projects/${data.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  className="projectBackground"
                  src={data.background}
                  alt={data.title}
                />
                <h3 className="projectName">{data.title}</h3>
                <div className="projectDescription">
                  <p>{data.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
