import React, { useState } from 'react';
import '../../src/style.css';

const styles = {
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  container: {
    borderRadius: '5px',
    backgroundColor: '#f2f2f2',
    padding: '16px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  textCenter: {
    textAlign: 'center',
  }
};

const SurveyForm = () => {
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
  };

  return (
    <div style={styles.body}>
      <h3 style={styles.textCenter}>Feedback</h3>
        <hr/>
      <div style={styles.container}>
        
        <div className="survey-form">
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
    </div>
  );
}

export default SurveyForm;
