import express from 'express';
import mongoose from 'mongoose';
import router from './routes/route.mjs';

const app = express();
app.use(express.json());
mongoose.connect('mongodb+srv://pintupk:hppk12pintu@cluster0.z14ijp4.mongodb.net/assignment').then(()=>console.log("database connected "))
.catch((e)=>console.log(e));
app.use('/',router)

app.listen(8000,()=>console.log('server started on port ', 8000));