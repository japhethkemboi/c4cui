import React from "react";
import { useRef } from "react";
import { PiPen, PiPlus } from "react-icons/pi";
import { Cropper } from "../Cropper/Index";
import { useCropper } from "../Cropper/CropContext";
import { Button } from "../Button/Index";

export const ImagePicker = ({ images, setImages }: { images: string[]; setImages: (images: string[]) => void }) => {
  const { openCropper, closeCropper } = useCropper();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () =>
        openCropper(
          <Cropper
            title="Crop Image"
            handleImageChange={handleImageChange}
            image={reader.result as string}
            setImage={(e) => setImages([...(images || []), e])}
            handleClose={closeCropper}
          />
        );

      reader.readAsDataURL(file);

      e.target.value = "";
    }
  };

  return (
    <div onClick={() => fileInputRef.current?.click()} className="flex w-auto mr-auto gap-4 shrink-0">
      <div className="flex gap-4 items-center">
        {images &&
          images.map((image, i) => (
            <div className="relative rounded-xl">
              <img src={image} alt="Move Item Preview" width={96} height={96} className="rounded-xl" />
              <Button
                onClick={() => fileInputRef.current?.click()}
                outline={true}
                icon={<PiPen size={18} />}
                className="cursor-pointer p-2 border-none absolute top-2 left-2"
              />
            </div>
          ))}
        <Button
          onClick={() => fileInputRef.current?.click()}
          outline={true}
          icon={<PiPlus size={18} />}
          className="cursor-pointer p-2 border-none"
        />
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
        style={{ display: "none" }}
      />
    </div>
  );
};
