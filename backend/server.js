import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import examsRoutes from "./routes/exams.routes.js"; // ✅ ΠΡΕΠΕΙ να έχεις .js στο τέλος για ES Modules
import path from "path";
import { fileURLToPath } from "url";


const app = express();
const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 🔒 Αντικατάστησε με το δικό σου connection string
// const MONGO_URI = "mongodb+srv://ziaziarisgiannhs:<Gia6973643262>@math-exams.gyw3ywu.mongodb.net/mathdb?retryWrites=true&w=majority&appName=math-exams";
const MONGO_URI = "mongodb+srv://ziaziarisgiannhs:Gia6973643262@math-exams.gyw3ywu.mongodb.net/math?retryWrites=true&w=majority&appName=math-exams";

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.join(__dirname, "public/files")));

// ✅ MongoDB Σύνδεση
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ API routes
app.use("/api/exams", examsRoutes);

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
