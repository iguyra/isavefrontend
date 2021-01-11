import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Router from 'next/router';

import Header from '../../../components/Heading';
import Layout from '../../../components/Layout';
import {
  getFrontUser,
  getServerSideToken,
  getClientSideToken,
} from '../../../functions/fauthContoller';
import URLbaseAPI from '../../../functions/URLbaseAPI';

const edit = ({ userr }) => {
  const [inputField, setInputField] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    gender: '',
  });

  const [user, setUser] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setInputField({ [event.target.name]: event.target.value });
  };

  // async componentDidMount() {
  //   const token = localStorage.getItem("token");
  //   const data = await getFrontUser(token);
  //   if (data) {
  //     this.setState({ user: data.user });
  //   }
  //   console.log(data)
  // }
  const { firstname, lastname, phonenumber } = inputField;
  console.log(firstname);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsUpdating(true);
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.patch(
        `${URLbaseAPI}/api/users/updateUser`,
        { firstname, lastname, phonenumber },
        config
      );

      setUser(data);
      setIsUpdating(false);
      setIsUpdated(true);
      Router.push('/user');
    } catch (error) {
      console.log(error.response);
      setIsUpdating(false);

      // if (error.response === "undefined") {
      //    this.setState({ errorMsg: "something went wrong, try again later" })
      //   this.setState({ error: true })
      //   this.setState({ isLogging: false })
      // }
      // if (error.response.data.message) {
      //   this.setState({ errorMsg: error.response.data.message })
      // }
      // console.log("error.response",error.response)
      // this.setState({ error: true })
    }
  };
  // const { user, firstname, lastname, phonenumber } = this.props;

  // const { isUpdated, isUpdating } = this.state;

  console.log(userr);
  return (
    <section className="useredit" id="signup">
      <div className="secondaryheading">
        <p className="secondaryheading__word">account details</p>
      </div>
      {isUpdated && <p className="error">user details updated</p>}
      <form className="form" action="" onSubmit={handleSubmit}>
        <div className="form__group">
          <label className="form__label" htmlFor="firstname">
            first name
          </label>
          <input
            className="form__input"
            name="firstname"
            type="text"
            onChange={handleChange}
            defaultValue={userr.firstname}
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="lastname">
            last name
          </label>
          <input
            className="form__input"
            type="text"
            name="lastname"
            defaultValue={userr.lastname}
            onChange={handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label" htmlFor="phonenumber">
            phone number
          </label>
          <input
            className="form__input"
            type="text"
            name="phonenumber"
            defaultValue={phonenumber ? userr.phonenumber : ''}
            onChange={handleChange}
          />
        </div>

        <div className="form__group">
          <label className="form__label" htmlFor="gender">
            gender
          </label>
          <select name="gender" id="" onChange={handleChange}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>

        <button className="form__button">
          {isUpdating ? 'updating' : 'save'}
        </button>
      </form>
    </section>
  );
};

edit.getInitialProps = async (ctx) => {
  try {
    const { req } = ctx;

    let token = req ? getServerSideToken(req) : getClientSideToken();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(`${URLbaseAPI}/api/users/cart`, config);
    console.log(data, 'data');
    return {
      userr: data.user, // will be passed to the page component as props
    };
  } catch (err) {
    console.log('errorr', err);
  }
};

export default edit;
