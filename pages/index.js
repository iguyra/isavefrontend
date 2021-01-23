import Layout from '../components/Layout';
import Categories from '../components/Categories';
import Slides from '../components/Slides';
import Product from '../components/Product';
import Arrivals from '../components/Arrivals';
import Footer from '../components/Footer';
import URLbaseAPI from '../functions/URLbaseAPI';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
axios.defaults.withCredentials = true;

function HomePage({ user }) {
  return (
    <Layout user={user}>
      <Categories />
      <Slides />
      <Product />
      <Arrivals />
      <Footer />
    </Layout>
  );
}

export default HomePage;
