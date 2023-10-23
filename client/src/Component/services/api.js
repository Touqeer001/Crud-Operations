import axios from "axios";
const Url = "http://localhost:8000";
export const addUser = async (data) => {
  try {
    await axios.post(`${Url}/add`, data);
  } catch (error) {
    console.log("Eroor while calling the Api addUser", error);
  }

  //FOr practicing purpose
  export const addUsers = (async) => {
    axios.post(`${Url}/add`, data);
  };
};
