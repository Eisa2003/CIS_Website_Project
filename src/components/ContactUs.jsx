import React from 'react';
import '../../src/style.css';

export default function ContactUs() {
    let styles = {
        body: {
            fontFamily: 'Arial, Helvetica, sans-serif',
          },
          container: {
            borderRadius: '5px',
            backgroundColor: '#f2f2f2',
            padding: '10px',
            maxWidth: '600px',
            margin: '0 auto',
          },
          textCenter: {
            textAlign: 'center',
          }
    };

    return (
        <div style={styles.body} className='container'>
          <h3 className='text-center'>Feel Free To Reach Out To Us</h3>
          <hr/>
            <div style={styles.container}>
                <form action="/action_page.php">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." className="contactInput"/>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." className="contactInput"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email.." className="contactInput"/>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." className="contactInput" style={{ height: '120px' }}></textarea>

                    <input type="submit" value="Submit" className= "submitButton"/>
                </form>
            </div>
        </div>
    );
}
