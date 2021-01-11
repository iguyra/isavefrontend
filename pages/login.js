import React from 'react';
import Router from 'next/router';
import axios from 'axios';
import Loader1 from 'react-loader-spinner';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Layout from '../components/Layout';
import Link from 'next/link';
import URLbaseAPI from '../functions/URLbaseAPI';
import {
  getFrontUser,
  redirectPage,
  getServerSideToken,
  getClientSideToken,
} from '../functions/fauthContoller';
import Loader from '../components/Loader/Loader';
import Redirect from '../components/Redirect';

class login extends React.Component {
  state = {
    email: 'admin@admin.com',
    password: 'xxxxxxxx',
    data: {},
    isLogging: false,
    error: false,
    errorMsg: '',
    shouldRedirect: false,
  };

  //   async componentDidMount() {
  //     const token = localStorage.getItem("token");

  //     const data = await getFrontUser(token);
  //     if (data) {
  //       this.setState({ shouldRedirect: true });
  //     }

  // console.log(token)
  //     if (this.state.shouldRedirect) {
  //       Router.push("/")
  //     }

  //     console.log(this.state.shouldRedirect)
  //   }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('clicked');
    try {
      const { email, password } = this.state;
      this.setState({ isLogging: true });
      const { data } = await axios.post(`${URLbaseAPI}/api/users/login`, {
        email,
        password,
      });
      localStorage.setItem('token', data.token);
      Router.push('/');
      this.setState({ data: data });
    } catch (error) {
      if (error.response === 'undefined') {
        this.setState({ errorMsg: 'something went wrong, try again later' });
        this.setState({ error: true });
        this.setState({ isLogging: false });
        return;
      }
      if (error.response.data.message) {
        this.setState({ errorMsg: error.response.data.message });
      }
      console.log('error.response', error.response);
      this.setState({ error: true });
      this.setState({ isLogging: false });
    }
  };

  render() {
    const { email, password, data, isLogging, error, errorMsg } = this.state;
    console.log(error);
    return (
      <section className="siginin" id="signin">
        {error ? <p className="error">{errorMsg}</p> : ''}
        <Link href="/user">
          <a className="siginin__sitename" id="sitename">
            iguyra <span>&larr;</span>
          </a>
        </Link>
        <form className="siginin__form" onSubmit={this.handleSubmit} action="">
          <label className="siginin__label" htmlFor="email">
            email
            <input
              className="siginin__input"
              name="email"
              type="email"
              id="email"
              placeholder="eg: res@res.com"
              onChange={this.handleChange}
              value={email}
            />
          </label>
          <label className="siginin__label" htmlFor="password">
            password
            <input
              className="siginin__input"
              name="password"
              type="password"
              id="password"
              placeholder="type password"
              onChange={this.handleChange}
              value={password}
            />
          </label>

          <button disabled={isLogging} className="siginin__button">
            {isLogging ? <Loader /> : 'login'}
          </button>

          <div className="siginin__details">
            <Link href="/forgotpassword">
              <a className="siginin__passwordforgot">forgot your password ?</a>
            </Link>
            <Link href="/signup">
              <a className="siginin__register" id="createaccount">
                create an account
              </a>
            </Link>
          </div>
        </form>
      </section>
    );
  }
}
login.getInitialProps = async (ctx) => {
  try {
    const { req, res } = ctx;

    let token = req ? getServerSideToken(req) : getClientSideToken();

    if (token) {
      if (typeof window === 'object') {
        return Router.push('/');
      } else {
        if (req) {
          res.writeHead(301, { location: '/' });
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

export default login;
