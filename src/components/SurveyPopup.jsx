import React, { useState } from 'react';
import '../../src/style.css';

const styles = {
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  container: {
    backgroundColor: '#F5F5DC',
    width: '40%',
    padding: '8px',
    border: '1px solid #ccc',
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
    padding: '10px 10px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '12px',
  },
  faceContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  face: {
    fontSize: '36px',
    cursor: 'pointer',
    marginRight: '10px',
    transition: 'transform 0.3s ease',
  },
  activeFace: {
    transform: 'scale(1.2)', // Scale up to indicate selection
  },
};

const SurveyPopup = ({ isOpen, onClose }) => {
  const [responses, setResponses] = useState({
    navigate: '',
    design: '',
    content: '',
    comments: '',
  });

  const handleFaceClick = (ratingType, value) => {
    setResponses((prevResponses) => ({ ...prevResponses, [ratingType]: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponses((prevResponses) => ({ ...prevResponses, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(responses);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={styles.body} className='survey-popup'>
      <div className='survey-popup-content' style={styles.container}>
        <button style={styles.button} className='close-btn' onClick={onClose}>X</button>
        <h3 style={styles.textCenter}>Your Opinion Matters! 😊</h3>
        <h6 style={styles.textCenter}>Please Leave Your Feedback and Help Us Improve</h6>
        <form id='feedbackForm' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='navigate'>How easy is it to navigate our website/app?</label>
            <div style={styles.faceContainer}>
              {['😡', '😕', '😐', '🙂', '😄'].map((emoji, index) => (
                <span
                  key={emoji}
                  style={{
                    ...styles.face,
                    ...(responses.navigate === emoji ? styles.activeFace : null),
                  }}
                  onClick={() => handleFaceClick('navigate', emoji)}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='design'>How would you rate the design and layout?</label>
            <div style={styles.faceContainer}>
              {['😡', '😕', '😐', '🙂', '😄'].map((emoji, index) => (
                <span
                  key={emoji}
                  style={{
                    ...styles.face,
                    ...(responses.design === emoji ? styles.activeFace : null),
                  }}
                  onClick={() => handleFaceClick('design', emoji)}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='content'>Is the content helpful and informative?</label>
            <div style={styles.faceContainer}>
              {['😡', '😕', '😐', '🙂', '😄'].map((emoji, index) => (
                <span
                  key={emoji}
                  style={{
                    ...styles.face,
                    ...(responses.content === emoji ? styles.activeFace : null),
                  }}
                  onClick={() => handleFaceClick('content', emoji)}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='comments'>Any additional comments or suggestions?</label>
            <textarea
              id='comments'
              name='comments'
              value={responses.comments}
              onChange={handleChange}
            ></textarea>
          </div>
          <button style={styles.button} type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SurveyPopup;
