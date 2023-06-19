const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 8000;
const cors = require("cors");

const mongoUrl =
  "mongodb+srv://test:UkwllsbbQPEFOeua@cluster0.kprjpjf.mongodb.net/";
const dbName = "test";
const collectionName = "authors";

require("dotenv").config({ path: "./.env" });

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// In-memory cache
const cache = {};

app.get("/search", async (req, res) => {
  const searchQuery = req.query.query;

  try {
    if (cache[searchQuery]) {
      console.log("Getting data from cache.");
      return res.json({ results: cache[searchQuery] });
    }

    const client = await MongoClient.connect(mongoUrl);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const results = await collection
      .find({ text: new RegExp(searchQuery, "i") })
      .toArray();

    client.close();

    cache[searchQuery] = results;

    res.json({ results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while searching." });
  }
});

app.get("/search/all", async (req, res) => {
  try {
    const client = await MongoClient.connect(mongoUrl);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const results = await collection.find({}).toArray();

    client.close();
    res.json({ results });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching all data." });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
