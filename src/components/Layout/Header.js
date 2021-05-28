import { Fragment } from "react";

import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";

export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Only-Food</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious foods!!!" />
      </div>
    </Fragment>
  );
}
