const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lo1m20r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const coffeesCollection = client.db("coffeeDB").collection("coffees");

    // get all coffees api
    app.get("/coffees", async (req, res) => {
      const result = await coffeesCollection.find().toArray();
      res.send(result);
    });

    // get single coffee api
    app.get("/coffees/:id", async (req, res) => {
      const id = req.params?.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeesCollection.findOne(query);
      res.send(result);
    });

    // delete single coffee api
    app.delete("/coffees/:id", async (req, res) => {
      const id = req.params?.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeesCollection.deleteOne(query);
      res.send(result);
    });

    // update single coffee api
    app.put("/coffees/:id", async (req, res) => {
      const id = req.params?.id;
      const { name, chef, supplier, taste, category, details, photo, price } =
        req.body;
        // console.log(name, chef, supplier, taste, category, details, photo, price)
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateCoffee = {
        $set: {
          name: name,
          chef: chef,
          supplier: supplier,
          taste: taste,
          category: category,
          details: details,
          photo: photo,
          price: price,
        },
      };
      const result = await coffeesCollection.updateOne(
        query,
        updateCoffee,
        options
      );
      res.send(result);
    });

    // post coffees info api
    app.post("/coffees", async (req, res) => {
      const { data } = req.body;
      const result = await coffeesCollection.insertOne(data);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("coffee store server is running");
});

app.listen(port, () => {
  console.log(`coffee store server running port ${port}`);
});
