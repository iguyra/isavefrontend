import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import axios from "axios";
import Router from "next/router";
import URLbsaeAPI from "../functions/URLbaseAPI"


export default class signup extends React.Component {
  state = {
    email: "",
    password: "",
    passwordConfirm: "",
    data: {},
    error: false,
    errorMsg: ""
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { email, password, passwordConfirm } = this.state;

    const { data } = await axios.post(`${URLbsaeAPI}/api/users/signup`, { email, password, passwordConfirm });

    console.log("this details", email, password, passwordConfirm);
    this.setState({ data: data });
    Router.push("/login");
    } catch (error) {
      console.log(error.response.data)
      this.setState({errorMsg:error.response.data.message})
      this.setState({error:true})
    }
  };

  render() {
    const {errorMsg, error} = this.state
    return (
      <Layout>
        <section className="signup" id="signup">
        {error ? <p className="error">{ errorMsg}</p>: ""}

          <Link href="/">
            <a className="signup__sitename" id="sitename1">
              iguyra <span>&larr;</span>
            </a>
          </Link>
          <form className="signup__form" action="" onSubmit={this.handleSubmit}>
            <label className="signup__label" htmlFor="email">
              email
              <input
                className="signup__input"
                type="email"
                id="email1"
                name="email"
                placeholder="eg: res@res.com"
                onChange={this.handleChange}
              />
            </label>
            <label className="signup__label" htmlFor="password">
              password
              <input
                className="signup__input"
                type="password"
                id="password1"
                name="password"
                placeholder="type password"
                onChange={this.handleChange}
              />
            </label>
            <label className="signup__label" htmlFor="password">
              confirm password
              <input
                className="signup__input"
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="confirm password"
                onChange={this.handleChange}
              />
            </label>

            <button className="signup__button">create account</button>

            <div className="signup__details">
              <Link href="/login">
                <a className="signup__register" id="backlogin">
                  login
                </a>
              </Link>
            </div>
          </form>
        </section>
      </Layout>
    );
  }
}
