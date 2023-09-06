import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { projectData } from './projectData';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

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
    images: [],
    code: '',
  });
  const { id } = params;
  useEffect(() => {
    const getProject = () => {
      for (let i = 0; i < projectData.length; i++) {
        if (projectData[i].id === id.toLowerCase()) {
          setProject(projectData[i]);
          console.log(project);
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
                <div className="singleProjectEmbed my-3">
                  {dataEmbed(project.embed)}
                </div>
                {project.images.length > 0 ? (
                  <div className="singleProjectCarousel my-5">
                    <Carousel variant="dark">
                      {project.images.map((image, key) => {
                        return (
                          <Carousel.Item key={key}>
                            <img
                              className="d-block w-100"
                              src={image}
                              alt="First slide"
                            />
                          </Carousel.Item>
                        );
                      })}
                    </Carousel>
                  </div>
                ) : (
                  <></>
                )}
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
                {project.title === 'TWITTER BOT' ? (
                  <div className="my-3">
                    <h3>TRY IT OUT! </h3>
                    Go to{' '}
                    <a
                      className="twitterLink"
                      href="https://us-central1-xbot-a5127.cloudfunctions.net/tweet"
                      rel="noreferrer"
                      target="_blank"
                    >
                      https://us-central1-xbot-a5127.cloudfunctions.net/tweet
                    </a>{' '}
                    and wait for a response. Then, check out{' '}
                    <a
                      className="twitterLink"
                      href="https://twitter.com/MotivativeWords"
                      rel="noreferrer"
                      target="_blank"
                    >
                      https://twitter.com/MotivativeWords
                    </a>{' '}
                    to view your newly posted tweet!
                  </div>
                ) : (
                  <></>
                )}
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
                  <br />
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
