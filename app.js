const express=require('express');
const app=express();
const cors = require('cors')
const route=require('./src/router/router');
require('dotenv').config()


// ALLOW ORIGIN
app.use(cors())

// BODY PARSER
app.use(express.json())

const port =process.env.PORT || 3000
//ROUTER
app.use('/',route);
app.listen(port,()=>console.log(`server running on port ${port}`));