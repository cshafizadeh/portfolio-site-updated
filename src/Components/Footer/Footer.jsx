import React from 'react';
import './Footer.css';

export default function Footer() {
  let date = new Date().getFullYear().toLocaleString().replace(',', '');
  return <div id="Footer">CYRUS SHAFIZADEH © {date}</div>;
}
