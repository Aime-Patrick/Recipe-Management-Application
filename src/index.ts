import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./db/config";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Digital management system");
});

app.use((req, res, next) => {
  res.status(404).send("Route not found");
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // await dbConnection();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
};

startServer();