import { MongoClient } from 'mongodb';

async function Handler(req,res) {
    if(req.method === 'POST'){
        const data = req.body;

        const {title,image,description,address} = data;

        const client = await MongoClient.connect('mongodb+srv://naresh:iUd1FPyU8XVm6FEJ@cluster0.ni40gei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne({data});

        console.log(result);
        
        client.close();

        res.status(201).json({message: 'Meetup inserted'});
        
    }
    
}

export default Handler;