import React from "react";

const Contact = () => {
  return (
    <div className="py-5 text-light contact-section" id="contact">
      <h2 className="text-center font-bold">Contact Us</h2>
      <p className="text-center">Sign up to get updates and future deals!</p>
      <div className="row mx-4">
        <form className="d-flex justify-content-center">
          <div className=" col-9">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-1 ms-2">
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
