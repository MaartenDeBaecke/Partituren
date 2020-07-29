const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cardRoutes = express.Router();
const PORT = 4000;

let Card = require('./cardModel');

app.use(cors());
//app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://127.0.0.1:27017/cards', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

cardRoutes.route('/').get(function(req, res) {
    Card.find(function(err, cards) {
        if (err) {
          console.log(err);
        } else {
          res.json(cards);
        }
    });
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
            card.style = req.body.style;

            card.save().then(card => {
                res.json('Card updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
    });
});


app.use('/cards', cardRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
