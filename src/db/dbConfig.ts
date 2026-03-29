import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "learnintern",
    });
    const connection = mongoose.connection;
    const client = connection.getClient();
    const db = client.db("learnintern");
    return { connection, client, db };
  } catch (error) {
    console.error("Error connecting Database: ", error);
    throw error;
  }
};
