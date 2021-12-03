import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './ContactStyle.css'
import Button from '../Button/Button'
import Resume from '../misc./Luna.Cuevas.prod.pdf'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    // EmailJS setting id and template id variables
    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_neh1oii';
            const templateId = 'template_vdw3ffh';
            const userId = 'user_JcD1331LVSdIeKGHTgDqA';
            const templateParams = {
                name,
                email,
                message
            };
            // If variable isn't set or input is missing, error will be console logged
            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));
            // After email has been sent, all variables are now set to blank again.
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            // if no data is input, error will alert user
            alert('Please fill in all fields.');
        }
    }
    return (
        <>
            <h1 id='contact' className='title'>Contact Me</h1>
            <div className='contact-container'>
                <div id="contact-form">
                    <div className='name-email'>
                        {/* input fields for name and email */}
                        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                        <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='message'>Message</div>
                    {/* Input field for message */}
                    <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    <div onClick={submit} className='button'>
                        <Button  text={'Send Message'} />
                    </div>
                    <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
                </div>
                <div className='contact-text'>
                    <h2>Let's Talk?</h2>
                    <p>I'm available to take on projects and collaborate with a team to find solutions. Tell me more about your goals and the vision you're seeking to accomplish, I'll get back to you promptly.</p>
                    <p>Via Email: <a className='special-a-tag' href="mailto:s.cuevas14@gmail.com" target='_blank'>s.cuevas14@gmail.com</a></p>
                    <p>Via <a className='special-a-tag' href="https://www.linkedin.com/in/luna-cuevas/" target='_blank'>LinkedIn</a></p>
                    <div className='button'>
                        <Button link={ Resume }  text={ 'Resume' } />
                        <Button link='https://github.com/luna-cuevas' text='Github' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact
