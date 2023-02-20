import mongoose from 'mongoose';
import {ENV} from "../constants/environments";


async function dbInit() {
    mongoose.set('strictQuery', false);
    await mongoose.connect(ENV.DB_URI);
    console.log('DB Connected!')
}

export default dbInit;