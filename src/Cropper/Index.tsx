import React, { useRef, useState } from "react";
import { PiArrowArcLeft, PiArrowArcRight, PiMinus, PiPen, PiPlus } from "react-icons/pi";
import EasyCropper from "react-easy-crop";
import { Button } from "../Button/Index";
import { InputComponent } from "../Input/Index";
import { toast } from "../Toast/Index";

export const Cropper = ({
  title,
  image,
  setImage,
  handleImageChange,
  handleClose,
  max_zoom = 3,
  min_zoom = 1,
  zoom_step = 0.1,
  max_rotation = 360,
  min_rotation = 0,
  rotation_step = 5,
  defaultCrop = { x: 0, y: 0 },
  defaultRotation = 0,
  defaultZoom = 1,
  cropShape = "rect",
  defaultCroppedAreaPixels = null,
}: {
  title?: string;
  image: string | undefined;
  max_zoom?: number;
  min_zoom?: number;
  zoom_step?: number;
  max_rotation?: number;
  min_rotation?: number;
  rotation_step?: number;
  defaultCrop?: { x: number; y: number };
  defaultRotation?: number;
  defaultZoom?: number;
  defaultCroppedAreaPixels?: {
    x: number;
    y: number;
    width: number;
    height: number;
  } | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setImage: (image: string) => void;
  handleClose: () => void;
  cropShape?: "rect" | "round";
}) => {
  const [crop, setCrop] = useState(defaultCrop);
  const [rotation, setRotation] = useState(defaultRotation);
  const [flip, setFlip] = useState<{ horizontal: boolean; vertical: boolean }>({ horizontal: false, vertical: false });
  const [zoom, setZoom] = useState(defaultZoom);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(defaultCroppedAreaPixels);

  const handleSave = async () => {
    if (image && croppedAreaPixels) {
      const rotateCanvas = document.createElement("canvas");
      const ctx = rotateCanvas.getContext("2d");

      if (ctx) {
        let img = new Image();
        img.src = image;
        img.onload = function () {
          const rotRad = rotation * (Math.PI / 180);

          const bBoxWidth = Math.abs(Math.cos(rotRad) * img.width) + Math.abs(Math.sin(rotRad) * img.height);
          const bBoxHeight = Math.abs(Math.sin(rotRad) * img.width) + Math.abs(Math.cos(rotRad) * img.height);

          rotateCanvas.width = bBoxWidth;
          rotateCanvas.height = bBoxHeight;

          ctx.translate(rotateCanvas.width / 2, rotateCanvas.height / 2);
          ctx.rotate(rotRad);
          ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
          ctx.drawImage(img, -img.width / 2, -img.height / 2);

          const cropCanvas = document.createElement("canvas");
          const cropCtx = cropCanvas.getContext("2d");

          if (cropCtx) {
            cropCanvas.width = croppedAreaPixels.width;
            cropCanvas.height = croppedAreaPixels.height;

            cropCtx.drawImage(
              rotateCanvas,
              croppedAreaPixels.x,
              croppedAreaPixels.y,
              croppedAreaPixels.width,
              croppedAreaPixels.height,
              0,
              0,
              croppedAreaPixels.width,
              croppedAreaPixels.height
            );

            const imgUrl = cropCanvas.toDataURL("image/png");
            if (imgUrl) {
              setImage(imgUrl);
              handleClose();
            } else {
              toast.error("Failed to create final image.");
            }
          }
        };
      }
    }
  };

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

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex flex-col gap-4 items-center shrink-0 justify-center relative bg-[var(--background-color)] rounded p-4">
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
          aspect={1}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          rotation={rotation}
          cropShape={cropShape}
          onCropComplete={(croppedArea, croppedAreaPixels) => {
            setCroppedAreaPixels(croppedAreaPixels);
          }}
          showGrid={true}
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
        <Button className="w-full" label="Done" onClick={handleSave} />
      </div>
    </div>
  );
};
