
import dotenv from 'dotenv';



const USERNAME = process.env.USERNAME;
const PASSWORD  =process.env.PASSWORD ;
console.log(PASSWORD);
const MONGO_URL = `mongodb+srv://ada:ADARSH@cluster0.ua3is.mongodb.net/`;

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;


export const config = {
    mongo: {
        username: USERNAME,
        password: PASSWORD,
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};