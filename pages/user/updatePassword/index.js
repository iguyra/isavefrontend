import React from "react";
import Link from "next/link";
import axios from "axios";
import Header from "../../../components/Heading";
import Layout from "../../../components/Layout";

class updatePassword extends React.Component {
  state = {
    user: {},
    currentPassword: "",
    password: "",
    passwordConfirm: "",

  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    console.log("componentmounted", token);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { currentPassword,password,passwordConfirm } = this.state;
    console.log(currentPassword,password,passwordConfirm)
    const { data } = await axios.patch("http://localhost:3080/api/users/updatePassword", {currentPassword,password,passwordConfirm},config);


    this.setState({ data: data });
  };

  render() {
    return (
      <section className="useredit" id="signup">
        <div className="secondaryheading">
          <p className="secondaryheading__word">change password</p>
        </div>
        <form className="form" action="" onSubmit={this.handleSubmit}>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              current password
            </label>
            <input onChange={this.handleChange} className="form__input" type="password" name="currentPassword"  />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              new password
            </label>
            <input  onChange={this.handleChange}  className="form__input" type="password" name="password"  />
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="email">
              retype new password
            </label>
            <input  onChange={this.handleChange} className="form__input" type="password" name="passwordConfirm" />
          </div>

          <button className="form__button">save</button>
        </form>
      </section>
    );
  }
}

export default updatePassword;
