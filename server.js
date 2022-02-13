const express = require('express');
const app = express();
const mongoose = require('mongoose');
//replace in production
require('dotenv').config();

//connecting to mongodb
mongoose.connect(process.env.DATABASE )
 .then(console.log('connected to MongoDB'))
 .catch( err => console.log('db_error:', err))

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//setting routes for this server
app.use('/users/register', require('./routes/users/register'));
app.use('/users/auth', require('./routes/users/auth') )

//listening to port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));