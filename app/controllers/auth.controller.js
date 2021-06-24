const db = require("../models");
const config = require("../config/auth.config");
const { user: User } = db;

const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
  // res.redirect('/api/auth/signIn')
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(async (user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      const passwordIsValid = await bcrypt.compare(req.body.password, user.password);

      if (passwordIsValid) {
        const token = await jwt.sign({ user: user }, config.secret, { expiresIn: config.jwtExpiration });
  
        res.cookie('token', token, {
          httpOnly: true,
        });
  
        return res.redirect('/');
      } else {
        return res.status(404).json({ message: 'Password is incorrect' });
      }

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
