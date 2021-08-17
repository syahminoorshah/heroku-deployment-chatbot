const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const config = require('./config/keys');
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, { useNewUrlParser: true});

app.use(bodyParser.json());

require('./routes/dialogFlowRoutes')(app);

//app.listen(5000);
app.listen(process.env.PORT || 5000);