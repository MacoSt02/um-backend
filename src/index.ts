import 'dotenv/config';
import connectDB from './database/connect';
import { ApiServer } from './server';

if (process.env.NODE_ENV === 'development') {
    console.clear();
}

const server = new ApiServer();

connectDB.initialize()
    .then(() => {
        console.log('Succesfull connection to dataBase');
    })
    .catch((error) => console.log(`Error during dataBase connection: ${error}`));
server.listen();
