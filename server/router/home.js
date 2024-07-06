const express=require('express');
const route=express.Router();

const exportClass=require('../controller/classList');
const exportSection=require('../controller/sectionList')

route.get('/getClassData',exportClass.getClassList)
route.post('/postClassData',exportClass.postClassList)
route.delete('/deleteClassData',exportClass.deleteClassList)

route.get('/getSectionData',exportSection.getSectionList);
route.post('/postSectionData',exportSection.postSectionList);
route.delete('/deleteSectionData',exportSection.deleteSectionList);

module.exports=route;