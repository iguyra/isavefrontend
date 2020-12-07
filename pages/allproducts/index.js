import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Allproducts from "../../components/Allproducts/Allproducts";
import AddToCartButton from "../../components/cart/AddToCartButton";

const allproducts = (props) => {
  const { product } = props;

  return (
    <Layout>     
      <section className="collection">
        <div className="collection__header">  
          <div className="collection__img"></div>
          <p className="collection__category"> all products  </p>
        </div>
        <p className="collection__description">
        iguyra is a african fashion brand with beautiful ankara prints pieces vibrants for the every day queen ,and king . originating from ivorycoast ,Lilicreation encourage our queen and king to always be fabulous and beautiful
        </p>
      </section>
      <div className="collection__filter">
        <div className="collection__filter--sort">
          <select className="collection__filter--select" name="" id="">
            <option value="">price, high to low</option>
            <option value="">price, low to high</option>
          </select>
        </div>
      </div>
      <Allproducts/>
    </Layout>
  );
};


export default allproducts;
