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
    padding: '10px 20px', // Increased padding for better clickability
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px', // Slightly increased font size for better visibility
    marginTop: '20px', // Added margin top for spacing
  },
  starContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  star: {
    fontSize: '30px',
    color: '#ccc',
    cursor: 'pointer',
    transition: 'color 0.3s ease-in-out',
    marginRight: '5px',
  },
  activeStar: {
    color: '#fdd835', // Change to your desired active star color
  },
};

const SurveyForm = () => {
  const [responses, setResponses] = useState({
    navigate: 0,
    design: 0,
    content: 0,
    comments: '',
  });

  const handleStarClick = (ratingType, value) => {
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
    // Reset form state if needed
    setResponses({
      navigate: 0,
      design: 0,
      content: 0,
      comments: '',
    });
  };

  return (
    <div style={styles.body} className='container'>
      <hr />
      <h3 style={styles.textCenter}>Feedback Survey</h3>
      <hr />
      <div style={styles.container}>
        <h5 style={styles.textCenter}>Your Opinion Matters!&#9786;</h5>
        <h6 style={styles.textCenter}>Please Leave Your Feedback and Help Us Improve</h6>
        <div className='survey-form'>
          <form id='feedbackForm' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>How easy is it to navigate our website/app? (Scale: 1-10)</label>
              <div style={styles.starContainer}>
                {[...Array(10)].map((_, index) => (
                  <span
                    key={index}
                    style={{ ...styles.star, ...(index + 1 <= responses.navigate ? styles.activeStar : null) }}
                    onClick={() => handleStarClick('navigate', index + 1)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>How would you rate the design and layout of our website/app? (Scale: 1-10)</label>
              <div style={styles.starContainer}>
                {[...Array(10)].map((_, index) => (
                  <span
                    key={index}
                    style={{ ...styles.star, ...(index + 1 <= responses.design ? styles.activeStar : null) }}
                    onClick={() => handleStarClick('design', index + 1)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='rating'>Is the content on our website/app helpful and informative? (Scale: 1-10)</label>
              <div style={styles.starContainer}>
                {[...Array(10)].map((_, index) => (
                  <span
                    key={index}
                    style={{ ...styles.star, ...(index + 1 <= responses.content ? styles.activeStar : null) }}
                    onClick={() => handleStarClick('content', index + 1)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='comments'>Do you have any additional comments or suggestions?</label>
              <textarea
                id='comments'
                name='comments'
                value={responses.comments}
                onChange={handleChange}
              ></textarea>
            </div>
            <button style={styles.button} type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
