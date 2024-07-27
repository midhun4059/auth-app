import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './Routes/user.route.js';
import authRoutes from './Routes/auth.route.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
