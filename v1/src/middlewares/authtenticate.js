const httpStatus = require("http-status");
const JWT = require("jsonwebtoken");
const authenticateToken = (req, res, next) => {
  //     req.autheaders.authorization
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  //   const token=req.headers?authorization?.split(" ")[1] || null;
  //! Daha kısa kod ile de yazılabilir bu durum
  if (token === null) {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send({ Error: "Bu işlemi gerçekleştirmek için giriş yapmak gerekiyor" });
  }
  JWT.verify(token, process.env.ACCCES_TOKEN_SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(httpStatus.FORBIDDEN)
        .send({ Error: "Token Süresi geçmiş" });
    }
    next();
  });
};

module.exports = authenticateToken;
