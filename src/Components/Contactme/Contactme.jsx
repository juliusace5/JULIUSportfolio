import React, { useState } from 'react';
import axios from 'axios';
import Styles from './Contactme.module.css';

const Contactme = ({ id }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Form is valid, submit the form
      try {
        await axios.post('https://api.brevo.com/v3/smtp/email/send', {
          sender: {
            name: formData.firstName + ' ' + formData.lastName,
            email: formData.email,
          },
          to: [
            {
              email: 'Juliusanighoro6@gmail.com', // Replace with your email address
              name: 'Julius Anighoro',
            },
          ],
          subject: 'Contact Form Submission',
          htmlContent: `<p>${formData.message}</p>`,
        }, {
          headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.REACT_APP_SENDINBLUE_API_KEY, // Use environment variable
          },
        });

        setSuccessMessage('Your message has been sent successfully!');
        // Reset form
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setErrors({});
      } catch (error) {
        console.error('Error sending email:', error);
        setErrors({ submit: 'Failed to send your message. Please try again later.' });
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div id={id} className={Styles.container}>
      <div className={Styles.innercontainer}>
        <div className={Styles.header}>
          <h3>Contact Me</h3>
        </div>
        <div className={Styles.form}>
          <form onSubmit={handleSubmit}>
            <div className={Styles.flex}>
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <div className={Styles.error}>{errors.firstName}</div>}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <div className={Styles.error}>{errors.lastName}</div>}
              </div>
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className={Styles.error}>{errors.email}</div>}
            </div>
            <div className={Styles.message}>
              <textarea
                name="message"
                placeholder="Your Message..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              ></textarea>
              {errors.message && <div className={Styles.error}>{errors.message}</div>}
            </div>
            {errors.submit && <div className={Styles.error}>{errors.submit}</div>}
            {successMessage && <div className={Styles.success}>{successMessage}</div>}
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactme;

