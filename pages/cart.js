import React from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import cookieCutter from 'cookie-cutter';

import {
  URLbaseAPI,
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
    try {
      const token = cookieCutter.get('token');
      console.log('token', token);

      const cart = JSON.parse(localStorage.getItem('isavecart'));

      if (cart) {
        this.setState({ cart });
      }

      const data = await getFrontUser(token);
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
          <EmptyCart user={user} />
        )}
      </Layout>
    );
  }
}

export default cart;
