import express, { Application } from 'express';
import cors from 'cors';
const app: Application = express()  //Application type

//Application Routes:
import userRoutes from './app/modules/user/user.route'


//Using cors:
app.use(cors());

//parse Data:-
app.use(express.json())  //json data receive করার জন্য express.json() লাগবে
app.use(express.urlencoded({ extended: true }))  //যেকোন type এর data আসুক না কেন সেটাকে আমরা parse করতে পারবো।
  
app.use('/api/v1/user', userRoutes);

export default app;

/* 
        step1:- Interface
        step2:- Schema
        step3:- Model
        step4:- Database Query
    */