import express from "express";
import { createDir, readFolder } from "./fs-utils.js";

const app = express();

// creating file
app.get("/create-file", (req, res) => {
  createDir();
  res.send({ msg: "File created successfully" });
});

// readdir
app.get("/read-files", (req, res) => {
  const files = readFolder("files");
  res.send(files);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});