import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'; 

// install the following
// npm i @emailjs/browser
//log in to https://dashboard.emailjs.com/sign-in
// username: helpinhamptoncounty@cisofsc.org
// password: WsL2024!

const ContactUs = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zvvpere', 'template_1nxm419', form.current, "xkNP7oUx7IMWzN_v-")
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message sent successfully!');
          setFormSubmitted(true); // Set formSubmitted to true after successful submission
        },
        (error) => {
          console.error('Failed to send message:', error);
        }
      );
  };

  const styles = {
    body: {
      fontFamily: 'Arial, Helvetica, sans-serif',
      padding: '20px',
    },
    container: {
      borderRadius: '5px',
      backgroundColor: '#EAE3C9',
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
    },
    textCenter: {
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '3px',
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
      padding: '8px',
      margin: '6px 0',
      boxSizing: 'border-box',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
      resize: 'vertical',
    },
    submitButton: {
      width: '100%',
      backgroundColor: '#9AA581',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '10px',
      transition: 'background-color 0.3s ease',
    },
    submitButtonHover: {
      backgroundColor: '#45a049',
    },
    thankYouMessage: {
      textAlign: 'center',
      backgroundColor: '#D4EDDA',
      borderRadius: '4px',
      padding: '20px',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.body}>
      <h3 style={styles.textCenter}>Contact Form</h3>
      <hr />
      <div style={styles.container}>
      <h3 style={styles.textCenter}>Message Us!</h3>
      <hr />
        {formSubmitted ? (
          <div style={styles.thankYouMessage}>
            <p>Thank you for your message!</p>
          </div>
        ) : (
          <form ref={form} style={styles.form} onSubmit={sendEmail}>
            <label htmlFor="user_name" style={styles.label}>
              Name
            </label>
            <input type="text" id="user_name" name="user_name" placeholder="Your name.." style={styles.input} />

            <label htmlFor="user_email" style={styles.label}>
              Email
            </label>
            <input type="email" id="user_email" name="user_email" placeholder="Your email.." style={styles.input} />

            <label htmlFor="message" style={styles.label}>
              Message
            </label>
            <textarea id="message" name="message" placeholder="Write something.." style={styles.textarea}></textarea>

            <input
              type="submit"
              value="Send"
              className="submitButton"
              style={styles.submitButton}
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
