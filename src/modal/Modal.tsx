import React, { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  children: ReactNode;
}

export const Modal = React.memo(({ isOpen, children }: Props) => {
  if (!isOpen) return null;
  return (
    <div className="fixed z-40 flex flex-col top-0 bottom-0 justify-center items-center gap-4 overflow-hidden w-full h-full bg-gray-950/80 backdrop-blur">
      {children}
    </div>
  );
});

Modal.displayName = "Modal";
