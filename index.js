const express = require('express');
const bodyParser = require('body-parser');


const app = express();

const config = require('./config/keys');
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, { useNewUrlParser: true});

app.use(bodyParser.json());

require('./models/Registration');
require('./routes/dialogFlowRoutes')(app);
require('./routes/fulfillmentRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // js and css files
    app.use(express.static('client/build'));

    // index.html for all page routes
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
//app.listen(5000);
// app.listen(process.env.PORT || 5000);

const PORT = process.env.PORT || 5000;
app.listen(PORT);