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
import { getFrontUser,getClientSideToken, protectedd } from "../../functions/fauthContoller";


function user (props) {
//  const [user, setUser] = useState()
  let { user } = props
  let email;

  
 console.log(user)
  // const { email } = user.user
  

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
              <p className="user__email">{user.email}</p>
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


user.getInitialProps = async (ctx) => {
  try {

  
  let tken = ctx.req ? ctx.req.cookies.token : getClientSideToken()
    

  const config = {
    headers: {
      Authorization: `Bearer ${tken}`,
    },
    };


  const { data } = await axios.get(`${URLbaseAPI}/api/users/cart`, config);

    // console.log("hello", ctx.req ? ctx.req.cookies.jwt : data)
    
   const isBrowser = () => typeof window !== 'undefined' && window.document !== undefined;

    console.log(isBrowser())
    
    const dataa = {
      email: "admin@admin.com"
    }
// console.log("data",data)
  return { user: data.user }
  } catch (err) {
    console.log("errorr",err)
 }
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

// user.getInitialProps = async (ctx) => {
//   let token 
   
//   token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZDc0YjIzYjljNDY1MDAxN2Y3YzE3MSIsImlhdCI6MTYwODM0MzE3MSwiZXhwIjoxNjE2MTE5MTcxfQ.3D8vJbCFe-GZRdMZM3Pjp6GMmVImmJKaD7qtrCjkxY0"
  

//   let toke = ctx.req ? ctx.req.cookies.jwt : getClientSideToken()


//   const  data = await getFrontUser(toke) 

// console.log(toke)
// console.log("data",data, )

//   return { user: data }
// }


export default user;







































































// class user extends React.Component {
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

// export default user;
