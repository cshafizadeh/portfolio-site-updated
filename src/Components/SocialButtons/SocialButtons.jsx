import React from 'react';
import './SocialButtons.css';

export default function SocialButtons() {
  return (
    <div id="SocialButtons">
      <div className="buttonContainer">
        <a href="https://linkedin.com/cshafizadeh">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
      <div className="buttonContainer">
        <a href="https://github.com/cshafizadeh">
          <i className="bi bi-github"></i>
        </a>
      </div>
      <div className="buttonContainer">
        <a href="https://youtube.com/cshafizadeh">
          <i className="bi bi-youtube"></i>
        </a>
      </div>
      <div className="buttonContainer">
        <a href="https://instagram.com/cshfzdh">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
}
