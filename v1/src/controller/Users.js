const { insert, list, loginUser } = require("../services/Users");
const httpStatus = require("http-status");

const {
  passwordToHash,
  generateAccessToken,
  geneateRefreshToken,
} = require("../scripts/utils/helpers");
const create = (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  insert(req.body)
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const login = (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  loginUser(req.body)
    .then((user) => {
      if (!user) {
        return res
          .status(httpStatus.NOT_FOUND)
          .send({ Message: "Böyle bir kullanıcı bulunamadı" });
      }
      user = {
        ...user.toObject(),
        tokens: {
          acces_token: generateAccessToken(user),
          refresh_token: geneateRefreshToken(user),
        },
      };

      res.status(httpStatus.OK).send(user);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const index = (req, res) => {
  list()
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

module.exports = {
  create,
  index,
  login,
};
