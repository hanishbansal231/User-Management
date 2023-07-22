const express = require('express');
const connectDB = require('./config/database');
const userRouter = require('./router/userRouter');
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use('/api/v1',userRouter);
connectDB();

app.listen(PORT, () => {
    console.log(`Server is started ${PORT}`);
})