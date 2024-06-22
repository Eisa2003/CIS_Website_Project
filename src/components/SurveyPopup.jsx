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
        <h5>Your Opinion Matters!&#9786;</h5> 
        <h6>Please Leave Your Feedback and Help Us Improve</h6><br />
        
        <form id="feedbackForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">How easy is it to navigate our website/app? (Scale: 1-10)</label>
            <select
                type="text"
                id="name"
                name="name"
                value={responses.navigate}
                onChange={handleChange}
                required
                >
                <option value="">Select...</option>
                <option value="5">1</option>
                <option value="4">2</option>
                <option value="3">3</option>
                <option value="2">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="email">How would you rate the design and layout of our website/app? (Scale: 1-10)</label>
              <select
                type="email"
                id="email"
                name="email"
                value={responses.design}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="5">1</option>
                <option value="4">2</option>
                <option value="3">3</option>
                <option value="2">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="rating">Is the content on our website/app helpful and informative? (Scale: 1-10)</label>
              <select
                id="rating"
                name="rating"
                value={responses.content}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="5">1</option>
                <option value="4">2</option>
                <option value="3">3</option>
                <option value="2">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="comments">Do you have any additional comments or suggestions?</label>
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
