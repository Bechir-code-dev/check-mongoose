let mongoose=require('mongoose');
let schema= new mongoose.Schema({
   name:{type:String},
   age: {type:Number},
   favoriteFoods: {type:[String]}
})
let person=mongoose.model('Personnes',schema);
module.exports={person};