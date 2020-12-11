import React from "react";
import Router from "next/router";
import axios from "axios";
import Layout from "../components/Layout";
import Link from "next/link";
import URLbsaeAPI from "../functions/URLbaseAPI"


class forgotpassword extends React.Component {
  state = {
    email: "",
    data: {},
    errorMsg: "",
    error: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    try {
      event.preventDefault();

    const { email } = this.state;
   
    const { data } = await axios.patch(`${URLbsaeAPI}/api/users/forgotPassword`, { email });

    console.log("password reset sent",data);
    // Router.push("/");
    this.setState({ data: data });
    } catch (error) {
      this.setState({errorMsg:error.response.data.message})
      this.setState({error:true})
   }
  };

  render() {
    const { data, error,errorMsg } = this.state;
    return (
      <section className="siginin" id="signin">
                  {error ? <p className="error">{ errorMsg}</p>: ""}

          <Link href="/">
            <a className="siginin__sitename" id="sitename">
              iguyra <span>&larr;</span>
            </a>
            </Link>
        <p className="siginin__paragraph">
          {data.message ? "token sent to your email" : " we will send you and email to reset your password"}
               
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
           
          <button className="siginin__button">{ data.message ? "submited": "submit"}</button>

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
