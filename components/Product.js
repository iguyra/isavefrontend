import React from "react";
import axios from "axios";
import Link from "next/link";
import Card from "./Card";
import Aos from "aos";
import "aos/dist/aos.css"
import URLbaseAPI from "../functions/URLbaseAPI"


import products from "../data/products.json";

export default class Product extends React.Component {
  state = {
    product: [],
  };

  componentDidMount() {
    Aos.init({duration: 2000})
  }

  async componentDidMount() {
    const { data } = await axios.get(`${URLbaseAPI}/api/products`);
    this.setState({ product: data.product });
  }

  render() {
    const { product } = this.state;

    return (
      <section data-aos="fade-in" className="section--product" id="products">
        <h4 className="product__phrase">featured products</h4>

        <div className="product">
        {/* <div className="product__list"> */}
          {products.map((product) => {
     
            return <Card key={product._id} product={product} />;
          })}
        {/* </div> */}
        <div className="">
          <Link href="/allproducts">
            <p>all products</p>
          </Link>
        </div>
        </div>
        
      
      </section>
    );
  }
}
