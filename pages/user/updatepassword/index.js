import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';

import URLbaseAPI from '../../../functions/URLbaseAPI';
import {
  getFrontUser,
  redirectPage,
  getServerSideToken,
  getClientSideToken,
} from '../../../functions/fauthContoller';

class updatepassword extends React.Component {
  state = {
    user: {},
    currentPassword: 'xxxxxxxx',
    password: 'xxxxxxxx',
    passwordConfirm: 'xxxxxxxx',
    errorMsg: '',
    isUpdating: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('clicked');
    try {
      const token = localStorage.getItem('token');
      this.setState({ isUpdating: true });

      console.log('componentmounted', token);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const { currentPassword, password, passwordConfirm } = this.state;
      console.log(currentPassword, password, passwordConfirm);
      const { data } = await axios.patch(
        `${URLbaseAPI}/api/users/updatePassword`,
        { currentPassword, password, passwordConfirm },
        config
      );

      console.log('password updated');
      this.setState({ data: data });
      Router.push('/user');
    } catch (error) {
      console.log('error', error.response.data);
      this.setState({ errorMsg: error.response.data });
      this.setState({ error: true });
      this.setState({ isUpdating: false });
    }
  };

  render() {
    const {
      isUpdating,
      error,
      errorMsg,
      currentPassword,
      password,
      passwordConfirm,
    } = this.state;
    return (
      <section className="useredit" id="signup">
        <div className="secondaryheading">
          <p className="secondaryheading__word">change password</p>
        </div>
        {error ? <p className="error">{errorMsg.message}</p> : ''}
        <form className="form" action="" onSubmit={this.handleSubmit}>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              current password
            </label>
            <input
              onChange={this.handleChange}
              className="form__input"
              type="password"
              name="currentPassword"
              value={currentPassword}
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              new password
            </label>
            <input
              onChange={this.handleChange}
              className="form__input"
              type="password"
              name="password"
              value={password}
            />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="email">
              retype new password
            </label>
            <input
              onChange={this.handleChange}
              className="form__input"
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
            />
          </div>

          <button disabled={isUpdating} className="form__button">
            {isUpdating ? 'updating...' : 'save'}
          </button>
        </form>
      </section>
    );
  }
}

updatepassword.getInitialProps = async (ctx) => {
  try {
    const { req, res } = ctx;

    let token = req ? getServerSideToken(req) : getClientSideToken();

    if (!token) {
      if (typeof window === 'object') {
        return Router.push('/login');
      } else {
        if (req) {
          res.writeHead(301, { location: '/login' });
          return res.end();
        }
      }
    }

    return {
      user: {}, // will be passed to the page component as props
    };
  } catch (err) {
    if (err) {
      if (typeof window === 'object') {
        console.log('browser object');
        Router.push('/forgotpassword');
      }
    }
  }
};

export default updatepassword;
