import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

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
const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {/* <Backdrop />
          <ModalOverlay>{props.children}</ModalOverlay> */}
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
        portalElement)}
    </Fragment>
  );
};

export default Modal;
