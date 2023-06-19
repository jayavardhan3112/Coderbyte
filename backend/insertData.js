const MongoClient = require("mongodb").MongoClient;
const mongoUrl =
  "mongodb+srv://test:UkwllsbbQPEFOeua@cluster0.kprjpjf.mongodb.net/";
const dbName = "test";
const collectionName = "authors";

async function insertDocuments() {
  const client = new MongoClient(mongoUrl);

  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const randomData = await fetch(
      "https://en.wikipedia.org/api/rest_v1/page/random/summary"
    );
    const random = await randomData.json();
    const documents = [
      {
        author: random.title,
        date: new Date(),
        name: random.description,
        text: random.extract,
      },
    ];

    const result = await collection.insertMany(documents);
    console.log(`${result.insertedCount} documents inserted.`);

    await collection.createIndex({ text: "text" });
    console.log("Text index created successfully.");
  } catch (error) {
    console.error("Error inserting documents:", error);
  } finally {
    client.close();
  }
}

async function runFunctionMultipleTimes(func, times, interval) {
  for (let i = 0; i < times; i++) {
    await func();
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
}

runFunctionMultipleTimes(insertDocuments, 10, 1000);
