import React, { useContext } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";
import { CloseButton } from "react-bootstrap";
import { ModalContext } from "../Global/ModalContext";
const ModalOverlay = (props) => {
  const modalctx = useContext(ModalContext);
  if (!props.show) {
    return null;
  }
  return (
    <div className={classes.modalWrapper}>
      <div className={classes.mode}>
        <CloseButton
          onClick={() => modalctx.close()}
          aria-label="Hide"
          className={classes.btn}
        />
        {props.children}
      </div>
    </div>
  );
};
export default ModalOverlay;
