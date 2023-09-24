import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://root:robertoPass@cluster0.nwto2.mongodb.net/homes?retryWrites=true&w=majority';



