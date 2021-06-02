import Router from 'express'
import regController from '../controllers/regController.js';
const router = Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Main page',
    isHome: true
  })
})

router.get('/signIn', (req, res) => {
  res.render('signIn', {
    title: 'Sign In',
  });
});

// router.post('/signIn', (req, res) => loginController(req, res));

router.get('/signUp', (req, res) => {
  res.render('signUp', {
    title: 'Sign Up',
  });
});

router.post('/signUp', (req, res) => regController(req, res));



export default router;