import React,{useState} from 'react'
import { Fragment } from "react";
import { FaHome } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import classes from "./Header.module.css";
import {useRouter} from 'next/router';


const Header = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };
  const HomeHandler = () => {
    router.push('/');
  }
  const AddTodoHandler = () => {
    router.push('/today');
  }
  const searchHandler = () => {
    onSearch(searchTerm);
  };



  return (
    <Fragment>
      <div className={classes.header}>
        <FaHome className={classes.home} onClick={HomeHandler}/>
        <h2>TodoList</h2>
        <div className={classes.search}>
          <IoSearchOutline className={classes.searchIcon} onClick={searchHandler}/>
          <input placeholder="Search" value={searchTerm} onChange={searchChangeHandler}/>
        </div>
        <FaPlus className={classes.addTodo} onClick={AddTodoHandler}/>
      </div>
    </Fragment>
  );
};

export default Header;
