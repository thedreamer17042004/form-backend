const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
const PORT = process.env.PORT;
const bodyParser = require('body-parser')
const connection = require('./config/dbConnect');
const authRouter = require('./routes/authRoute');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/user', authRouter);
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`)
})




