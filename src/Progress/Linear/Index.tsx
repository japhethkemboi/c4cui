import React from "react";

export const LinearProgressBar = ({
  percentage,
  label,
  labelType,
  size,
  height,
  width,
}: {
  percentage: number;
  label?: string;
  labelType?: "negative" | "amber" | "positive";
  size?: number;
  height?: string;
  width?: string;
}) => {
  const labelColor =
    labelType === "negative"
      ? "text-red-500"
      : labelType === "amber"
      ? "text-amber-500"
      : labelType === "positive"
      ? "text-green-500"
      : "text-[var(--progress-label-color)]";

  const progressWidth = `${Math.min(Math.max(percentage, 0), 100)}%`;

  return (
    <div className={`relative flex flex-col gap-2 h-auto w-auto`}>
      <div className="flex gap-2 items-center">
        {label && (
          <>
            <p>{label}</p>
            <span>|</span>
          </>
        )}
        <p className={`font-semibold ${labelColor}`}>{Math.min(Math.max(percentage, 0), 100).toFixed(0)}%</p>
      </div>
      <div
        className={`w-full bg-[var(--progress-background-color)] min-h-2 rounded-full overflow-hidden relative ${
          size && `size-[${size}]`
        } ${height ? `h-[${height}]` : "h-2"} ${width && `w-[${width}]`}`}
      >
        <div
          className="bg-[var(--progress-active-background-color)] h-full transition-all duration-300 rounded-full"
          style={{ width: progressWidth }}
        />
      </div>
    </div>
  );
};
