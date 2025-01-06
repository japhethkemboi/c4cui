import "./index.css";
import React from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

export const RichTextEditor = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  return (
    <div className="flex w-full h-auto relative overflow-hidden border border-black/20 rounded">
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={{
          toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["bold", "italic", "underline"],
            [{ align: [] }],
            ["link"],
          ],
        }}
        theme="snow"
        className="w-full custom-quill-editor"
      />
    </div>
  );
};
