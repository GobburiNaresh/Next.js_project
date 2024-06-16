import { MongoClient, ObjectId } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = JSON.parse(req.body);

    const client = await MongoClient.connect('mongodb+srv://naresh:iUd1FPyU8XVm6FEJ@cluster0.ni40gei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();
    const todoListCollection = db.collection('TodoList');
    
    const result = await todoListCollection.deleteOne({ _id: new ObjectId(id) });
    
    client.close();

    res.status(200).json({ message: 'todo item deleted' });
  }
}

export default handler;
