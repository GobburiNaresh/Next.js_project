import { useRouter } from 'next/router';
import { Fragment } from 'react';
import TodayComponent from '../../components/Today/Today';
import { MongoClient } from 'mongodb';

const TodayPage = (props) => {
  console.log(props);
  const router = useRouter();
  const { initialTodos } = props;

  async function addTodoHandler(todoData) {
    const response = await fetch('/api/addTodo', {
      method: 'POST',
      body: JSON.stringify(todoData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    
    router.push('/today');
  }

  return (
    <Fragment>
      <TodayComponent onAddTodo={addTodoHandler} initialTodos={initialTodos}/>
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://naresh:iUd1FPyU8XVm6FEJ@cluster0.ni40gei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const todoListCollection = db.collection("TodoList");

  
  const todoList = await todoListCollection.find().toArray();
  client.close();

  return {
    props: {
      initialTodos: todoList.map(todoItem =>({
        id: todoItem._id.toString(),
        description: todoItem.todos.description,
        status: todoItem.todos.status

      }))
    },
    revalidate: 10,
  };
}

export default TodayPage;
