const express = require("express")
require("dotenv").config();
const cors = require("cors");
const routes = require('./controllers/AIroute');
//const { Configuration, OpenAIApi } = require("openai");
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log(`Server listening on port ${port}`));