const express=require('express');
const route=express.Router();

const exportClass=require('../controller/classList')

route.get('/getClassData',exportClass.getClassList)
route.post('/postClassData',exportClass.postClassList)
route.delete('/deleteClassData',exportClass.deleteClassList)

module.exports=route;