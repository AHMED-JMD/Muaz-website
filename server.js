const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
//replace in production
require('dotenv').config();

//connecting to mongodb
mongoose.connect(process.env.DATABASE )
 .then(console.log('connected to MongoDB'))
 .catch( err => console.log('db_error:', err))

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

//setting routes for this server
//users routes
app.use('/users/register', require('./routes/users/register'));
app.use('/users/auth', require('./routes/users/auth') )
//vedios and files routes
app.use('/v1/vedios', require('./routes/api/v1/videoApi'));

//listening to port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server running on port ${port}`));