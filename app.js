const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
const routes = require('./routes/todo-route')

app.use(cors());
app.use(routes);

app.listen(3000, () => {
    console.log("Server running on 3000: http://localhost:3000/");
});
