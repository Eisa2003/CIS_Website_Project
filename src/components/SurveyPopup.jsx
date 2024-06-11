import React, { useState } from 'react';
import '../../src/style.css';

const SurveyPopup = ({ isOpen, onClose }) => {
  const [responses, setResponses] = useState({
    name: '',
    email: '',
    rating: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponses(prevResponses => ({ ...prevResponses, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(responses);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="survey-popup">
      <div className="survey-popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Feedback Survey</h2>
        <form id="feedbackForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={responses.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={responses.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              name="rating"
              value={responses.rating}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="5">Excellent</option>
              <option value="4">Good</option>
              <option value="3">Average</option>
              <option value="2">Fair</option>
              <option value="1">Poor</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments:</label>
            <textarea
              id="comments"
              name="comments"
              value={responses.comments}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SurveyPopup;
