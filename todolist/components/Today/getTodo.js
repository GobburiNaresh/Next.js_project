import { useState, Fragment } from 'react';
import { CiCircleCheck, CiMenuKebab } from "react-icons/ci";
import { IoIosRadioButtonOff } from "react-icons/io";
import classes from './getTodo.module.css';
import Delete from './Delete/Delete';

const GetTodoComponent = (props) => {
  const { initialTodos, onTodoSelect } = props;
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [selectedTodoData, setSelectedTodoData] = useState(null); 
  const [todos, setTodos] = useState(initialTodos); // Manage todos state

  if (!todos) {
    return <p>Loading...</p>;
  }

  if (!Array.isArray(todos)) {
    return <p>Error: Todos data is not in expected format.</p>;
  }

  const IconChangeHandler = (id, todo) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
    onTodoSelect(todo);
  };

  const onChangeHandler = (id, todo) => {
    setSelectedTodo(prevState => (prevState === id ? null : id));
    setSelectedTodoData(todo); 
  }

  const deleteHandler = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)); // Update state after deletion
  }

  return (
    <Fragment>
      <div>
        <ul className={classes.getItem}>
          {todos.map((todo) => (
            todo.status === 'Incomplete' && (
              <li key={todo.id} className={classes.item}>
                <div className={classes.iconContainer}>
                  {checkedItems[todo.id] ? (
                    <CiCircleCheck className={classes.radio} onClick={() => IconChangeHandler(todo.id, todo)} />
                  ) : (
                    <IoIosRadioButtonOff className={classes.radio} onClick={() => IconChangeHandler(todo.id, todo)} />
                  )}
                </div>
                <span className={classes.description}>{todo.description}</span>
                <CiMenuKebab className={classes.menuKebab} onClick={() => onChangeHandler(todo.id, todo)} />
                {selectedTodo === todo.id && (
                  <div className={classes.DeleteContainer}>
                    <Delete todo={selectedTodoData} onDelete={deleteHandler} />
                  </div>
                )}
              </li>
            )
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default GetTodoComponent;
