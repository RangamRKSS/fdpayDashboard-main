#!/usr/bin/env node

import express from "express";
import path from "path";
import open from "open";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 4000;

// ✅ Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve static files
app.use(express.static(path.join(__dirname, "dist")));

// ✅ Handle SPA routes safely
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// ✅ Start server
app.listen(PORT, async () => {
  const url = `http://localhost:${PORT}`;
  console.log(`🚀 FDDevPay running at ${url}`);

  try {
    await open(url);
  } catch (err) {
    console.log("Browser open failed ❌");
  }
});