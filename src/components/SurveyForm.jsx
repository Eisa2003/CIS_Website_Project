import React, { useState } from 'react';
import '../../src/style.css';

const styles = {
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  container: {
    width: '100%',
    padding: '8px', 
    border: '1px',
    borderRadius: '4px', 
    boxSizing: 'border-box', 
    marginTop: '8px', 
    marginBottom: '8px', 
    fontSize: '14px', 
  },
  textCenter: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#9AA581', 
    color: 'white',
    padding: '8px 16px', 
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px', 
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
    <div style={styles.body} className='container'>
      <hr/>
      <h3 style={styles.textCenter}>Feedback Survey</h3>
      <hr/>
      <div style={styles.container}>
        <h5 style={styles.textCenter}>Your Opinion Matters!&#9786;</h5> 
        <h6 style={styles.textCenter}>Please Leave Your Feedback and Help Us Improve</h6>
        <div className="survey-form">
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
            <button style={styles.button} type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SurveyForm;
