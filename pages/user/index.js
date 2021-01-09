import React, {useState,useEffect} from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import Header from "../../components/Heading";
import Layout from "../../components/Layout";
import URLbaseAPI from "../../functions/URLbaseAPI"
import { getServerSideToken,getClientSideToken, redirectPage } from "../../functions/fauthContoller";



function user (props) {
  let { user } = props
 
  const logUserOut = () => {
    console.log("clearrrd");
    localStorage.clear();
    Router.push("/");
  };

 
    return (
      <Layout>
        <section className="user">
          <div className="user__container">
            <div className="user__details">
              <p className="user__email">{user.email}</p>
              <p className="user__name">{user.firstname ? `welcome, ${user.firstname}` : "welcome" }</p>
            </div>
            <div className="user__star">
              <i className="fas fa-user-check"></i>
            </div>
          </div>
        </section>
        <div className="module">
          <p className="module__header">my isave account</p>
        </div>
        <section className="account">
          <ul className="account__list">
            <li className="account__item">
              <div className="account__first">
                <i className="fab fa-first-order"></i>
                <Link href="/orders">
                  <a className="account__orders">orders</a>
                </Link>
              </div>
              <i className="fas fa-angle-double-right"></i>
            </li>
            <li className="account__item">
              <div className="account__first">
                <i className="far fa-heart"></i>
                <Link href="/saveditems">
                  <a className="account__orders">saved items</a>
                </Link>
              </div>
              <i className="fas fa-angle-double-right"></i>
            </li>
          </ul>
        </section>
        <div className="module">
          <p className="module__header">account settings</p>
        </div>
        <section className="account">
          <ul className="account__list">
            <li className="account__item">
              <div className="account__first">
                <i class="fas fa-info-circle"></i>
                <Link href="/user/edit">
                  <a className="account__orders">details</a>
                </Link>
                <p className="account__orders"></p>
              </div>
              <i className="fas fa-angle-double-right"></i>
            </li>
            <li className="account__item">
              <div className="account__first">
              <i class="fas fa-key"></i>                <Link href="/user/updatepassword">
                  <a className="account__orders">change paswword</a>
                </Link>
              </div>
              <i className="fas fa-angle-double-right"></i>
            </li>
          </ul>
        </section>
        <div className="logout">
          <Link href="/">
            <a onClick={logUserOut} className="logout__word">
              logout
            </a>
          </Link>
        </div>
      </Layout>
    );
  
}


user.getInitialProps  = async(ctx) => {
  try {
  const {req} = ctx
  
    let token = req ? getServerSideToken(req) : getClientSideToken()  
  
    

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    };

    const { data } = await axios.get(`${URLbaseAPI}/api/users/cart`, config);
    console.log(data)
  
  return {
         user: data.user ? data.user : {} // will be passed to the page component as props
      }
  } catch (err) {
   return redirectPage(ctx,err)
 }
}








export default user;
