import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { projectData } from './projectData';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function SingleProjectPage() {
  const params = useParams();
  const [project, setProject] = useState({
    title: '',
    link: '',
    embed: '',
    background: '',
    description: '',
    features: [],
    languages: [],
    code: '',
  });
  const { id } = params;
  useEffect(() => {
    const getProject = () => {
      for (let i = 0; i < projectData.length; i++) {
        if (projectData[i].id === id.toLowerCase()) {
          setProject(projectData[i]);
          break;
        }
      }
    };
    getProject();
  }, [id, project]);

  function checkValid(dataLink) {
    if (dataLink !== '') {
      return (
        <a
          className="projectLink"
          href={dataLink}
          target="_blank"
          rel="noreferrer"
        >
          Visit! →
        </a>
      );
    }
  }

  function checkGitHub(dataCode) {
    if (dataCode !== '') {
      return (
        <a
          className="projectLink"
          href={dataCode}
          target="_blank"
          rel="noreferrer"
        >
          GitHub →
        </a>
      );
    }
  }

  function dataEmbed(dataEmbed) {
    if (dataEmbed !== '') {
      return (
        <div>
          <iframe
            src={dataEmbed}
            frameBorder="1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />{' '}
        </div>
      );
    }
  }

  return (
    <div id="SingleProject">
      <Helmet>
        <title>{`Projects - ${project.title}`}</title>
      </Helmet>
      <Container className="my-5">
        <h1>{project.title}</h1>
        <Row>
          <Col md={6}>
            <Container>
              <div className="singleProjectImages my-3">
                <h3>IMAGES</h3>
              </div>
            </Container>
          </Col>
          <Col md={6}>
            <Container>
              <div className="singleProjectDescription my-3">
                <h3>PROJECT DESCRIPTION:</h3>
                <div className="mx-3 my-3">{project.description}</div>
                <h3>FEATURES:</h3>
                <div className="singleProductFeatures my-3">
                  {project.features.map((features, key) => {
                    return (
                      <ul>
                        <li key={key}>{features}</li>
                      </ul>
                    );
                  })}
                </div>
                <div className="languages mx-3">
                  {project.languages.map((language, key) => {
                    return (
                      <div className="languageLogo" key={key}>
                        {language}
                      </div>
                    );
                  })}
                </div>
                <div className="singleProjectLinks my-3">
                  {checkGitHub(project.code)}
                  {checkValid(project.link)}
                </div>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
