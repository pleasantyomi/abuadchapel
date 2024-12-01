import { MongoClient, Db } from "mongodb";

let client: MongoClient | null = null;
let db: Db | null = null;

const uri = process.env.MONGODB_URI || ""; 
const dbName = process.env.MONGODB_DB || "test"; 

if (!uri || !dbName) {
  throw new Error("Please define MONGODB_URI and MONGODB_DB in your .env file");
}

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db(dbName);
  }

  return { client, db };
}
