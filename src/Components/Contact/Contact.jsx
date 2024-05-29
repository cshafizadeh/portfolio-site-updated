import React, { useRef, useState } from 'react';
import './Contact.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function Contact() {
  const formRef = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_cya2abe',
        'template_m7mszdx',
        formRef.current,
        'U-dYJh2Dumb1yaGDj'
      )
      .then(
        (result) => {
          console.log(result.text);
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          document.getElementById('contactForm').reset();
          console.log('sent');
          toast.success('Email successfully sent!');
        },
        (error) => {
          console.log(error.text);
          toast.warn('There was an error processing your request.');
        }
      );
  };
  return (
    <div id="Contact" className="py-3">
      <Container>
        <Row>
          <h1 className="my-3">CONTACT ME!</h1>
          <Col md={6} className="contactInfo my-3">
            <h3 className="my-3">
              Reach out! Always looking for new experiences.
            </h3>
            <div className="my-5">
              <div className="contactEmail my-3">
                <i className="bi bi-envelope m-1"></i>
                <p className="m-1">cshafizadeh@gmail.com</p>
              </div>
              <div className="contactPhone my-3">
                <i className="bi bi-telephone m-1"></i>
                <p className="m-1">(925) 448-0288</p>
              </div>
            </div>
          </Col>
          <Col md={6} className="contactForm my-3">
            <form ref={formRef} id="contactForm" onSubmit={handleSubmit}>
              <input
                className="my-3"
                type="text"
                placeholder="Name..."
                value={name}
                name="user_name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="my-3"
                type="text"
                placeholder="Email..."
                value={email}
                name="user_email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="my-3"
                type="text"
                placeholder="Subject..."
                value={subject}
                name="user_subject"
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <textarea
                className="my-3"
                rows="5"
                placeholder="Message..."
                value={message}
                name="user_message"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button className="submitButton" type="submit">
                SUBMIT →
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
