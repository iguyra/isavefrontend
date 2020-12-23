import Link from "next/link";
import allproduct from "../../data/allproducts";
import Aos from "aos";

import Card from "../../components/Card";


const Allproducts = ({ product }) => {
  return (
   
      <section data-aos="fade-in" className="allproducts">          
{allproduct.map(product => {
   return <Card key={product._id} product={product} />
})}
</section>
  );
};

export default Allproducts;
