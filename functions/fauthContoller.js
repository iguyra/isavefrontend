const axios = require("axios");
// const User = require("../");
const URLbaseAPI = require("../functions/URLbaseAPI")

const { promisify } = require("util");


exports.getUser = (req, res) => {
  console.log("protected accesed");

  const user = req.user;

  res.json({
    user,
  });
};

exports.getFrontUser = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };    
    const { data } = await axios.get(
      `${URLbaseAPI.default}/api/users/cart`,
      config
    );

    return data;
  } catch (err) {
    console.log("error",err.response.data.message);
  }
}

exports.getBackUser = (token) => {

  

}

exports.getClientSideToken = () => {
  if (typeof window !== "undefined") {
   const token = localStorage.getItem("token")
    return token
  }
  return ""
}