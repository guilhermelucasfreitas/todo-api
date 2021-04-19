const mongoose = require('mongoose');

const Todo = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        required: true
    }
});

mongoose.model('todo', Todo);