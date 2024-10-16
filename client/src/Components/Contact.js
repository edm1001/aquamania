import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className='my-4'>
      <h2 className="text-center">Contact Us</h2>
      <p className='text-center'>Fill out the form below to get in touch with us!</p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="5"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-dark">
            Send Message
          </button>
        </div>
      </form>
    </Container>
  );
};



export default Contact;

