import React from "react";

export const CircularProgress = ({
  percentage,
  label,
  labelClassName,
  percentClassName,
  size,
}: {
  percentage: number;
  label?: string;
  percentClassName?: string;
  labelClassName?: string;
  size?: number;
}) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;

  return (
    <div className={`relative flex items-center justify-center ${size ? `size-${size}` : "grow"}`}>
      <svg className="absolute top-0 left-0" width="100%" height="100%" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} stroke="var(--background-color)" strokeWidth={8} fill="transparent" />
      </svg>

      <svg className="absolute top-0 left-0 rotate-[-90deg]" width="100%" height="100%" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="var(--primary-color)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute flex flex-col items-center justify-center text-center font-semibold text-xl text-[var(--text-color)]">
        <span className={percentClassName}>{percentage}%</span>
        <span className={labelClassName || "text-sm font-light"}>{label}</span>
      </div>
    </div>
  );
};
