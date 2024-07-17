const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    text: {
        type: String
    },
    color: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Note = mongoose.model('note', noteSchema, "Notes");

module.exports = Note;