require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const ejs = require("ejs");
const cardRoutes = express.Router();
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const PORT = 4000;


let Card = require('./cardModel');

app.use(cors());
//app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://127.0.0.1:27017/cards', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema ({
  username: String,
  name: String,
  googleId: String,
  secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:4000/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    //console.log(profile.name.givenName);
    User.findOrCreate({ googleId: profile.id, username: profile.id, name: profile.name.givenName }, function (err, user) {
      return cb(err, user);
    });
  }
));

cardRoutes.route('/').get(function(req, res) {
    Card.find(function(err, cards) {
        if (err) {
          console.log(err);
        } else {
          res.json(cards);

        }
    });
});

app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect secrets.
    res.redirect("/secrets");
  }
);

app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.get("/secrets", function(req, res){
  User.find({"secret": {$ne:null}}, function(err, foundUsers){;//find all user that have a secret
    if (err){
      console.log(err);
    } else {
      if (foundUsers){
        res.render("secrets", {usersWithSecrets: foundUsers});
      }
    }
  })
});

cardRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Card.findById(id, function(err, card) {
        res.json(card);
    });
});

cardRoutes.route('/create').post(function(req, res) {
  let card = new Card(req.body);
  card.save()
      .then(card => {
          res.status(200).json({'card': 'card added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new card failed');
      });
});

cardRoutes.route('/edit/:id').post(function(req, res) {
    Card.findById(req.params.id, function(err, card) {
        if (!card){
            res.status(404).send("data is not found");
        } else {
            card.title = req.body.title;
            card.subTitle = req.body.subTitle;
            card.listen = req.body.listen;
            card.buy = req.body.buy;
            card.description = req.body.description;
            card.img = req.body.img;
            card.section = req.body.section;
            card.free = req.body.free;

            card.save().then(card => {
                res.json('Card updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
    });
});

cardRoutes.route("/delete/:id").post(function(req, res) {
  Card.deleteOne({_id: req.params.id}, function(err){
    if (err){
      console.log(err);
    } else {
      console.log("Deleted");
    }
  });
})


app.use('/cards', cardRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
