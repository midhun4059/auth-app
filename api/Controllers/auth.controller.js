import errorHandler from "../error.js";
import User from "../Models/user.model.js";
import bcryptjs from 'bcryptjs'

 const signup=async (req,res,next) => {
  const {username,email,password}=req.body;
 const hashedPassword=bcryptjs.hashSync(password,10)
  const newUser=new User({username,email,password:hashedPassword})
  try{

    newUser.save()
    res.status(201).json({message:"User created successfully"})

  }catch (error) {
    next(errorHandler(300,'Something went wrong'));
  }
}

export default signup; 