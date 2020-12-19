// import React from "react";
// import Link from "next/link";
// import Router from "next/router";
// import axios from "axios";
// import Header from "../../components/Heading";
// import Layout from "../../components/Layout";
// import URLbaseAPI from "../../functions/URLbaseAPI"


import React, {useState,useEffect} from "react";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import Header from "../../components/Heading";
import Layout from "../../components/Layout";
import URLbaseAPI from "../../functions/URLbaseAPI"
import { getFrontUser } from "../../functions/fauthContoller";


function Heading (props) {
//  const [user, setUser] = useState()
  const {user} = props
  const { email } = user.user
  console.log(email)
  

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
              <p className="user__email">{email}</p>
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

  if (ctx.req) {
    console.log("loginf upp")
    token = ctx.req.cookies.jwt
    console.log(ctx.req.cookies.jwt)
  }

  let toke= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZDc0YjIzYjljNDY1MDAxN2Y3YzE3MSIsImlhdCI6MTYwODM0MzE3MSwiZXhwIjoxNjE2MTE5MTcxfQ.3D8vJbCFe-GZRdMZM3Pjp6GMmVImmJKaD7qtrCjkxY0"

  const user = await getFrontUser(toke)
  console.log(user)
  
  // const config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
    
  //     const { data } = await axios.get(`${URLbaseAPI}/api/users/cart`, config);

  return { user }
}


export default Heading;







































































// class Heading extends React.Component {
//   state = {
//     user: {},
//   };

//   async componentDidMount() {
//     const token = localStorage.getItem("token");

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const { data } = await axios.get(`${URLbaseAPI}/api/users/cart`, config);
//     this.setState({ user: data.user });
//   }

//   logUserOut = () => {
//     console.log("clearrrd");
//     localStorage.clear();
//     Router.push("/");
//   };

//   render() {
//     const { user } = this.state;
//     return (
//       <Layout>
//         <section className="user">
//           <div className="user__container">
//             <div className="user__details">
//               <p className="user__email">{ user.email}</p>
//               <p className="user__name">reston anderson</p>
//             </div>
//             <div className="user__star">
//               <i className="fas fa-user-check"></i>
//             </div>
//           </div>
//         </section>
//         <div className="module">
//           <p className="module__header">my isave account</p>
//         </div>
//         <section className="account">
//           <ul className="account__list">
//             <li className="account__item">
//               <div className="account__first">
//                 <i className="fab fa-first-order"></i>
//                 <Link href="/orders">
//                   <a className="account__orders">orders</a>
//                 </Link>
//               </div>
//               <i className="fas fa-angle-double-right"></i>
//             </li>
//             <li className="account__item">
//               <div className="account__first">
//                 <i className="fab fa-first-order"></i>
//                 <Link href="/saveditems">
//                   <a className="account__orders">saved items</a>
//                 </Link>
//               </div>
//               <i className="fas fa-angle-double-right"></i>
//             </li>
//           </ul>
//         </section>
//         <div className="module">
//           <p className="module__header">account settings</p>
//         </div>
//         <section className="account">
//           <ul className="account__list">
//             <li className="account__item">
//               <div className="account__first">
//                 <i className="fab fa-first-order"></i>
//                 <Link href="/user/edit">
//                   <a className="account__orders">details</a>
//                 </Link>
//                 <p className="account__orders"></p>
//               </div>
//               <i className="fas fa-angle-double-right"></i>
//             </li>
//             <li className="account__item">
//               <div className="account__first">
//                 <i class="fab fa-first-order"></i>
//                 <Link href="/user/updatepassword">
//                   <a className="account__orders">change paswword</a>
//                 </Link>
//               </div>
//               <i className="fas fa-angle-double-right"></i>
//             </li>
//           </ul>
//         </section>
//         <div className="logout">
//           <Link href="/">
//             <a onClick={this.logUserOut} className="logout__word">
//               logout
//             </a>
//           </Link>
//         </div>
//       </Layout>
//     );
//   }
// }

// export default Heading;
