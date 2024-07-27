import User from "../Models/user.model.js";
import bcryptjs from 'bcryptjs'

 const signup=async (req,res) => {
  const {username,email,password}=req.body;
 const hashedPassword=bcryptjs.hashSync(password,10)
  const newUser=new User({username,email,password:hashedPassword})
  try{

    newUser.save()
    res.status(201).json({message:"User created successfully"})

  }catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Username already exists" });
    } else {
      res.status(500).json({ message: "An error occurred" });
    }
  }
}

export default signup; 