const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
const routes = require('./routes/todo-route')

app.use(cors());
app.use(routes);

app.listen(8080, () => {
    console.log("Server running on 8080: http://localhost:8080/");
});
