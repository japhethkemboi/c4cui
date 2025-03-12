import React, { createContext, useState, useContext, ReactNode } from "react";

interface CropperContextType {
  isCropperOpen: boolean;
  openCropper: (content: ReactNode) => void;
  closeCropper: () => void;
  cropperContent: ReactNode | null;
}

const CropperContext = createContext<CropperContextType | undefined>(undefined);

export const useCropper = (): CropperContextType => {
  const context = useContext(CropperContext);
  if (!context) {
    throw new Error("useCropper must be used within a ModalProvider");
  }
  return context;
};

export const CropProvider = ({ children }: { children: ReactNode }) => {
  const [isCropperOpen, setIsCropperOpen] = useState<boolean>(false);
  const [cropperContent, setCropperContent] = useState<ReactNode | null>(null);

  const openCropper = (content: ReactNode) => {
    setCropperContent(content);
    setIsCropperOpen(true);
  };

  const closeCropper = () => {
    setIsCropperOpen(false);
    setCropperContent(null);
  };

  return (
    <CropperContext.Provider value={{ isCropperOpen, openCropper, closeCropper, cropperContent }}>
      {children}
    </CropperContext.Provider>
  );
};
