import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("connected");
    return;
  }
  if (connectionState === 2) {
    console.log("connecting");
    return;
  }

  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "rest-api",
      bufferCommands: true,
    });
  } catch (err) {
    console.log("Error: ", err);
    throw new Error(`Error: ${err}`);
  }
};

export default connect;
