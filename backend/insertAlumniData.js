const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

const uri = 'mongodb+srv://kdimopoulos:testtestingtest@cluster0.xzx4jl0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB Atlas connection string

async function run() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    await client.connect();
    const database = client.db('test'); // Replace with your database name
    const collection = database.collection('users');

     // Drop the old collection
     try {
        await collection.drop();
        console.log('Old collection dropped.');
      } catch (error) {
        if (error.codeName === 'NamespaceNotFound') {
          console.log('Collection does not exist. No need to drop.');
        } else {
          throw error;
        }
      }

    // Read the JSON file
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'alumniData.json'), 'utf8'));

    // Insert the new data
    const newCollection = database.collection('users'); // Reference the collection again
    const result = await newCollection.insertMany(data);
    console.log(`${result.insertedCount} documents were inserted.`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);