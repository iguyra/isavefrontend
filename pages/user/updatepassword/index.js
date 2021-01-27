import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import cookieCutter from 'cookie-cutter';

import URLbaseAPI from '../../../functions/URLbaseAPI';
import {
  getFrontUser,
  redirectPage,
  getServerSideToken,
  getClientSideToken,
  redirectPages,
} from '../../../functions/fauthContoller';

class updatepassword extends React.Component {
  state = {
    user: {},
    currentPassword: 'xxxxxxxx',
    password: 'xxxxxxxx',
    passwordConfirm: 'xxxxxxxx',
    errorMsg: '',
    isUpdating: false,
    isSuccess: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('clicked');
    try {
      const token = cookieCutter.get('token');
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
      cookieCutter.set('token', '', { expires: new Date(0) });
      cookieCutter.set('token', data.token);
      this.setState({ isUpdating: false });

      this.setState({ isSuccess: data.success });
    } catch (error) {
      this.setState({ errorMsg: error.response.data });
      console.log(error.response.data);
      this.setState({ error: true });
      this.setState({ isUpdating: false });

      console.log(error.response.data.error.statusCode === 401);
      if (error.response.data.error.statusCode === 401) {
        // cookieCutter.set('token', '', { expires: new Date(0) });
        // document.cookie =
        //   'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        // const t = cookieCutter.get('token');
        // console.log('t', t);
      }
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
      isSuccess,
    } = this.state;
    console.log(isSuccess);
    return (
      <section className="useredit" id="signup">
        <div className="secondaryheading">
          <p className="secondaryheading__word">change password</p>
        </div>
        {error ? <p className="error">{errorMsg.message}</p> : ''}
        {isSuccess && <p className="success">password updated successfully</p>}
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

export async function getServerSideProps(ctx) {
  try {
    const { req, res } = ctx;
    let token = req.cookies.token;
    console.log(token);

    return {
      props: {}, // will be passed to the page component as props
    };
  } catch (err) {
    console.log(err.response);
    // if (err.response.data.error.statusCode === 401) {
    //   redirectPages(ctx, err);
    // }
  }
}

export default updatepassword;

// if (!token) {
//   if (typeof window === 'object') {
//     return Router.push('/login');
//   } else {
//     if (req) {
//       res.writeHead(301, { location: '/login' });
//       return res.end();
//     }
//   }
// }
