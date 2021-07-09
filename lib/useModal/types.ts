import React from "react";

export interface ModalProps {
  children?: React.ReactNode;
  open: boolean;
  close: () => void;
  onClose?: () => void;
  title: string;
}

export interface ModalHookCompProps {
  children?: React.ReactNode;
}

export interface ModalHookProps
  extends Omit<ModalProps, "open" | "close" | "children"> {}
