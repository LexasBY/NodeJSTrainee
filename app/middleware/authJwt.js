const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");


const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    // res.clearCookie('token');
    // res.redirect('/signIn');
    return res.clearCookie('token').redirect('/api/auth/signIn');
    //return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
  }
  return res.clearCookie('token').redirect('/api/auth/signIn');
  // res.redirect('/signIn');
  //return res.sendStatus(401).send({ message: "Unauthorized!" });
}

const verifyToken = (req, res, next) => {
  let { token } = req.cookies;
  if (token) {
    const user = jwt.verify(token, config.secret, (err) => {
      if(err) {catchError(err, res)};
    });
    req.user = user;
    next();
  } else {
    // res.clearCookie('token');
    // res.redirect('/signIn');
    catchError(err, res);
  }  
};


const authJwt = {
  verifyToken: verifyToken,
};
module.exports = authJwt;
