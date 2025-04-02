import "dotenv/config";
import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

export const connectDB = async () => {
  try {
   await mongoose.connect(MONGODB_URI);
    console.log("Deu certo ao conectar com o banco ");
  } catch (error) {
    console.log("Não deu certo ao conectar com o banco ", error);
  }
};
