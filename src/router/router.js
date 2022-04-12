const express=require('express');
const route=express.Router();
const searchController=require('../controller/searchController');
require('dotenv').config()


route.get('/:keyword',searchController.search);
route.use('',(req,res)=>{
    res.status(200).json(
        {
            endpoint:process.env.ENDPOINT,
            source:process.env.SOURCE,
            method:'GET',
            example:"/makan"
        }
    )
})


module.exports=route