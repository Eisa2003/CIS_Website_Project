import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const SurveyForm = () => {
  const [responses, setResponses] = useState({
    navigate: 0,
    design: 0,
    content: 0,
    comments: '',
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleFaceClick = (ratingType, value) => {
    const updatedResponses = { ...responses, [ratingType]: value };
    setResponses(updatedResponses);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResponses((prevResponses) => ({ ...prevResponses, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS service ID, template ID, and user ID
    const YOUR_SERVICE_ID = 'service_ior1kb4';
    const YOUR_TEMPLATE_ID = 'template_7cl4psg';
    const YOUR_USER_ID = 'xkNP7oUx7IMWzN_v-';

    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, responses, YOUR_USER_ID)
      .then((response) => {
        console.log('Email sent:', response.status, response.text);
        setMessage('Feedback submitted successfully!');
        setMessageType('success');
        // Optionally, clear form state after submission
        setResponses({
          navigate: 0,
          design: 0,
          content: 0,
          comments: '',
        });
      })
      .catch((error) => {
        console.error('Email error:', error);
        setMessage('Failed to submit feedback. Please try again later.');
        setMessageType('error');
      });
  };

  const styles = {
    body: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      zIndex: '4',
    },
    outerContainer: {
      backgroundColor: '#EAE3C9',
      padding: '5px',
      maxWidth: '600px',
      margin: '0 auto',
    },
    innerContainer: {
      backgroundColor: '#FAFDF3',
      borderRadius: '5px',
      padding: '10px',
    },
    textCenter: {
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '1px',
      fontSize: '15px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '8px',
      margin: '6px 0',
      boxSizing: 'border-box',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
    },
    textarea: {
      width: '100%',
      padding: '5px',
      margin: '6px 0',
      boxSizing: 'border-box',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '12px',
      resize: 'vertical',
    },
    button: {
      width: '100%',
      backgroundColor: '#9AA581',
      color: 'white',
      padding: '5px 5px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '15px',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    faceContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    faceBox: {
      textAlign: 'center',
      flex: '1 0 20%', // Adjust based on the number of faces per row
    },
    face: {
      fontSize: '20px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease-in-out',
      display: 'block',
      margin: '0 auto',
    },
    activeFace: {
      transform: 'scale(1.2)',
    },
    description: {
      textAlign: 'center',
      fontSize: '12px',

      textTransform: 'capitalize',
    },
    message: {
      padding: '10px',
      marginBottom: '10px',
      textAlign: 'center',
      borderRadius: '5px',
    },
    success: {
      backgroundColor: '#4CAF50',
      color: 'white',
    },
    error: {
      backgroundColor: '#f44336',
      color: 'white',
    },
  };

  return (
    <div style={styles.body}>
      
      <h3 style={styles.textCenter}>Feedback Survey</h3>
      <hr />
      <div style={styles.outerContainer}>
        <h5 style={styles.textCenter}>Your Opinion Matters! 😊</h5>
        <h6 style={styles.textCenter}>Please Leave Your Feedback and Help Us Improve</h6>
        <div style={styles.innerContainer}>
          {message && (
            <div className={`message ${messageType}`} style={{ ...styles.message, ...styles[messageType] }}>
              {message}
            </div>
          )}
          <form id='feedbackForm' style={styles.form} onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='navigate' style={styles.label}>
                How easy is it to navigate our website/app?
              </label>
              <div style={styles.faceContainer}>
                {[1, 2, 3, 4, 5].map((value) => (
                  <div key={value} style={styles.faceBox}>
                    <span
                      className='face'
                      style={{
                        ...styles.face,
                        ...(value === responses.navigate ? styles.activeFace : null),
                      }}
                      onClick={() => handleFaceClick('navigate', value)}
                    >
                      {value === 1 && <>&#128542;</>}
                      {value === 2 && <>&#128577;</>}
                      {value === 3 && <>&#128528;</>}
                      {value === 4 && <>&#128578;</>}
                      {value === 5 && <>&#128513;</>}
                    </span>
                    <div style={styles.description}>
                      {value === 1 && 'Very unsatisfied'}
                      {value === 2 && 'Unsatisfied'}
                      {value === 3 && 'Neutral'}
                      {value === 4 && 'Satisfied'}
                      {value === 5 && 'Very satisfied'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='design' style={styles.label}>
                How would you rate the design and layout of our website/app?
              </label>
              <div style={styles.faceContainer}>
                {[1, 2, 3, 4, 5].map((value) => (
                  <div key={value} style={styles.faceBox}>
                    <span
                      className='face'
                      style={{
                        ...styles.face,
                        ...(value === responses.design ? styles.activeFace : null),
                      }}
                      onClick={() => handleFaceClick('design', value)}
                    >
                      {value === 1 && <>&#128542;</>}
                      {value === 2 && <>&#128577;</>}
                      {value === 3 && <>&#128528;</>}
                      {value === 4 && <>&#128578;</>}
                      {value === 5 && <>&#128513;</>}
                    </span>
                    <div style={styles.description}>
                      {value === 1 && 'Very unsatisfied'}
                      {value === 2 && 'Unsatisfied'}
                      {value === 3 && 'Neutral'}
                      {value === 4 && 'Satisfied'}
                      {value === 5 && 'Very satisfied'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='content' style={styles.label}>
                Is the content on our website/app helpful and informative?
              </label>
              <div style={styles.faceContainer}>
                {[1, 2, 3, 4, 5].map((value) => (
                  <div key={value} style={styles.faceBox}>
                    <span
                      className='face'
                      style={{
                        ...styles.face,
                        ...(value === responses.content ? styles.activeFace : null),
                      }}
                      onClick={() => handleFaceClick('content', value)}
                    >
                      {value === 1 && <>&#128542;</>}
                      {value === 2 && <>&#128577;</>}
                      {value === 3 && <>&#128528;</>}
                      {value === 4 && <>&#128578;</>}
                      {value === 5 && <>&#128513;</>}
                    </span>
                    <div style={styles.description}>
                      {value === 1 && 'Very unsatisfied'}
                      {value === 2 && 'Unsatisfied'}
                      {value === 3 && 'Neutral'}
                      {value === 4 && 'Satisfied'}
                      {value === 5 && 'Very satisfied'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='form-group'>
              <label htmlFor='comments' style={styles.label}>
                Any other comments or suggestions?
              </label>
              <textarea
                id='comments'
                name='comments'
                rows='4'
                placeholder='Your comments..'
                style={styles.textarea}
                value={responses.comments}
                onChange={handleChange}
              />
            </div>

            <button type='submit' style={styles.button}>
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
