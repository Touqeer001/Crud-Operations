// this file contain all call back function

// import express from "express";

// backend se frontend pe bhejne ke liye response ka used krte h
//request me wo sab aata h jo api ke saath front end se bheja jata hai...
//Post APi ke saath Body Bheja jata hai...
//express ka server bydefault post api ko handle nhi karta uske ke liyee post api ki body hoti h usko paarsse nhi kr paata.
//uske liye ek pakage ko instaal krna padta hai "npm i body-parser"
//jo bhi front end se body aayegi usko validate karna padta h ki front end aa kya rha h...validation ke ek schema bana padta h..

import User from "../Model/user-schema.js";

export const addUser = async (request, response) => {
  const user = request.body;
  //ager succesfully user validate krta h to use database me save karana padegaa..
  const newUser = new User(user);
  try {
    await newUser.save(); //save ek mongodb ka function h jo saara database ko save kr degaa..
    response.status(201).json(newUser);
  } catch (error) {
    // ager data ko save krne me unsuccesful rha to
    response.status(409).json({ message: error.message });
  }
};

//
export const getUsers = async (request, response) => {
  try {
    const users = await User.find({}); //jitna bhi data database me save h wo sare data ko show kr dega.
    response.status(200).json(users);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getUSer = async (request, response) => {
  try {
    // const user = await User.find({ _id: request.params.id });
    const user = await User.findById(request.params.id);
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

//this controller for edit user..
export const editUser = async (request, response) => {
  let user = request.body;
  const editUser = new User(user);
  try {
    await User.updateOne({ _id: request.params.id }, editUser);
    response.status(201).json(editUser);
  } catch (error) {
    response.status(409).json({ message: error.messege });
  }
};

//this controller for edit user
export const deleteUser = async (request, response) => {
  // let user = request.body;
  // const editUser = new User(user);
  try {
    await User.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: "user deleted succesfully" });
  } catch (error) {
    response.status(409).json({ message: error.messege });
  }
};
