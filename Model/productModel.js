var mongoose=require("mongoose");
var productSchema=mongoose.Schema({
    Name:String,
    Price:String,
    Category:String,
    Brand:String
})

const product=mongoose.model("products",productSchema);
module.exports=product;