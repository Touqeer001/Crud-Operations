import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
});

//uper ke Schema ko databse me stor krne keliyeee....uske liye ek model/table banana padta h
//mode(user ye ek table h..mongo db me users ke naam se ek table aagyi hogi mongdb bydefalut s laga deta h collection me.... )
const user = mongoose.model("user", userSchema);

export default user;
