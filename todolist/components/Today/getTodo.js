import { useState } from 'react';
import { CiCircleCheck } from "react-icons/ci";
import { IoIosRadioButtonOff } from "react-icons/io";
import { Fragment } from 'react';
import classes from './getTodo.module.css';

const GetTodoComponent = (props) => {
  const { initialTodos, onTodoSelect } = props;
  const [checkedItems, setCheckedItems] = useState({});

  if (!initialTodos) {
    return <p>Loading...</p>;
  }

  if (!Array.isArray(initialTodos)) {
    return <p>Error: Todos data is not in expected format.</p>;
  }

  const IconChangeHandler = (id, todo) => {
    console.log(id);
    setCheckedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
    onTodoSelect(todo); // Pass the selected todo to the parent component
  };

  return (
    <Fragment>
      <div>
        <ul className={classes.getItem}>
          {initialTodos.map((todo) => (
            todo.status === 'Incomplete' && (
              <li key={todo.id} className={classes.item}>
                {checkedItems[todo.id] ? (
                  <CiCircleCheck className={classes.radio} onClick={() => IconChangeHandler(todo.id, todo)} />
                ) : (
                  <IoIosRadioButtonOff className={classes.radio} onClick={() => IconChangeHandler(todo.id, todo)} />
                )}
                {todo.description}
              </li>
            )
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default GetTodoComponent;
