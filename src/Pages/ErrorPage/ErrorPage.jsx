import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div id="ErrorPage">
      <div className="errorContainer">
        <div>
          <h1>Error 404</h1>
          <p className="my-5">This page does not exist.</p>
          <div className="allProjectsButton my-5">
            <button onClick={() => navigate('/')}>BACK TO HOME →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
