import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
});
//autoincrement se
// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, "user");

//uper ke Schema ko databse me stor krne keliyeee....uske liye ek model/table banana padta h..
//mode(user ye ek table h..mongo db me users ke naam se ek table aagyi hogi mongdb bydefalut s laga deta h collection me..)
const user = mongoose.model("user", userSchema);

export default user;
