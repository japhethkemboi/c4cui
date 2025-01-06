import React, { useRef } from "react";
import { PiArrowArcLeft, PiArrowArcRight, PiMinus, PiPen, PiPlus } from "react-icons/pi";
import { Button } from "../Button/Index";
import { InputComponent } from "../Input/Index";
import EasyCropper from "react-easy-crop";
import { useCropper } from "./CropperContext";

interface CropperModalContentProps {
  title: string;
  onComplete: () => void;
  handleClose: () => void;
}

export const Cropper: React.FC<CropperModalContentProps> = ({ title, onComplete, handleClose }) => {
  const {
    image,
    zoom,
    zoom_step,
    min_zoom,
    max_zoom,
    handleZoomIn,
    handleZoomOut,
    min_rotation,
    max_rotation,
    setZoom,
    rotation,
    setImage,
    crop,
    setCrop,
    rotation_step,
    setRotation,
    onCropComplete,
    handleRotateAntiCw,
    handleRotateCw,
  } = useCropper();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center shrink-0 justify-center relative bg-[var(--bg-color)] rounded p-4">
      <h2 className="font-semibold text-xl text-[var(--text-color)]">{title}</h2>
      <div className="relative flex size-[400px]">
        <Button
          onClick={() => fileInputRef.current?.click()}
          className="absolute top-2  right-2 z-10 p-2"
          outline={true}
          icon={<PiPen size={18} />}
        />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
          style={{ display: "none" }}
        />
        <EasyCropper
          image={image}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          cropShape="rect"
          aspect={1}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          showGrid={false}
          cropSize={{ width: 350, height: 350 }}
          style={{
            containerStyle: {
              height: 400,
              width: 400,
            },
          }}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex w-full items-center justify-between gap-4">
          <Button outline={true} className="p-2" onClick={handleZoomOut} icon={<PiMinus size={18} />} />
          <InputComponent
            type="range"
            name="volju"
            minNumber={min_zoom}
            maxNumber={max_zoom}
            step={zoom_step}
            value={zoom.toString()}
            onChange={(e) => setZoom(Number(e))}
          />
          <Button outline={true} className="p-2" onClick={handleZoomIn} icon={<PiPlus size={18} />} />
        </div>
        <div className="flex w-full items-center justify-between gap-4">
          <Button outline={true} className="p-2" onClick={handleRotateAntiCw} icon={<PiArrowArcLeft size={18} />} />
          <InputComponent
            type="range"
            name="volju"
            minNumber={min_rotation}
            maxNumber={max_rotation}
            step={rotation_step}
            value={rotation.toString()}
            onChange={(e) => setRotation(Number(e))}
          />
          <Button outline={true} className="p-2" onClick={handleRotateCw} icon={<PiArrowArcRight size={18} />} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <Button className="w-full" outline={true} onClick={handleClose} label="Cancel" />
        <Button className="w-full" label="Save" onClick={onComplete} />
      </div>
    </div>
  );
};
