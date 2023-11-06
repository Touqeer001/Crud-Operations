//Calling all api.

import axios from "axios";
const Url = "http://localhost:8000";
export const addUser = async (data) => {
  try {
    return await axios.post(`${Url}/add`, data);
  } catch (error) {
    console.log("Eroor while calling the Api addUser", error);
  }
};

// DataBase me se data ko nikalne ke leye GET APi ka used krte handleBreakpoints....

export const getUsers = async () => {
  try {
    return await axios.get(`${Url}/all`);
  } catch (error) {
    console.log("Eroor while callint getUSer api", error);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${Url}/${id}`);
  } catch (error) {
    console.log("Error While Calling getUser Api", error);
  }
};

//for Edit USer
export const editUser = async (user, id) => {
  try {
    return await axios.post(`${Url}/${id}`, user);
  } catch (error) {
    console.log("Error while calling edit api", error);
  }
};

//for delete user
export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${Url}/${id}`);
  } catch (error) {
    console.log("Error while calling edit api", error);
  }
};
