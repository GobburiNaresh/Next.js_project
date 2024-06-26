import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const description = data.description;
    const todos = {
      description,
      status: 'Incomplete'
    };

    const client = await MongoClient.connect('mongodb+srv://naresh:iUd1FPyU8XVm6FEJ@cluster0.ni40gei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();
    const todoListCollection = db.collection('TodoList');
    
    const result = await todoListCollection.insertOne({ todos });
    
    client.close();

    res.status(201).json({ message: 'todo item inserted' });
  }
}

export default handler;

