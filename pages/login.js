import React from "react";
import Router from "next/router";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css"
import Layout from "../components/Layout";
import Link from "next/link";
import URLbaseAPI from "../functions/URLbaseAPI"

class login extends React.Component {
  state = {
    email: "admin@admin.com",
    password: "xxxxxxxx",
    data: {},
    isLogging: false,
    error: false,
    errorMsg: ""
  };



  

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { email, password } = this.state;
    console.log("email", email, password);
    console.log("on login");
      this.setState({ isLogging: true })
    const { data } = await axios.post(`${URLbaseAPI}/api/users/login`, { email, password });


    localStorage.setItem("token", data.token);

    console.log("login user:", data.token);
    
    Router.push("/");
    this.setState({ data: data });
    } catch (error) {
      this.setState({errorMsg:error.response.data.message})
      this.setState({error:true})
   }
  };

  render() {
    const {email,password, data, isLogging, error, errorMsg } = this.state;
    console.log(error)
    return (
      <Layout>
        <section className="siginin" id="signin">
          {error ? <p className="error">{ errorMsg}</p>: ""}
          <Link href="/">
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

            <button className="siginin__button">{ isLogging ? "logging": "login"}</button>

            <div className="siginin__details">
              <Link href="/forgotpassword">
                <a className="siginin__passwordforgot">forgot your password ?</a>
              </Link>
              <Link  href="/signup">
                <a className="siginin__register" id="createaccount">
                  create an account
                </a>
              </Link>
            </div>
          </form>
        </section>
      </Layout>
    );
  }
}

export default login;
