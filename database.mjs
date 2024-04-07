import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
  "mongodb+srv://yoseftutian:05484gps@shklimcluster.w6r058d.mongodb.net/?retryWrites=true&w=majority&appName=ShklimCluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let cluster;

try {
  // Connect the client to the server	(optional starting in v4.7)
  cluster = await client.connect();
  // Send a ping to confirm a successful connection
} catch (error) {
  console.error(error);
  // Ensures that the client will close when you finish/error
}

const db = cluster.db("totahim");
export const todosCollection = db.collection("todos");
export default db;
