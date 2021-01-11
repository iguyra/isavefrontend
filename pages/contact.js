// const { default: Layout } = require("../components/Layout")
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import Layout from '../components/Layout';
import Loader from '../components/Loader/Loader';
import URLbaseAPI from '../functions/URLbaseAPI';

const contact = () => {
  const [inputField, setInputField] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSubmitted(true);
      setIsSuccess(false);
      const body = {
        name: inputField.name,
        email: inputField.email,
        message: inputField.message,
      };

      const { data } = await axios.post(`${URLbaseAPI}/api/contact`, body);

      console.log('dada', data);

      setIsSuccess(data.success);

      setIsSubmitted(false);

      setInputField({
        name: '',
        email: '',
        message: '',
      });
      console.log(isSubmitted);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(isSubmitted);

  return (
    <Layout>
      <section className="section__contact">
        <div className="contact">
          <div className="contact__information">
            <div className="contact__heading">CONTACT INFORMATION</div>
            <div className="contact__context">
              If you would like to talk to us about your order or you have a
              question, please get in touch. Fill in our contact form and we’ll
              get right back to you. Whether you’re looking to discuss a new
              fashion project or simply say hello, we’d love to hear from you.
            </div>

            <div className="contact__details">
              phone <span>0200000000</span>
            </div>

            <div className="contact__details">
              email <span>iguyra@iguyra.com</span>
            </div>
          </div>
          <div className="contact__heading">
            CONTACT US
            {isSuccess ? (
              <span className="success">
                we will get to you within few minutes
              </span>
            ) : (
              <span>we reply within minutes</span>
            )}
          </div>
          <form className="form" onSubmit={handleSubmit} action="">
            <div className="form__group">
              <label className="form__label" htmlFor="email">
                name
              </label>
              <input
                className="form__input"
                name="name"
                type="text"
                onChange={handleChange}
                value={inputField.name}
              />
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="email">
                email
                <input
                  className="form__input"
                  name="email"
                  type="email"
                  value={inputField.email}
                  onChange={handleChange}
                />
              </label>
              <label className="form__label" htmlFor="phone">
                phone
                <input
                  className="form__input"
                  name="phone"
                  type="number"
                  id="phone"
                  onChange={handleChange}
                  value={inputField.phone}
                />
              </label>

              <label className="form__label" htmlFor="message">
                message
                <input
                  className="form__input"
                  name="message"
                  type="text"
                  id="message"
                  onChange={handleChange}
                  value={inputField.message}
                />
              </label>
            </div>

            <button className="form__button">
              {isSubmitted ? <Loader /> : 'submit'}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default contact;
