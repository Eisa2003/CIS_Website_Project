import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const styles = {
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: '3px',
  },
  outerContainer: {
    backgroundColor: '#EAE3C9',
    padding: '10px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'relative', // Ensure relative positioning for inner elements
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '16px',
    color: '#888',
    border: 'none',
    background: 'none',
  },
  innerContainer: {
    backgroundColor: '#FAFDF3',
    borderRadius: '5px',
    padding: '10px',
    marginTop: '5px',
  },
  textCenter: {
    textAlign: 'center',
    fontSize: '16px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '1px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '4px 0',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '10px',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    margin: '2px 0',
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
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    marginTop: '1px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  faceContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '1px',
  },
  faceBox: {
    textAlign: 'center',
    marginBottom: '1px',
    flex: '1 0 20%', // Adjust based on the number of faces per row
  },
  face: {
    fontSize: '24px',
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
    marginTop: '2px',
    textTransform: 'capitalize',
  },
  thankYouMessage: {
    backgroundColor: '#9AA581',
    color: 'white',
    padding: '10px',
    borderRadius: '4px',
    marginTop: '10px',
    textAlign: 'center',
  },
};

const SurveyPopup = ({ isOpen, onClose }) => {
  const [responses, setResponses] = useState({
    navigate: 0,
    design: 0,
    content: 0,
    comments: '',
  });
  const [submitted, setSubmitted] = useState(false); // State to track if form is submitted

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

    // Constructing the form data to send using emailjs
    const formData = {
      navigate: responses.navigate,
      design: responses.design,
      content: responses.content,
      comments: responses.comments,
    };

    emailjs.send('service_ior1kb4', 'template_7cl4psg', formData, 'xkNP7oUx7IMWzN_v-')
      .then((result) => {
        console.log(result.text);
        setResponses({
          navigate: 0,
          design: 0,
          content: 0,
          comments: '',
        });
        setSubmitted(true); // Set submitted to true after successful submission
        setTimeout(() => {
          onClose(); // Close the popup after submission
        }, 3000); // Close after 3 seconds
      })
      .catch((error) => {
        console.log(error.text);
        // Handle error if needed
      });
  };

  if (!isOpen) return null; // Render nothing if isOpen is false

  return (
    <div className="survey-popup">
      <div style={styles.body}>
        <div style={styles.outerContainer}>
          <button
            style={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            &#10006;
          </button>
          <h5 style={styles.textCenter}>Your Opinion Matters! 😊</h5>
          <h6 style={styles.textCenter}>Please Leave Your Feedback and Help Us Improve</h6>
          <div style={styles.innerContainer}>
            {!submitted ? (
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
                    Any additional comments or suggestions?
                  </label>
                  <textarea
                    id='comments'
                    name='comments'
                    style={styles.textarea}
                    value={responses.comments}
                    onChange={handleChange}
                    rows='4'
                    placeholder='Your comments..'
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-primary'
                  style={styles.button}
                >
                  Submit Feedback
                </button>
              </form>
            ) : (
              <div style={styles.thankYouMessage}>
                <p>Thank you for your feedback!</p>
                <p>We appreciate your time and effort.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyPopup;
