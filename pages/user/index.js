import React, {useState,useEffect} from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import Header from "../../components/Heading";
import Layout from "../../components/Layout";
import URLbaseAPI from "../../functions/URLbaseAPI"


function Heading (props) {
//  const [user, setUser] = useState()
  const {data} = props
//  console.log("user", data.user.email)
  

  const logUserOut = () => {
    console.log("clearrrd");
    localStorage.clear();
    Router.push("/");
  };

 
    return (
      <Layout>
        <section className="user">
          <div className="user__container">
            <div className="user__details">
              <p className="user__email">{data.user.email}</p>
              <p className="user__name">reston anderson</p>
            </div>
            <div className="user__star">
              <i className="fas fa-user-check"></i>
            </div>
          </div>
        </section>
        <div className="module">
          <p className="module__header">my isave account</p>
        </div>
        <section className="account">
          <ul className="account__list">
            <li className="account__item">
              <div className="account__first">
                <i className="fab fa-first-order"></i>
                <Link href="/orders">
                  <a className="account__orders">orders</a>
                </Link>
              </div>
              <i className="fas fa-angle-double-right"></i>
            </li>
            <li className="account__item">
              <div className="account__first">
                <i className="fab fa-first-order"></i>
                <Link href="/saveditems">
                  <a className="account__orders">saved items</a>
                </Link>
              </div>
              <i className="fas fa-angle-double-right"></i>
            </li>
          </ul>
        </section>
        <div className="module">
          <p className="module__header">account settings</p>
        </div>
        <section className="account">
          <ul className="account__list">
            <li className="account__item">
              <div className="account__first">
                <i className="fab fa-first-order"></i>
                <Link href="/user/edit">
                  <a className="account__orders">details</a>
                </Link>
                <p className="account__orders"></p>
              </div>
              <i className="fas fa-angle-double-right"></i>
            </li>
            <li className="account__item">
              <div className="account__first">
                <i class="fab fa-first-order"></i>
                <Link href="/user/updatepassword">
                  <a className="account__orders">change paswword</a>
                </Link>
              </div>
              <i className="fas fa-angle-double-right"></i>
            </li>
          </ul>
        </section>
        <div className="logout">
          <Link href="/">
            <a onClick={logUserOut} className="logout__word">
              logout
            </a>
          </Link>
        </div>
      </Layout>
    );
  
}

// export async function getServerSideProps (context) {
//   let token;
//   // if (typeof window === 'object') {
//   //   token = localStorage.getItem("token");
//   // }

//   console.log("context.req.cookies",context.req.cookies.jwt)
  
//   if (context.req.cookies.jwt) {
//     token = context.req.cookies.jwt

//   }

//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const { data } = await axios.get(`${URLbaseAPI}/api/users/cart`, config);
//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }

Heading.getInitialProps = async (ctx) => {
  let token 
  let toke 

  if (!process.browser) {
    console.log("loginf upp")
     token = ctx.req.cookies.jwt

    // console.log(ctx.req.cookies.jwt)
    console.log(ctx.req.headers.cookie.split("=")[1])
  toke = ctx.req.headers.cookie.split("=")[1]
  }
  
  const config = {
        headers: {
          Authorization: `Bearer ${toke}`,
        },
      };
    
      const { data } = await axios.get(`${URLbaseAPI}/api/users/cart`, config);

  return { data }
}


export default Heading;
