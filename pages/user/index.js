import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import cookieCutter from 'cookie-cutter';

import Header from '../../components/Heading';
import Layout from '../../components/Layout';
import URLbaseAPI from '../../functions/URLbaseAPI';
import {
  getServerSideToken,
  getClientSideToken,
  redirectPages,
} from '../../functions/fauthContoller';

function user(props) {
  let { user } = props;

  const logUserOut = () => {
    console.log('clearrrd');
    cookieCutter.set('token', '', { expires: new Date(0) });
    Router.push('/');
  };

  return (
    <Layout>
      <section className="user">
        <div className="user__container">
          <div className="user__details">
            <p className="user__email">{user.email}</p>
            <p className="user__name">
              {user.firstname ? `welcome, ${user.firstname}` : 'welcome'}
            </p>
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
              <i className="fas fa-info-circle"></i>
              <Link href="/user/edit">
                <a className="account__orders">details</a>
              </Link>
              <p className="account__orders"></p>
            </div>
            <i className="fas fa-angle-double-right"></i>
          </li>
          <li className="account__item">
            <div className="account__first">
              <i className="fas fa-key"></i>{' '}
              <Link href="/user/updatepassword">
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

user.getInitialProps = async (ctx) => {
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
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(`${URLbaseAPI}/api/users/cart`, config);

    return {
      user: data ? data.user : {}, // will be passed to the page component as props
    };
  } catch (err) {
    console.log('erorrr');
    console.log(err.response.data.error.statusCode === 401);
    if (err.response.data.error.statusCode === 401) {
      console.log('yess');

      redirectPages(ctx, err);
    }
  }
};

export default user;
