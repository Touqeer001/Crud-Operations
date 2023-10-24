// this file contain all call back function

// backend se frontend pe bhejne ke liye response ka used krte h
//request me wo sab aata h jo api ke saath front end se bheja jata hai...
//Post APi ke saath Body Bheja jata hai...
//express ka server bydefault post api ko handle nhi karta uske ke liyee post api ki body hoti h usko parsse nhi kr paata.
//uske liye ek pakage ko instaal krna padta hai "npm i body-parser"
//jo bhi front end se body aayegi usko validate karna padta h ki front end aa kya rha h...validation ke ek schema bana padta h..
export const addUser = (request, response) => {
  const user = request.body;
  console.log(user);
};
