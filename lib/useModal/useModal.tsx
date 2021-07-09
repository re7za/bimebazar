import React, { useState } from "react";

// Types
import { ModalHookProps, ModalHookCompProps } from "./types";

import Modal from "./Modal";

const useModal = (props: ModalHookProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen((prev) => !prev),
    // eslint-disable-next-line react/display-name
    Modal: ({ children }: ModalHookCompProps) => (
      <Modal {...props} open={isOpen} close={() => setIsOpen(false)}>
        {children}
      </Modal>
    ),
  };
};

export default useModal;
