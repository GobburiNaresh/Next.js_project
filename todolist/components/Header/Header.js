import { Fragment } from "react";

import { IoSearchOutline } from "react-icons/io5";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <h2>TodoList</h2>
        <div className={classes.search}>
          <IoSearchOutline className={classes.searchIcon} />
          <input placeholder="Search" />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
