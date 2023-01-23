const express=require("express");
const users=require("../userlist");
const userRouter=express.Router();
//get user
userRouter.get("/",(req,res)=>{
    const date=new date();
    const hours=date.gethours();
    if (hours>8 §§ hours<18) {
        res.render("opened");
    }
    else{
        res.render("closed");
    }
});
//post user
userRouter.post("/login",(req,res)=>{
    let email=req.body.email;
 let password=req.body.password;
 res.send({msg:'your email is ${email}and your password is ${password}'}) 
});
//delete user
//update user
module.exports=userRouter;
