import React from "react";
import Link from "next/link";
import axios from "axios";
import Header from "../../../components/Heading";
import Layout from "../../../components/Layout";
import { getFrontUser } from "../../../functions/fauthContoller";
import URLbaseAPI from "../../../functions/URLbaseAPI"


class edit extends React.Component {
  state = {
    user: {},
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    gender: "",
    isUpdating: false,
    isUpdated: false,
    error : false

  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");
    const data = await getFrontUser(token);
    if (data) {
      this.setState({ user: data.user });
    }
    console.log(data)
  }

  handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const {isUpdated ,firstname, lastname,phonenumber } = this.state;
      this.setState({ isUpdating: true })
      const token = localStorage.getItem("token")
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.patch(`${URLbaseAPI}/api/users/updateUser`, { firstname, lastname, phonenumber },config);
            console.log("data",data)

      this.setState({ user: data });
      this.setState({isUpdating: false})
      this.setState({isUpdated: true})
    } catch (error) {
      console.log(error.response)
      this.setState({isUpdating: false})

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

  render() {
    const {isUpdated, user,isUpdating} = this.state
    console.log(user)
    return (
      <section className="useredit" id="signup">
        <div className="secondaryheading">
          <p className="secondaryheading__word">account details</p>
        </div>
        {isUpdated && <p className="error">user details updated</p>}
        <form className="form" action="" onSubmit={this.handleSubmit}>
          <div className="form__group">
            <label className="form__label" htmlFor="firstname">
              first name
            </label>
            <input className="form__input" name="firstname" type="text" onChange={this.handleChange} defaultValue={ user.firstname ? user.firstname : ""}/>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="lastname">
              last name
            </label>
            <input className="form__input" type="text" name="lastname" defaultValue={ user.lastname ? user.lastname : ""} onChange={this.handleChange}/>
          </div>

       

          <div className="form__group">
            <label className="form__label" htmlFor="phonenumber">
              phone number
            </label>
            <input className="form__input" type="text" name="phonenumber" defaultValue={user.phonenumber ? user.phonenumber : ""} onChange={this.handleChange}/>
          </div>

          <div className="form__group">
            <label className="form__label" htmlFor="gender">
              gender
            </label>
            <select name="gender" id=""onChange={this.handleChange}>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>

          <button className="form__button">{ isUpdating ? "updating": "save"}</button>
        </form>
      </section>
    );
  }
}

export default edit;
