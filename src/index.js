require('./models/users');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth')

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const mongoUri = 'mongodb+srv://div:divdotdev@cluster0.x8vceg8.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
    console.log('connected to mongo')
})

mongoose.connection.on('error', (err) => {
    console.error(`error in connection`, err);
})


app.get('/', requireAuth, (req, res) => {
    res.send(`hi there ${req.user.email}`);
})

app.listen(3000, () => {
    console.log('listing at port 3000')
})