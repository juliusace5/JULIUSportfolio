import React, { useRef, useState } from 'react';
import Styles from './Contactme.module.css';
import emailjs from '@emailjs/browser';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const Response = ({ message }) => {
  return (
    <p className={Styles.responseMessage}>{message}</p>
  );
};

const Contactme = ({ id }) => {

  const [response, showResponse] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_e7gguxe", "template_44kwulb", form.current, "pGcP635PT1hysq7g4")
      .then(
        (result) => {
          console.log(result.text);
          setResponseMessage("Thank you! Your message has been sent successfully.");
          showResponse(true);
        },
        (error) => {
          console.log(error.text);
          setResponseMessage("Message not sent. Please try again.");
          showResponse(true);
        }
      );

    form.current.reset();

    setTimeout(() => {
      showResponse(false);
    }, 5000); // Adjusted to 5 seconds for better visibility
  };

  return (
    <div id={id} className={Styles.container}>
      <div className={Styles.innercontainer}>
        <div className={Styles.header}>
          <h3>Contact Me</h3>
        </div>
        <div className={Styles.form}>
          <form ref={form} onSubmit={sendEmail}>
            <div className={Styles.flex}>
              <div>
                <input
                  type="text"
                  name="Full_name"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className={Styles.message}>
              <textarea
                name="message"
                placeholder="Your Message..."
                required
                rows="4"
              ></textarea>
            </div>
            <button type="submit">Send</button>
            <div className={Styles.row}>
              {response && <Response message={responseMessage} />}
            </div>
          </form>
        </div>
      </div>
      <div className={Styles.scrollUp} onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }}>
        <BsFillArrowUpCircleFill className={Styles.iconscroll} />
      </div>
    </div>
  );
};

export default Contactme;

