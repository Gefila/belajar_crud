require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const usersRoute = require('./routes/users');

app.use(express.json());
app.use(cors());

app.use('/users', usersRoute);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})
