import React from 'react';

export default function ContactUs() {
    const styles = {
        body: {
            fontFamily: 'Arial, Helvetica, sans-serif',
        },
        '*': {
            boxSizing: 'border-box',
        },
        input: {
            width: '100%',
            padding: '8px', // Reduced padding
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxSizing: 'border-box',
            marginTop: '4px', // Reduced margin
            marginBottom: '8px', // Reduced margin
            resize: 'vertical',
            fontSize: '14px', // Reduced font size
        },
        submitButton: {
            backgroundColor: '#04AA6D',
            color: 'white',
            padding: '8px 16px', // Reduced padding
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px', // Reduced font size
        },
        submitButtonHover: {
            backgroundColor: '#45a049',
        },
        container: {
            borderRadius: '5px',
            backgroundColor: '#f2f2f2',
            padding: '16px', // Reduced padding
            maxWidth: '400px', // Set a maximum width for the form
            margin: '0 auto', // Center the form horizontally
        },
    };

    return (
        <div style={styles.body}>
            <h3>Contact Form</h3>
            <div style={styles.container}>
                <form action="/action_page.php">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." style={styles.input} />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." style={styles.input} />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email.." style={styles.input} />

                    <label htmlFor="country">Country</label>
                    <select id="country" name="country" style={styles.input}>
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ ...styles.input, height: '120px' }}></textarea>

                    <input type="submit" value="Submit" style={styles.submitButton} />
                </form>
            </div>
        </div>
    );
}
