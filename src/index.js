// const express= require("express");
// const connect =require("./configs/db")
// const productController=require("./controllers/product.controller")
// const { body, validationResult } = require("express-validator");
// const { register, login } = require("./controllers/auth.controller");
// const passport= require("./configs/google.auth");
// const userController= require("./controllers/user.controller")
// const cors=require("cors");
// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use("/products",productController);
// app.use("/users",userController)

// app.post("/register", register)
// app.post("/login", login)


// // google auth routes
// app.get('/auth/google',
//   passport.authenticate('google', { scope:
//       [ 'email', 'profile' ] }
// ));

// app.get( '/auth/google/callback',
//     passport.authenticate( 'google', {
//         successRedirect: 'http://127.0.0.1:5500/products.html',
//         failureRedirect: '/auth/google/failure'
// }));

// app.get("/auth/google/success", (req,res)=>{
 
//     return res.send({message:"logged in"})

// })
// passport.serializeUser(function(user,done){
//   return done(null, user)
// })
// passport.deserializeUser(function(user,done){
//     return done(null, user)
//   })



// app.listen(9999,async()=>{
//     try {
//          await connect();
//          console.log("Listening the port number 9999");
//     } catch (error) {
//         console.log(error.message)
//     }
// })

let info = JSON.parse(localStorage.getItem("details"));
console.log(info)
let loc=document.getElementById("name");
console.log(loc)

info.forEach(el=>{
  // let box = document.createElement("div");
  let text = document.createElement("p");
  text.innerText = el.name;
  // box.append(text);
  loc.append(text);
  
})

// let Profile_div = document.getElementById("prifile_div")
// document.querySelector("#formDiv").addEventListener("click",()=>{
//     console.log(profile_details.length)
//     if(profile_details.length!==undefined){
//         console.log(profile_details)
//         document.querySelector("#prifile_div>div:last-child>h3").innerHTML = profile_details[0].name
//         document.querySelector("#prifile_div>div:last-child>h4").innerHTML = profile_details[0].email
//         console.log(profile_details[0].name)
//         Profile_div.style.display = "flex"
//     }else{

//         window.location.href = "login.html";
//     }
    
// })
// document.querySelector("#cancel").addEventListener("click", ()=>{
//     //console.log("cancel")
//     Profile_div.style.display = "none"
// })
// document.querySelector("#logout").addEventListener("click", ()=>{
//     //console.log("logout")
//     localStorage.removeItem("UserData")
//     alert("Now! you are logged out")
//     Profile_div.style.display = "none"
//     window.location.href = "index.html";

// })