const CryptoJs = require("crypto-js");
const JWT = require("jsonwebtoken");

const passwordToHash = (password) => {
  return CryptoJs.HmacSHA256(
    password,
    CryptoJs.HmacSHA1(password, process.env.PASSWORD_HASH).toString()
  ).toString();
};

const generateAccessToken = (user) => {
  return JWT.sign(
    { name: user.email, ...user },
    process.env.ACCCES_TOKEN_SECRET_KEY,
    { expiresIn: "1w" }
  ); //*bir haftalık cookie süresesi
};
const geneateRefreshToken = (user) => {
  return JWT.sign(
    { name: user.email, ...user },
    process.env.REFRESH_TOKEN_SECRET_KEY
  );
};

module.exports = {
  passwordToHash,
  geneateRefreshToken,
  generateAccessToken,
};
