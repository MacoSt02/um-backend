import { DataSource } from "typeorm";
import { Users } from "../models/users/users.model";

const connectDB = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'super3',
    database: 'user_manager',
    synchronize: true,
    logging: false,
    entities: [
        Users
    ]
});

export default connectDB;
