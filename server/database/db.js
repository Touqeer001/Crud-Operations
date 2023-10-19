import mongoose from "mongoose";
const Connection=async()=>{
    const URL=`mongodb+srv://touqeeransari001:Ansari@crud-app.tc70qys.mongodb.net/?retryWrites=true&w=majority`;
try{
   await  mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})
   console.log("database connect sussessfully....")

}catch(error){
    console.log("Error while connecting the database",error)

}

}
export default Connection;