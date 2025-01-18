import React, { lazy, Suspense } from "react";

const ReactQuill = lazy(() => import("react-quill-new"));

export const RichTextEditor = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => {
  return (
    <div className="flex w-full h-auto relative overflow-hidden border border-black/20 rounded">
      <Suspense fallback={<div>Loading editor...</div>}>
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
      </Suspense>
    </div>
  );
};
