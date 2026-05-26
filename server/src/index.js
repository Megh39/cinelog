
import dns from "dns";
import { Resolver } from 'dns';

dns.setDefaultResultOrder("ipv4first");
const resolver = new Resolver();
resolver.setServers(['127.0.0.1']); // This won't work on Window
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "CineLog API running",
  });
});
app.use("/api/movies", movieRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});