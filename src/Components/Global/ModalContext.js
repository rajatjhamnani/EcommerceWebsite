import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ModalContext = createContext();

const ModalContextProvider = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const modalHandler = () => {
    setShow(true);
  };
  const hideModalHandler = () => {
    setShow(false);
    navigate("/store");
  };
  const modalValue = {
    show: show,
    modal: modalHandler,
    close: hideModalHandler,
  };

  return (
    <ModalContext.Provider value={modalValue}>
      {props.children}
    </ModalContext.Provider>
  );
};
export default ModalContextProvider;
