const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Card = new Schema({
    card_title: {
        type: String
    },
    card_subTitle: {
        type: String
    },
    card_listen: {
        type: String
    },
    card_buy: {
        type: String
    },
    card_description: {
        type: String
    },
    card_img: {
        type: String
    },
    card_style: {
        type: String
    }
});

module.exports = mongoose.model('Card', Card);
