import axios from 'axios';
// const User = require("../");
import Router from 'next/router';

import URLbaseAPI from '../functions/URLbaseAPI';
import cookieCutter from 'cookie-cutter';

export function getUser(req, res) {
  console.log('protected accesed');

  const user = req.user;

  res.json({
    user,
  });
}

// export async function getFrontUser(token) {
//   try {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     const { data } = await axios.get(`${URLbaseAPI}/api/users/cart`, config);

//     return data;
//   } catch (err) {
//     console.log(err.response.data.error.statusCode === 401);
//     if (err.response.data.error.statusCode === 401) {
//       Router.push('/login');
//     }
//   }
// }

export async function getFrontUser(req) {
  // const config = {
  //   headers: {
  //     cookie: req.cookies.token,
  //   },
  // };
  try {
    const { data } = await axios.get(`${URLbaseAPI}/api/users/cart`);

    return data;
  } catch (err) {
    console.log(err.response);
  }
}

export function getClientSideToken() {
  if (typeof window !== 'undefined') {
    const token = cookieCutter.get('token');
    return token;
  }
  return '';
}
export function getServerSideToken(req) {
  if (typeof window === 'undefined') {
    console.log(token, 'token');
    const token = req ? req.cookies.token : '';

    return token;
  }
  return '';
}

export function redirectPage(ctx, err) {
  if (ctx) {
    if (err.response.data.error.statusCode === 500) {
      const { req, res } = ctx;
      if (req) {
        res.writeHead(301, { location: '/login' });
        return res.end();
      } else {
        return Router.push('/login');
      }
    }
  }
}
export function redirectPages(ctx, err) {
  if (ctx) {
    const { req, res } = ctx;
    if (req) {
      res.writeHead(301, { location: '/login' });
      return res.end();
    }
  } else {
    cookieCutter.set('token', '', { expires: new Date(0) });
    console.log('else');
    return Router.push('/login');
  }
}
