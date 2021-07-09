import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import style from "../../assets/styles/lib/modal/style.module.scss";

// Types
import { ModalProps } from "./types";

// Misc
import Button from "../Button";

const Modal = (props: ModalProps) => {
  const { open, close, onClose, children, title } = props;
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(open);

  console.log(children);

  const handleCloseClick = () => {
    close();
    if (onClose) onClose();
  };

  useEffect(() => {
    setIsDialogOpen(open);
  }, [open]);

  const modalContent = (
    <div className={style.backdrop}>
      <div className={style.paper}>
        <div className={style.headLine}>
          <h1 className={style.header3}>{title}</h1>
          <div>
            <Button onClick={handleCloseClick} className={style.closeBtn}>
              x
            </Button>
          </div>
        </div>
        <div className={style.children}>{children}</div>
      </div>
    </div>
  );

  if (isDialogOpen) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
