// import express from "express";
// import { MongoClient } from "mongodb";

// const router = express.Router();

// const uri = "mongodb+srv://ziaziarisgiannhs:<Gia6973643262>@math-exams.gyw3ywu.mongodb.net/?retryWrites=true&w=majority&appName=math-exams";
// const client = new MongoClient(uri);
// const dbName = "math"; // ή όπως ονόμασες τη βάση σου στο Atlas

// router.get("/", async (req, res) => {
//   try {
//     await client.connect();
//     const db = client.db(dbName);
//     const exams = await db.collection("exams").find({}).toArray();
//     res.json(exams);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Failed to fetch exams");
//   }
// });

 import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// 📘 Schema για κάθε διαγώνισμα
const examSchema = new mongoose.Schema({
  grade: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
});

// 📘 Μοντέλο με βάση το schema
const Exam = mongoose.model("Exam", examSchema);

// ✅ GET /api/exams - επιστρέφει όλα τα διαγωνίσματα
router.get("/", async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch exams" });
  }
});

// (Προαιρετικό για μελλοντικό POST)
// router.post("/", async (req, res) => {
//   const { grade, title, url } = req.body;
//   try {
//     const newExam = new Exam({ grade, title, url });
//     await newExam.save();
//     res.status(201).json(newExam);
//   } catch (err) {
//     res.status(400).json({ error: "Failed to create exam" });
//   }
// });

export default router;
