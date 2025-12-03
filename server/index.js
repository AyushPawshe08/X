import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import generateRoutes from "./routes/generateRoute.js"; // check path exactly

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Health check
app.get("/health", (req, res) => res.json({ status: "server is running 🚀" }));

// Mount route at /generate
app.use("/generate", generateRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
