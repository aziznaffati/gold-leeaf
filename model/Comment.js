const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    productId: {
        type: String,
    },
    items: [{
        userId: {
            type: String,
        },
        FirstNameUser: String,
        LastNameUser: String,
        Description: String,
        
    }],
   
});

module.exports = Comment = mongoose.model('comment',CommentSchema);