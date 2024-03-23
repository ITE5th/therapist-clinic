import express, { Application } from 'express';
import routes from './routes/index';


const app: Application= express();


app.use(routes);


process.on("uncaughtException", (error) => {
    console.log(error);
})


export default app;

