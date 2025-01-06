import React, { ReactNode } from "react";
import { GoChevronLeft } from "react-icons/go";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { Button } from "../Button/Index";
import { InputComponent } from "../Input/Index";

interface Theme {
  border?: boolean;
  borderStyle?: string;
  bgColor?: string;
  textColor?: string;
}

export const Header = ({
  title,
  back,
  children,
  theme,
  className,
  query,
  setQuery,
}: {
  title?: string;
  back?: () => void;
  children?: ReactNode;
  theme?: Theme;
  className?: string;
  query?: string;
  setQuery?: (query: string) => void;
}) => {
  return (
    <div
      className={twMerge(
        classNames(
          "flex justify-between items-center p-4 rounded-xl w-full border border-black/20 bg-[var(--header-bg-color)] text-[var(--header-text-color)]",
          className
        )
      )}
    >
      <div className="flex gap-4 items-center">
        {back && (
          <Button outline={true} onClick={back} icon={<GoChevronLeft size={18} />} className="p-2 border-none" />
        )}
        <h2 className="text-lg">{title}</h2>
      </div>

      <div className="flex gap-4 items-center">
        {setQuery && <InputComponent type="search" value={query} onChange={setQuery} />}
        {children}
      </div>
    </div>
  );
};
