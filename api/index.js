import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './Routes/user.route.js';
import authRoutes from './Routes/auth.route.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
//middleware to parse json
app.use(express.json());

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });



app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000,() => {
  console.log('Server is running on port 3000');
});

app.use((err,req,res,next)=>{
  const statusCode=err.statusCode || 500;
  const message=err.message || 'Internal Server Error';
return res.status(statusCode).json({
sucess:false,
error:message,
statusCode:statusCode,
})
}
)
