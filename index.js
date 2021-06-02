import express from 'express';
import path from 'path';
import exphbs from 'express-handlebars';
import homeRoutes from './routes/home.js';
import  { signUp } from './routes/signup.js';
import { signIn } from './routes/signin.js';
import { sequelize } from './models/index.js';
import bodyParser from 'body-parser';

// import cookieJwtAuth from './middleware/cookieJwtAuth.js';
// import checkAuth from './middleware/checkAuth.js';

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRoutes)
// app.use('/signup', signUp)
// app.use('/signin', signIn)

const PORT = process.env.PORT || 3000

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}).catch((err) => {
  console.log(err);
});