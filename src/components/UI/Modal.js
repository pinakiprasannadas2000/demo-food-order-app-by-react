import { Fragment } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const poratlElement = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <Fragment>
      {createPortal(<Backdrop />, poratlElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        poratlElement
      )}
    </Fragment>
  );
}
