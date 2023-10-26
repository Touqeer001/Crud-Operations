import axios from "axios";
const Url = "http://localhost:8000";
export const addUser = async (data) => {
  try {
    await axios.post(`${Url}/add`, data);
  } catch (error) {
    console.log("Eroor while calling the Api addUser", error);
  }
};


//for practis...
export const alUSer=async()=>{
  try{
    await axios.post(`${Url}/all`,data)

  }
  catch(){

  }

}