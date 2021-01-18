const express=require('express');
const route=express.Router();
const searchController=require('../controller/searchController');
require('dotenv').config()

route.post(`/cari`,searchController.search);
route.use('',(req,res)=>{
    res.status(404).json(
        {
            endpoint:process.env.ENDPOINT,
            source:process.env.SOURCE,
            method:'post',
            body:'keyword'
        }
    )
})


module.exports=route