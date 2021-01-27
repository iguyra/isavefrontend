import React from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import URLbaseAPI from '../functions/URLbaseAPI';
import cookieCutter from 'cookie-cutter';

import {
  getFrontUser,
  getClientSideToken,
  getServerSideToken,
} from '../functions/fauthContoller';
import CartWithItem from '../components/cart/cartpage/cartWithItem';
import EmptyCart from '../components/cart/cartpage/EmptyCart';

class cart extends React.Component {
  state = {
    user: {},
    cart: [],
  };

  async componentDidMount() {
    console.log();
    try {
      // const token = cookieCutter.get('token');
      // console.log('token', token);

      const cart = JSON.parse(localStorage.getItem('isavecart'));

      if (cart) {
        this.setState({ cart });
      }

      const data = await getFrontUser();
      if (data) {
        this.setState({ user: data.user });
      }
    } catch (err) {
      console.log('error', err.response);
    }
  }

  render() {
    const { user, cart } = this.state;

    return (
      <Layout>
        {cart.totalProductsCount >= 1 ? (
          <CartWithItem />
        ) : (
          <EmptyCart user={this.props.user} />
        )}
      </Layout>
    );
  }
}

export async function getServerSideProps(ctx) {
  try {
    const { req, res } = ctx;
    let config;

    if (req) {
      config = {
        headers: {
          Cookie: req ? `token=${req.cookies.token}` : '',
        },
      };
    }
    const { data } = await axios.get(`${URLbaseAPI}/api/users/cart`, config);

    console.log(data, 'data');

    if (!data) {
      return {
        user: {},
      };
    }

    return {
      props: { user: data ? data.user : {} }, // will be passed to the page component as props
    };
  } catch (err) {
    console.log('erorrr', err.response);
    // console.log(err.response.data.error.statusCode === 401);
    // if (err.response.data.error.statusCode === 401) {
    //   console.log('yess');

    //   redirectPages(ctx, err);
    // }
  }
}

export default cart;
