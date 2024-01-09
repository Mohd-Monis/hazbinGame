const express = require('express');
const app = express();
const router = require('./routes/route.js')
const session = require('express-session');
const mongoDBStore = require('connect-mongodb-session')(session);
const store = new mongoDBStore({
    databaseName:"Session",
    uri: "mongodb://localhost:27017",
    collection: "session"
})

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
app.use(session({
    secret:"mylittlesecret",
    resave:false,
    saveUninitialized: false,
    store: store
}))
app.use(function(req,res,next){
    app.locals.isAuth = req.session.isAuth;
    next();
})
app.use(router);
// app.get('/:',function(err,req,res,next){
//     res.redirect('/error');
// })
app.listen(3000);

