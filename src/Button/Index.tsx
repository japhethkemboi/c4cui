import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";

export const Button = ({
  icon,
  label,
  onClick,
  disabled = false,
  outline = false,
  className = "",
  type,
  active,
}: {
  icon?: ReactNode;
  label?: string;
  active?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
  invert?: boolean;
  className?: string;
  type?: string;
}) => {
  return (
    <button
      type={type === "submit" ? "submit" : type === "reset" ? "reset" : "button"}
      onClick={onClick}
      className={twMerge(
        classNames(
          "p-4 rounded-xl whitespace-nowrap flex items-center gap-2 transition-all justify-center hover:border-none hover:scale-95 bg-[var(--primary-color)] text-[var(--bg-color)]",
          {
            "border border-[var(--primary-color)] bg-transparent text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--bg-color)]":
              outline,
            "bg-[var(--primary-color)] text-[var(--bg-color)]": active,
            "cursor-not-allowed opacity-70 scale-100": disabled,
          },
          className
        )
      )}
      disabled={disabled}
    >
      {icon}
      {label}
    </button>
  );
};
