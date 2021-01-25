import React from 'react';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import arrival from '../data/arrival.json';
import AddToCartButton from './cart/AddToCartButton';

export default class Arrivals extends React.Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  render() {
    return (
      <section data-aos="fade-up" className="arrivals">
        <h4 className="product__phrase">new arrivals</h4>

        {/* <ul className="arrivals__list">
          {arrival.map((arrival) => {
            return (
              <li key={arrival.name} className="arrivals__item">
                <Link
                  href={`/products/[product]}`}
                  as={`/products/${arrival._id}`}
                >
                  <a className="arrivals__link">
                    <img src={arrival.image} alt="" className="arrivals__img" />
                    <div className="arrivals__details">
                      <p className="arrivals__name">{arrival.name}</p>
                      <p className="arrivals__price">{arrival.price} GH</p>
                    </div>
                  </a>
                </Link>
                <AddToCartButton product={arrival} />
              </li>
            );
          })}
        </ul> */}
        <div className="arrival">
          <div className="arrival__list">
            {arrival.map((arrival) => {
              return (
                <div className="arrival__item">
                  <div className="arrival__imgcontainer">
                    <Link
                      key={arrival.name}
                      href={`/products/[product]}`}
                      as={`/products/${arrival._id}`}
                    >
                      <img
                        src={arrival.image}
                        alt=""
                        className="arrival__img"
                      />
                    </Link>
                  </div>
                  <div className="arrival__detailscontainer">
                    <div className="arrival__name">{arrival.name}</div>
                    <div className="arrival__price">GHS 404</div>
                  </div>
                  <AddToCartButton product={arrival} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
