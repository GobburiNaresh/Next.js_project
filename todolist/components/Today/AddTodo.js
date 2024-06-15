import React from 'react';
import Card from '../UI/Card/Card';
import classes from './AddTodo.module.css';

const AddTodo = (props) => {
  const onCancelHandler = () => {
    props.onClose();
  };

  const onAddTaskHandler = () => {
    
  };

  return (
    <Card>
      <div className={classes.addTodo}>
        <h3>Add Todo</h3>
        <div className={classes.buttonContainer}>
          <button onClick={onCancelHandler}>Cancel</button>
          <button onClick={onAddTaskHandler}>Add Task</button>
        </div>
      </div>
    </Card>
  );
};

export default AddTodo;
