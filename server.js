const express = require("express");
const cors = require("cors");
const exphbs = require("express-handlebars");
const cookieParser = require('cookie-parser');

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(cookieParser());
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/app/views');

app.use(express.static('public'));


// parse requests of content-type - application/json
app.use(express.json());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
//const Role = db.role;

db.sequelize.sync();


// simple route
app.get("/", (req, res) => {
  res.render('index', {
    title: 'Main page',
    isHome: true,
  });
 
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
