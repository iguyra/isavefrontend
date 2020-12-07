import Link from "next/link";
import allproduct from "../../data/allproducts";
import Card from "../../components/Card";


const Allproducts = ({ product }) => {
  return (
   
      <section className="allproducts">          
{allproduct.map(product => {
   return <Card product={product} />
})}
</section>
  );
};

export default Allproducts;
