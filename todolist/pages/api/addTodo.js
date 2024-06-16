import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const { description } = data;

    const client = await MongoClient.connect('mongodb+srv://naresh:iUd1FPyU8XVm6FEJ@cluster0.ni40gei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();
    const meetupsCollection = db.collection('TodoList');
    
    const result = await meetupsCollection.insertOne({ description });

    console.log(result);
    client.close();

    res.status(201).json({ message: 'todo item inserted' });
  }
}

export default handler;
