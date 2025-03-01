let express=require('express');
let route=express.Router();
let {person}=require('../models/schema');

route.post('/addPerson', async(req,res)=>{
    try {
        const newPerson= new person ({
            name:req.body.name,
            age:req.body.age,
            favoriteFoods:req.body.favoriteFoods
        }) 
        console.log('before saving' + newPerson)
        await newPerson.save()
        console.log('after saving' + newPerson)
        res.status(200).json({newPerson});
    } catch (error) {
        res.status(400).json({err:error.message});
    }
})
route.post('/addMany', async (req,res)=>{
    try {
        let manyP= await person.create(req.body)
        res.status(200).json({manyP});
    } catch (error) {
        res.status(400).json({err:error.message});
    }
})
route.get('/Gettingall', async (req,res)=>{
    try {
        let findall= await person.find();
        res.status(200).json({findall});
    } catch (error) {
        res.status(400).json({err:error.message});
    }
})
route.get('/getOne/:Food', async (req,res)=>{
    try {
        let search = await person.findOne({favoriteFoods:req.params.Food});
        res.status(200).json({search});
    } catch (error) {
        res.status(400).json({err:error.message})
    }
})
route.get('/getID/:id', async (req,res)=>{
    try {
        let cherche= await person.findById(req.params.id);
        res.status(200).json({cherche});
    } catch (error) {
        res.status(400).json({err:error.message});
    }
})
route.put('/updatefood/:id', async (req,res)=>{
    const newUp=req.body;
    try {
        const updated= await person.findByIdAndUpdate(req.params.id , newUp , {new:true});
        updated.save();
        res.status(200).json({updated});
    } catch (error) {
        res.status(400).json({err:error.message});
    }
})
route.put('/updateage/:name', async (req,res)=>{
    const nuevo=req.body;
    try {
        const modif = await person.findOneAndUpdate(req.params.name , nuevo , {new:true});
        modif.save();
        res.status(200).json({modif});
    } catch (error) {
        res.status(400).json({err:error.message});
    }
})
route.delete('/delete/:id', async (req,res)=>{
    try {
        const deleted= await person.findByIdAndDelete(req.params.id);
        res.status(200).json({deleted});
    } catch (error) {
        res.status(400).json({err:error.message});
    }
})
route.delete('/deletemary/:name', async (req,res)=>{
    try {
        const suppr= await person.remove(req.body.name);
        res.status(200).json({suppr});
    } catch (error) {
        res.status(400).json({err:error.message});
    }
})
route.find
module.exports={route};












// Person.find({ favoriteFoods: 'Burritos' })
//   .sort({ name: 1 })      // Sort by name (1 for ascending, -1 for descending)
//   .limit(2)               // Limit the results to 2
//   .select('-age')         // Exclude the "age" field
//   .exec(function(err, data) {
//     if (err) {
//       console.log('Error fetching data:', err);
//     } else {
//       console.log('People who like burritos:', data);
//     }
//   });