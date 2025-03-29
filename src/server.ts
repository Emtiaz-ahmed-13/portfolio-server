import mongoose from "mongoose";
import app from "./app";

import { Server } from "http";

let server: Server;
async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://emtiaz2060:pnlicONPRUtyqzx0@cluster0.ywq5sm7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    server = app.listen(process.env.PORT || 5001, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
process.on("unhandledRejection", () => {
  console.log("unhandledRejection");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
    process.exit(1);
  }
});

process.on("uncaughtException", () => {
  console.log("uncaughtException");
  process.exit(1);
});
