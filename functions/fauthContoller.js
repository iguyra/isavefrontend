import axios from "axios";
// const User = require("../");
import Router from "next/router"


import URLbaseAPI from "../functions/URLbaseAPI"

// const axios = require("axios");
// // const User = require("../");
// const Router = require("next/router")

// const URLbaseAPI = require("../functions/URLbaseAPI")




export function getUser(req, res)  {
  console.log("protected accesed");

  const user = req.user;

  res.json({
    user,
  });
};

export async function getFrontUser(token)  {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };   
    console.log(URLbaseAPI.default)
    const { data } = await axios.get(
      `${URLbaseAPI}/api/users/cart`,
      config
    );

    return data;
  } catch (err) {
    console.log(err.response.data.message)
  }
}


export function getClientSideToken () {
  if (typeof window !== "undefined") {
   const token = localStorage.getItem("token")
    return token
  }
  return ""
}
export function getServerSideToken (req) {
  if (typeof window === "undefined") {
   const token = req ? req.cookies.token : ""
    return token
  }
  return ""
}

export function redirectPage (ctx, err) {
  
  if (ctx) {
    if (err.response.data.error.statusCode === 500) {
      const { req, res } = ctx
      if (req) {
        res.writeHead(301, { location: "/login" });
        return res.end();
      } else {
        return Router.push("/login")
      }
    }
  }


}