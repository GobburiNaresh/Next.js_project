
const CompletedTaskComponent = ({ todo }) => {
  console.log(todo);
    return (
      <div>
        <h1>Todo Details</h1>
        <p>Description: {todo.description}</p>
        <p>Status: {todo.status}</p>
      </div>
    );
  };
  
  export default CompletedTaskComponent;
  