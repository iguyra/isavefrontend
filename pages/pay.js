import React, { useState, useEffect } from 'react';
import { useContext } from 'react';

import Pay from '../components/checkout/Pay';

import Link from 'next/link';

import { AppContext } from '../context/appContext';

export const pay = ({ carttt }) => {
  const [user, setUser] = useState();
  const [cartt, setCartt] = useState();

  const [cart, setCart] = useContext(AppContext);

  const productCount =
    null !== cart && Object.keys(cart).length ? cart.totalProductsCount : '';

  const totalPrice =
    null !== cart && Object.keys(cart).length ? cart.totalProductsPrice : '';

  useEffect(() => {
    let user = localStorage.getItem('inputs');
    let cart = JSON.parse(localStorage.getItem('isavecart'));

    user = JSON.parse(user);
    console.log('user', user);

    console.log('cart', cart.totalProductsPrice);

    setUser(user);
  }, []);

  console.log(carttt, productCount);
  return (
    <section className="details pay" id="pay">
      <ul className="steps">
        <p className="steps__list ">details</p>
        <p className="steps__list ">shipping</p>
        <p className="steps__list active">pay</p>
      </ul>

      <div className="details__summarycontainer">
        <p className="details__summary">summary</p>
        <ul className="details__list">
          <li className="details__item">
            <i className="far icon fa-user"></i>
            {user && user.firstname}
          </li>
          <li className="details__item">
            <i className="fas icon fa-map-pin"></i>bus stop 100
          </li>
          <li className="details__item">
            <i className="far icon fa-envelope"></i> {user && user.email}
          </li>
          <li className="details__item">
            <i className="fas icon fa-phone-alt"></i> {user && user.number}
          </li>
        </ul>
      </div>

      <div className="details__itemcontainer">
        <ul className="details__alllist">
          <li className="details__allitems details__allitems--total">
            total price
            <p className="details__allitemprice">
              GH: {cart.totalProductsPrice}
            </p>
          </li>

          {cart.products &&
            cart.products.map((product) => (
              <li className="details__allitems">
                {product.name}
                <p className="details__allitemprice">
                  GH: {product.totalPrice}
                </p>
              </li>
            ))}
        </ul>
      </div>

      <div className="details__nextcontainer">
        <Pay user={user} cart={carttt} />
      </div>
    </section>
  );
};

pay.getInitialProps = async (ctx) => {
  let cart;
  if (!ctx.req) {
    cart = localStorage.getItem('isavecart');
    cart = JSON.parse(cart);
    console.log(cart);
  }
  console.log(cart);

  return {
    carttt: cart, // will be passed to the page component as props
  };
};
export default pay;
