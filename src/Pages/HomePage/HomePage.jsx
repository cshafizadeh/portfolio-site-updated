import React from 'react';
import { Helmet } from 'react-helmet-async';
import './HomePage.css';
import SocialButtons from '../../Components/SocialButtons/SocialButtons.jsx';
import Container from 'react-bootstrap/esm/Container';
import BartBackground from '../../Components/img/Bart.jpg';
import SqlBackground from '../../Components/img/SqlBackground.jpg';
import YosemiteBackground from '../../Components/img/YosemiteBackground.jpg';
import EcommerceBackground from '../../Components/img/EcommerceBackground.jpg';
import DiscordBackground from '../../Components/img/DiscordBackground.jpg';
import StockBackground from '../../Components/img/StockBackground.jpg';
import Contact from '../../Components/Contact/Contact';

export default function HomePage() {
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
              WEB DEVELOPER, PROBLEM SOLVER
            </p>
          </div>
          <div className="projectsButton m-5">
            <a href="#projects">
              <h3
                style={{
                  position: 'relative',
                  top: '35%',
                  fontWeight: '100',
                }}
              >
                SEE MY WORK →
              </h3>
            </a>
          </div>
        </div>
      </div>
      <div id="projects" className="mt-3">
        <Container>
          <h1 className="projectsTitle my-5">PROJECTS</h1>
          <div className="projectsContainer">
            <div className="projectCard">
              <img
                className="projectBackground"
                src={BartBackground}
                alt="Bart Background"
              />
              <h3 className="projectName">BART API</h3>
              <div className="projectDescription">
                <p>
                  This web application uses BART API data to retrieve
                  information about current and upcoming train schedules,
                  allowing the user to find the destinations, and arrival times
                  of trains at a station.
                </p>
                <a
                  href="https://github.com/cshafizadeh/ApiProjects/tree/master/src/Components/bartAPI"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>
            <div className="projectCard">
              <img
                className="projectBackground"
                src={SqlBackground}
                alt="Sql Background"
              />
              <h3 className="projectName">SQL DATABASE</h3>
              <div className="projectDescription">
                <p>
                  SQL database with full CRUD functionality. Implements
                  one-to-one, one-two-many, and many-to-many relationships,
                  allowing the user to add, edit, update, and delete orders,
                  customers, and products.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=pkvBJdnA0Kc"
                  target="_blank"
                  rel="noreferrer"
                >
                  Viedo →
                </a>
                <br />
                <a
                  href="https://github.com/cshafizadeh/cs340_project"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>
            <div className="projectCard">
              <img
                className="projectBackground"
                src={YosemiteBackground}
                alt="Sql Background"
              />
              <h3 className="projectName">GSCE</h3>
              <div className="projectDescription">
                <p style={{ fontSize: '90%' }}>
                  Freelance project for the Good Stewardship Community
                  Endowment, an environmental non-profit combating climate
                  change having invested over $50,000 into environmental
                  progress. The site uses PayPal to securely allow donations to
                  the endowment.
                </p>
                <a
                  href="https://www.gscendowment.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit →
                </a>
              </div>
            </div>
            <div className="projectCard">
              <img
                className="projectBackground"
                src={EcommerceBackground}
                alt="Sql Background"
              />
              <h3 className="projectName">E-COMMERCE WEBSITE</h3>
              <div className="projectDescription">
                <p>
                  Full-Stack website using CRUD stack. React reducer and local
                  storage manage state and remember users. Users can update
                  their profile and order products. Admins can create, edit,
                  update, and delete users, products, and orders.
                </p>
                <a
                  href="https://github.com/cshafizadeh/ApiProjects/tree/master/src/Components/bartAPI"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>
            <div className="projectCard">
              <img
                className="projectBackground"
                src={DiscordBackground}
                alt="Sql Background"
              />
              <h3 className="projectName">DISCORD BOT</h3>
              <div className="projectDescription">
                <p>
                  Custom discord bot made from scratch using discordjs. Discord
                  bot has a wide variety of features such as playing music, get
                  info on your favorite Pokémon, and even retrieve tweets and
                  twitter accounts using Twitters developer API.
                </p>
                <a
                  href="https://github.com/cshafizadeh/discordBot"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>
            <div className="projectCard">
              <img
                className="projectBackground"
                src={StockBackground}
                alt="Sql Background"
              />
              <h3 className="projectName">STOCK API</h3>
              <div className="projectDescription">
                <p>
                  Website using Polygons stock API. Allows user to select a
                  stock symbol and date, and will return the high, low, opening,
                  and closing values for selected date.
                </p>
                <a
                  href="https://github.com/cshafizadeh/ApiProjects/tree/master/src/Components/stocks"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
          <div className="allProjectsButton my-5">
            <a href="/projects">
              <p
                style={{
                  position: 'relative',
                  top: '35%',
                  fontSize: 'large',
                }}
              >
                ALL PROJECTS →
              </p>
            </a>
          </div>
        </Container>
      </div>
      <Contact />
      <SocialButtons />
    </div>
  );
}
