import React, { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { getCroppedImg } from "./utils";

interface CropperContextType {
  image: string | undefined;
  setImage: (image: string | undefined) => void;
  zoom: number;
  setZoom: (zoom: number) => void;
  rotation: number;
  setRotation: (rotation: number) => void;
  crop: { x: number; y: number };
  setCrop: (crop: { x: number; y: number }) => void;
  croppedAreaPixels: { width: number; height: number } | null;
  setCroppedAreaPixels: (area: { x: number; y: number; width: number; height: number } | null) => void;
  onCropComplete: (croppedAreaPixels: { x: number; y: number; width: number; height: number }) => void;
  getProcessedImage: () => Promise<File | undefined>;
  handleZoomIn: () => void;
  handleZoomOut: () => void;
  handleRotateCw: () => void;
  handleRotateAntiCw: () => void;
  max_zoom: number;
  min_zoom: number;
  zoom_step: number;
  max_rotation: number;
  min_rotation: number;
  rotation_step: number;
  resetStates: () => void;
}

export const CropperContext = createContext<CropperContextType | undefined>(undefined);

const defaultImage = null;
const defaultCrop = { x: 0, y: 0 };
const defaultRotation = 0;
const defaultZoom = 1;
const defaultCroppedAreaPixels = null;

interface CropperProviderProps {
  children: ReactNode;
  max_zoom?: number;
  min_zoom?: number;
  zoom_step?: number;
  max_rotation?: number;
  min_rotation?: number;
  rotation_step?: number;
}

export const CropperProvider: React.FC<CropperProviderProps> = ({
  children,
  max_zoom = 3,
  min_zoom = 1,
  zoom_step = 0.1,
  max_rotation = 360,
  min_rotation = 0,
  rotation_step = 5,
}) => {
  const [image, setImage] = useState<string | undefined>(defaultImage || undefined);
  const [crop, setCrop] = useState(defaultCrop);
  const [rotation, setRotation] = useState(defaultRotation);
  const [zoom, setZoom] = useState(defaultZoom);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(defaultCroppedAreaPixels);

  const onCropComplete = useCallback((croppedAreaPixels: { x: number; y: number; width: number; height: number }) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleZoomIn = () => {
    if (zoom < max_zoom) {
      setZoom(zoom + zoom_step * 2);
    }
  };

  const handleZoomOut = () => {
    if (zoom > min_zoom) {
      setZoom(zoom - zoom_step * 2);
    }
  };

  const handleRotateCw = () => {
    setRotation(rotation + rotation_step);
  };

  const handleRotateAntiCw = () => {
    setRotation(rotation - rotation_step);
  };

  const getProcessedImage = async (): Promise<File | undefined> => {
    if (image && croppedAreaPixels) {
      const croppedImage = await getCroppedImg({
        imageSrc: image,
        pixelCrop: croppedAreaPixels,
        rotation,
        flip: { horizontal: false, vertical: false },
      });
      if (croppedImage?.file) {
        return new File([croppedImage.file], `img-${Date.now()}.png`, { type: "image/png" });
      }
    }
  };

  const resetStates = () => {
    setImage(defaultImage || undefined);
    setCrop(defaultCrop);
    setRotation(defaultRotation);
    setZoom(defaultZoom);
    setCroppedAreaPixels(defaultCroppedAreaPixels);
  };

  return (
    <CropperContext.Provider
      value={{
        image,
        setImage,
        zoom,
        setZoom,
        rotation,
        setRotation,
        crop,
        setCrop,
        croppedAreaPixels,
        setCroppedAreaPixels,
        onCropComplete,
        getProcessedImage,
        handleZoomIn,
        handleZoomOut,
        handleRotateAntiCw,
        handleRotateCw,
        max_zoom,
        min_zoom,
        zoom_step,
        max_rotation,
        min_rotation,
        rotation_step,
        resetStates,
      }}
    >
      {children}
    </CropperContext.Provider>
  );
};

export const useCropper = (): CropperContextType => {
  const context = useContext(CropperContext);
  if (!context) {
    throw new Error("useCropper must be used within a CropperProvider");
  }
  return context;
};

export default CropperProvider;
