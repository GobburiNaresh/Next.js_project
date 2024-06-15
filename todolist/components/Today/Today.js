import React, { useState } from 'react';
import classes from './Today.module.css';
import { CiCirclePlus } from "react-icons/ci";
import Card from '../UI/Card/Card';
import AddTodo from './AddTodo';

const TodayComponent = () => {
  const options = { day: 'numeric', weekday: 'short', month: 'long' };
  const currentDate = new Date().toLocaleDateString('en-US', options);

  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  const onAddTaskHandler = () => {
    setShowAddTaskForm(true);
  };

  const onCloseTaskHandler = () => {
    setShowAddTaskForm(false);
  };

  return (
    <div className={classes.today}>
      <Card>
        <div className={classes.cardHeader}>
          <h1>Today</h1>
          <p className={classes.currentDate}>{currentDate}</p>
        </div>
        <div className={classes.addtask} onClick={onAddTaskHandler}>
          <CiCirclePlus className={classes.icon}/>
          <h3>Add Task</h3>
        </div>
        {showAddTaskForm && <AddTodo onClose={onCloseTaskHandler} />}
      </Card>
    </div>
  );
};

export default TodayComponent;
