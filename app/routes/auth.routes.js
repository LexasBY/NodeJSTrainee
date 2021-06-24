const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const authJwt = require('../middleware/authJwt')
module.exports = function(app) {
  // app.use(function(req, res, next) {
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "Authorization, Origin, Content-Type, Accept"
  //   );
  //   next();
  // });

  app.post("/api/auth/signup",
    verifySignUp.checkDuplicateUsernameOrEmail,
    controller.signup,
    
  );

  app.get('/api/auth/signup', (req, res) => {
    res.render('signup', {
      title: 'Sign Up',
      isSignUp: true,
    });
  });

  app.get('/api/auth/signin', (req, res) => {
    res.render('signin', {
      title: 'Sign In',
      isSignin: true,
    });
  });

  app.get('/api/auth/chat', [authJwt.verifyToken], (req, res) => {
    res.render('chat');
  });

  app.post("/api/auth/signin", controller.signin);

};
