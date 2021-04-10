import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <main className="contact-container">
            <div className="text-center py-5  d-flex justify-content-center">
                <div>
                <h2 className="text-info mt-5">CONTACT US</h2>
                <h1 className="text-light mt-3 mb-5">Always Connect With Us</h1>
                <div class="form-floating mx-auto my-3">
                    <input type="email" class="form-control  " id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="type" class="form-control " id="floatingPassword" placeholder="subject" />
                    <label for="floatingPassword">Subject</label>
                </div>
                <br />
                <div class="form-floating">
                    <textarea class="form-control " placeholder="Your Message" id="floatingTextarea2" style={{ height: '200px' }}></textarea>
                    <label for="floatingTextarea2">Your Message</label>
                </div> 
                <br />
                <button className="w-50 p-1 submitBtn">SUBMIT</button> 
            </div>
            </div> 
        </main>
    );
};

export default Contact;