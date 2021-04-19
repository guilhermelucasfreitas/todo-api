const express = require('express');
const routes = express.Router();
const mongoose = require('mongoose');
require("../models/Todo");
const Todo = mongoose.model('todo');

mongoose.connect('mongodb+srv://visitor:yUW1RNLAu16meEgM@cluster0.tq2zz.mongodb.net/todo-project', {
     useNewUrlParser: true,
     useUnifiedTopology: true
}).then(() => {
    console.log("Successful conection with MongoDB");
}).catch((error) => {
    console.log("Error: Unsuccessful connection with MongoDB");
});

routes.get("/", (req, res) => {
    Todo.find({}).then((todo) => {
        return res.json(todo);
    }).catch((error) => {
        return res.status(400).json({
            error: true,
            message: "No items found"
        })
    })
});

routes.get("/todo/:id", (req, res) => {
    Todo.findOne({ _id: req.params.id }).then((todo) => {
        return res.json(todo);
    }).catch((error) => {
        return res.status(400).json({
            error: true,
            message: "No item found"
        })
    })
})

routes.post("/todo", (req, res) => {
    const todo = Todo.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Item not registered"
        });

        return res.status(200).json({
            error: false,
            message: "Item registered!"
        })
    });
});

routes.put("/todo/:id", (req, res) => {
    const todo = Todo.updateOne({ _id: req.params.id}, req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Item not edited"
        });

        return res.json({
            error: false,
            message: "Item edited!"
        });
    });
});

routes.delete("/todo/:id", (req, res) => {
    const todo = Todo.deleteOne({_id: req.params.id}, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Error: Item not deleted"
        });

        return res.json({
            error: false,
            message: "Item deleted!"
        });
    });
});

module.exports = routes;