#!/usr/bin/env node
import express from "express";
import path from "path";
import open from "open";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 4000;

// ✅ Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve Vite dist folder
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Dashboard running at http://localhost:${PORT}`);
  open(`http://localhost:${PORT}`);
});