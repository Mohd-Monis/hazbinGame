const express = require('express');
const router = express.Router();
const connect = require('../data/database')
const bcrypt = require('bcrypt');
router.get('/',function(req,res){
    res.render('home')
})
// router.use(express.static('../public'))
router.get('/game',function(req,res){
    if(req.session.isAuth){
      return res.render('game');
    }
    res.render('error');
})

router.get('/error', function(req,res){
    res.render('error');
})
router.get('/login',function(req,res){
    res.render('login');
})

router.get('/signup',function(req,res){
    res.render('signup');
})

router.post('/signup',async function(req,res){
   let db = await connect();
   if(!req.body){
    console.log(req.body)
    return res.redirect('/signup')
   }
   if(req.body.password != req.body.confirmPassword){
    res.redirect('/signup');
   }
   console.log(req.body.password);
   const user = {username : req.body.username, email:req.body.email,password: await bcrypt.hash(req.body.password,3)}
   await db.collection('Sinners').insertOne(user);
   res.redirect('/login');
})

router.post('/login',async (req,res) => {
   let db = await connect();
   let user = await db.collection("Sinners").findOne({email: req.body.email});
   console.log(req.body.email)
   console.log(user);
   if(!user || !bcrypt.compare(user.password,req.body.password)){
    return res.redirect('login');
   }
   req.session.isAuth = true;
   res.redirect('/');
})
// router.get('/:',function(req,res){
//     res.render("error")
// })
module.exports = router;