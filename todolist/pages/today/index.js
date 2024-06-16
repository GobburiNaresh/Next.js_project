import { useRouter } from 'next/router';
import { Fragment } from 'react';
import TodayComponent from '../../components/Today/Today';
import { MongoClient } from 'mongodb';

const TodayPage = (props) => {
  const router = useRouter();
  const initialTodos = props.initialTodos.map(todo => ({
    ...todo,
    status: 'Incomplete'  // Ensure each todo has a status
  }));

  console.log(initialTodos);

  async function addTodoHandler(todoData) {
    console.log(todoData);
    const response = await fetch('/api/addTodo', {
      method: 'POST',
      body: JSON.stringify(todoData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    console.log(data);
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

  const todos = await todoListCollection.find().toArray();
  const initialTodos = todos.map(todoItem => ({
    description: todoItem.description,
    id: todoItem._id.toString(),
    status: 'Incomplete'  // Ensure the status field is added
  }));
  client.close();

  return {
    props: {
      initialTodos
    },
    revalidate: 10,
  };
}

export default TodayPage;
