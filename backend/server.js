require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cardRoutes = express.Router();
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;
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
    User.findOrCreate({ googleId: profile.id, username: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: 'http://localhost:4000/auth/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      User.findOrCreate({ spotifyId: profile.id, username: profile.id }, function(err, user) {
        return done(err, user);
      });
    }
  )
);

cardRoutes.route('/').get(function(req, res) {
    Card.find(function(err, cards) {
        if (err) {
          console.log(err);
        } else {
          res.json(cards);

        }
    });
});

let signIn = false;
let permission = false;

app.get("/logInfo", function(req, res){
  res.send(signIn);
})

app.get("/permission", function(req, res){
  res.send(permission);
})

app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get('/auth/spotify', passport.authenticate('spotify'), function(req, res) {
  // The request will be redirected to spotify for authentication, so this
  // function will not be called.
});

app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:3000" }),
  function(req, res) {
    // Successful authentication, redirect secrets.
    res.redirect("http://localhost:3000");

    req.user ? signIn = true : signIn = false;
    req.user.username === '110513252610058225592' ? permission = true : permission = false;
  }
);

app.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: 'http://localhost:3000' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000');

    req.user ? signIn = true : signIn = false;
    req.user.username === '110513252610058225592' ? permission = true : permission = false;
  }
);



app.get("/logout", function(req, res){
  res.redirect("http://localhost:3000/");
  signIn = false;
});


// app.get("/register", function(req, res){
//   res.render("register");
// });

// app.get("/secrets", function(req, res){
//   if (req.user ){ //check if user is logged in
//     res.render("secrets");
//   } else {
//     console.log("false");
//     res.render("login");
//   }
// });

cardRoutes.route('/:id').get(function(req, res) {
    if(permission){
      let id = req.params.id;
      Card.findById(id, function(err, card) {
          res.json(card);
      });
    }
});

cardRoutes.route('/create').post(function(req, res) {
  if (permission){
    let card = new Card(req.body);
    card.save()
        .then(card => {
            res.status(200).json({'card': 'card added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new card failed');
        });
  }

});

cardRoutes.route('/edit/:id').post(function(req, res) {
  if(permission){
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
  }

});

cardRoutes.route("/delete/:id").post(function(req, res) {
  if(permission){
    Card.deleteOne({_id: req.params.id}, function(err){
      if (err){
        console.log(err);
      } else {
        console.log("Deleted");
      }
    });
  }

})


app.use('/cards', cardRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
