import React from 'react'
import { useState } from 'react'
import './contact.css'
/*import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'*/
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef ();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2raoktn', 'template_8a9umve', form.current, 'nl3RX2uToYKSR8DhZ')
    e.target.reset();
  };

  const [email, setEmail] = useState("");
  const [message,setMessage] = useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("Email sent");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is not valid");
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  }

  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* <div className="contact__options">
          <a href='mailto:torthbandt@gmail.com?subject=Add Subject here ' target='_blank' rel='noreferrer'>
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h2>Email</h2>
              <h3>torthbandt@gmail.com</h3>
              <p>Send a message</p>
            </article>
          </a>
          <a href='https://t.me/thomas_orthbandt' target='_blank' rel='noreferrer'>
            <article className="contact__option">
              <FaTelegramPlane className='contact__option-icon'/>
              <h2>Telegram</h2>
              <h3>thomas_orthbandt</h3>
              <p>Send a message</p>
            </article>
          </a>
        </div>
        END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required value={email} onChange={handleOnChange} autoCapitalize='none'/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <input name="utm_source" type="hidden" value=""/>
          <input name="utm_medium" type="hidden" value=""/>
          <input name="utm_content" type="hidden" value=""/>
          <input name="utm_term" type="hidden" value=""/>
          <input name="utm_campaign" type="hidden" value="&"/>
          <input name="form_url" type="hidden" value="/"/>
            
          <div className="btns">
            <button type='submit' className='btn btn-primary' onClick={emailValidation}>Send Message</button>
            <button type='reset' className='btn btn-primary'>Reset</button>
          </div>
          <p className='message'>{message}</p>
        </form>
      </div>
    </section>
  )
}

export default Contact