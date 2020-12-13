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
  console.log("componentmounted", token);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(URLbaseAPI.default)

    const { data } = await axios.get(
      `${URLbaseAPI.default}/api/users/cart`,
      config
    );

    return data;
  } catch (err) {
    console.log(err);
  }
}
