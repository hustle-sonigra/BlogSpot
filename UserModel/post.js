// iss file mai we have the credentials of the posts that we will make
// mulitple models can be cretaed . This one is for the posts of the users
const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
   postData:String,
   postTittle:String,
   user:
   {
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
   },
   date:
   {
    type:Date,
    default:Date.now
   }
});

module.exports=mongoose.model("post",postSchema);