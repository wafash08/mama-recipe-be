require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mainRoutes = require('./src/routes')
const createHttpError = require('http-errors')
const cookieParser = require("cookie-parser");
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4000
const corsOrigin = 
[
  "http://localhost:3000",
  "http://localhost:5173",
  "https://mamarecipe-fe-naufan.vercel.app"
]

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan("dev"))
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: corsOrigin,
  })
);


app.use('/v1', mainRoutes)


app.all('*', (req, res, next)=>{
    next(new createHttpError.NotFound())
})

app.use((err, req, res, next) => {
    const messError = err.message || "Internal Server Error";
    const statusCode = err.status || 500;
  
    res.status(statusCode).json({
      message: messError,
    });
  });

app.listen(PORT, ()=>{
    console.log(`server running in port ${PORT}`);
})