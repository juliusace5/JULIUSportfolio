import React, { useState } from 'react';
import Styles from './Contactme.module.css';
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const Contactme = ({ id }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Form is valid, submit the form
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setErrors({});
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
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className={Styles.scrollUp} onClick={() =>{
        window.scrollTo({top:0, left:0, behavior:'smooth'});
      }}>
        <BsFillArrowUpCircleFill className={Styles.iconscroll}/>
      </div>
    </div>

    
  );
};

export default Contactme;

