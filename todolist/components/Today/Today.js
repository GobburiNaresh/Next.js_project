import React, { useState } from 'react';
import classes from './Today.module.css';
import { CiCirclePlus, CiMenuKebab } from "react-icons/ci";
import Card from '../UI/Card/Card';
import AddTodo from './AddTodo';
import GetTodoComponent from './getTodo';
import { useRouter } from 'next/router';

const TodayComponent = ({ onAddTodo, initialTodos }) => {
  const options = { day: 'numeric', weekday: 'short', month: 'long' };
  const currentDate = new Date().toLocaleDateString('en-US', options);
  const router = useRouter();

  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const onAddTaskHandler = () => {
    setShowAddTaskForm(true);
  };

  const onCloseTaskHandler = () => {
    setShowAddTaskForm(false);
  };

  const handleTodoSelect = (todo) => {
    setSelectedTodo(todo);
  };

  const completeTaskHandler = () => {
    router.push('/today/completedTask'); // Navigate to the completed task route
  };

  return (
    <div className={classes.today}>
      <Card>
        <div className={classes.cardHeader}>
          <h1>Today</h1>
          <p className={classes.currentDate}>{currentDate}</p>
          <div className={classes.complete}>
            <CiMenuKebab onClick={completeTaskHandler} />
          </div>
        </div>
        
        <div className='getTodoItem'>
          {!selectedTodo ? (
            <GetTodoComponent initialTodos={initialTodos} onTodoSelect={handleTodoSelect} />
          ) : (
            <CompleteTaskComponent todo={selectedTodo} />
          )}
        </div>
        <div className={classes.addtask} onClick={onAddTaskHandler}>
          <CiCirclePlus className={classes.icon} />
          <h3>Add Task</h3>
        </div>
        {showAddTaskForm && <AddTodo onClose={onCloseTaskHandler} onAddTodo={onAddTodo} />}
      </Card>
    </div>
  );
};

export default TodayComponent;
