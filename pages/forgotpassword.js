import React from "react";
import Router from "next/router";
import axios from "axios";
import Layout from "../components/Layout";
import Link from "next/link";

class forgotpassword extends React.Component {
  state = {
    email: "",
    data: {},
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email } = this.state;
    console.log("email", email);
    console.log("on login");
    const { data } = await axios.post("https://cors-anywhere.herokuapp.com/http://localhost:3080/api/users/forgotPassword", { email });

    localStorage.setItem("token", data.token);

    console.log("login user:", data.token);
    Router.push("/");
    this.setState({ data: data });
  };

  render() {
    const { data } = this.state;
    return (
        <section className="siginin" id="signin">
          <Link href="/">
            <a className="siginin__sitename" id="sitename">
              iguyra <span>&larr;</span>
            </a>
            </Link>
            <p className="siginin__paragraph">
                we will send you and email to reset your password
            </p>
          <form className="siginin__form" onSubmit={this.handleSubmit} action="">
            <label className="siginin__label" htmlFor="email">
             
              <input
                className="siginin__input"
                name="email"
                type="email"
                id="email"
                placeholder="please enter your email"
                onChange={this.handleChange}
              />
            </label>
           
            <button className="siginin__button">submit</button>

            <div className="siginin__details">
              
              <Link href="/login">
                <a className="siginin__register" id="createaccount">
                  login
                </a>
              </Link>
            </div>
          </form>
        </section>
    );
  }
}

export default forgotpassword;