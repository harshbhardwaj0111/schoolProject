const dbConnect=require('../database/db');
const getSectionList=async (req,res)=>{
    try 
    {
        let db=await dbConnect();
        const collection = db.collection('sectionList');
        const result=await collection.find({}).toArray();
        console.log("Result is"+result)
        res.send({
            Status:200,
            body:result
        })
    } 
    catch (error) 
    {
        res.send({
            status:400,
            data:"something went wrong"
        })
    }
}
const postSectionList=async (req,res)=>{
    try 
    {
        let db= await dbConnect();
        let collection = db.collection('sectionList');
        const insertResult = await collection.insertOne(req.body);
        console.log(insertResult);
        res.send(insertResult); 
    } 
    catch (error) 
    {
        res.send({
            status:400,
            data:"Something went wrong in api"
        })
    }
}
const deleteSectionList=async(req,res)=>{
    try 
    {
        let db= await dbConnect();
        let collection = db.collection('sectionList');
        const deleteResult = await collection.deleteOne({ id:parseInt(req.query.id) });
        console.log('Deleted documents =>',deleteResult);
        if(deleteResult.deletedCount>0)
        res.send({
            status:200,
            data:"item is deleted"
        })
        else
        {
            res.send({
                status:400,
                data:"Record is not availble with this id"
            })  
        }
    }
    catch (error) 
    {
        res.send({
            status:400,
            data:"something went wrong in your api"
        })
    }
}
module.exports={
    postSectionList,getSectionList,deleteSectionList
}