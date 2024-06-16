const AnotherComponent = ({ todo }) => {
    return (
      <div>
        <h1>Todo Details</h1>
        <p>Description: {todo.description}</p>
        <p>Status: {todo.status}</p>
        {/* Add more details as needed */}
      </div>
    );
  };
  
  export default AnotherComponent;
  