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

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }
    return (
        <>
            <h1 id='contact' className='title'>Contact Me</h1>
            <div className='contact-container'>
            <div id="contact-form">
                <div className='name-email'>
                    <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='message'>Message</div>
                <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                <div onClick={submit} className='button'>
                    <Button  text={'Send Message'} />
                </div>
                <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
            </div>
            <div className='contact-text'>
                <h2>Let's Talk?</h2>
                <p>I'm open to working on projects or collaborating with people, I'd love to hear your ideas and work with you. </p>
                <p><a className='special-a-tag' href="mailto:s.cuevas14@gmail.com" target='_blank'>Via Email: s.cuevas14@gmail.com</a></p>
                <p><a className='special-a-tag' href="https://www.linkedin.com/in/luna-cuevas/" target='_blank'>Via LinkedIn</a></p>
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
