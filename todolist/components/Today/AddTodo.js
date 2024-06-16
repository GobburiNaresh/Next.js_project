import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import classes from './AddTodo.module.css';

const AddTodo = (props) => {
  const [taskName, setTaskName] = useState('');

  const onCancelHandler = () => {
    props.onClose();
  };

  const onAddTaskHandler = () => {
    if (taskName.trim().length > 0) {
      props.onAddTodo({
        description: taskName,
      });
      setTaskName('');
      props.onClose();
    }
  };

  const onTaskNameChangeHandler = (event) => {
    setTaskName(event.target.value);
  };

  return (
    <Card>
      <div className={classes.addTodo}>
        <label>Task name</label>
        <input
          type="text"
          placeholder="Description"
          value={taskName}
          onChange={onTaskNameChangeHandler}
        />
        <div className={classes.buttonContainer}>
          <button onClick={onCancelHandler}>Cancel</button>
          <button onClick={onAddTaskHandler}>Add Task</button>
        </div>
      </div>
    </Card>
  );
};

export default AddTodo;
