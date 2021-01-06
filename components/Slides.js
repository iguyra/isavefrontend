import React from "react";
import Aos from "aos";
import "aos/dist/aos.css"

export default class Slides extends React.Component {
  componentDidMount() {
    Aos.init({duration: 2000})
  }
  render() {
    return (
      <section className="slides">
        <ul className="slides__items">
          <li className="slides__list">
            <img data-aos="zoom-out" className="slides__img" src="/static/lili.jpg" alt="hero" />
            <p className="slides__text">
              <a href="#products" className="slides__text--link">
                shop now
              </a>
            </p>
            <p data-aos="zoom-out" className="slides__bottomtext">
              flash sale<span className="slides__textspan">explore your taste</span>{" "}
            </p>
          </li>
        </ul>
      </section>
    );
  }
}
