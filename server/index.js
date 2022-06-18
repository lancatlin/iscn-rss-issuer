import express from "express";
import axios from "axios";
import parse from "./parser.js";
const app = express();
app.get("/api", async (req, res) => {
  const url = req.query.url;
  if (!url) {
    res.status(400).send("MISSING_URL");
    return;
  }
  try {
    const { data } = await axios.get(url);
    res.json(await parse(data));
  } catch (err) {
    res.json(err);
  }
  return;
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
