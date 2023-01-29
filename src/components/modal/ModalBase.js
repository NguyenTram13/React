import React from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../Portal";

const ModalBase = ({ visible, onClose, children, bodyClassName = "" }) => {
  return (
    <>
      <CSSTransition in={visible} unmountOnExit timeout={250} classNames="zoom">
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            bodyStyle={{ transition: "all 250ms" }}
            containerClassName="fixed z-[9999] inset-0 flex items-center justify-center "
            bodyClassName={`relative z-10 content ${bodyClassName}`}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
