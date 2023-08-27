import React from 'react';
import './SocialButtons.css';

export default function SocialButtons() {
  return (
    <div id="SocialButtons">
      <div className="buttonContainer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/cshafizadeh"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
      <div className="buttonContainer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/cshafizadeh"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>
      <div className="buttonContainer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCyx_l1dgNu1wyXOzO77ssEw"
        >
          <i className="bi bi-youtube"></i>
        </a>
      </div>
      <div className="buttonContainer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/cshafizadeh/"
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  );
}
