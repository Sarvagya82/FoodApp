import React from "react";

const Contact = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Contact Us for any FeedBack</h1>
      <div className="contact-form">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Enter your message"
            rows="5"
          ></textarea>
        </div>
        <button type="button" className="btn btn-orange">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
