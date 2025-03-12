import React, { ReactNode } from "react";
import { GoChevronLeft } from "react-icons/go";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import { Button } from "../Button/Index";
import { InputComponent } from "../Input/Index";
import {
  PiArrowArcRight,
  PiArrowCircleDownRight,
  PiCopy,
  PiDotsThreeVertical,
  PiPencil,
  PiTrash,
} from "react-icons/pi";
import { BiChevronRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";

export const Header = ({
  title,
  back,
  children,
  type,
  className,
  query,
  refreshing,
  refreshIcon,
  onRefresh,
  setQuery,
  deleteIcon,
  onDelete,
  editIcon,
  onEdit,
  copyIcon,
  onCopy,
  optionsIcon,
  onOptionsClicked,
  steps,
  closeIcon,
  onClose,
  actionIcon,
  actionLabel,
  onAction,
}: {
  refresh?: boolean;
  title?: string | ReactNode;
  back?: () => void;
  children?: ReactNode;
  type?: "bordered";
  className?: string;
  query?: string;
  editIcon?: ReactNode;
  onEdit?: () => void;
  copyIcon?: ReactNode;
  onCopy?: () => void;
  deleteIcon?: ReactNode;
  onDelete?: () => void;
  optionsIcon?: ReactNode;
  onOptionsClicked?: () => void;
  refreshing?: boolean;
  refreshIcon?: ReactNode;
  onRefresh?: () => void;
  steps?: [{ name: string; onClick?: () => void }];
  setQuery?: (query: string) => void;
  closeIcon?: ReactNode;
  onClose?: () => void;
  actionIcon?: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}) => {
  return (
    <div
      className={twMerge(
        classNames(
          "flex justify-between items-center p-4 rounded-xl w-full",
          {
            "border border-[var(--border-color)]": type === "bordered",
            "bg-[var(--header-background-color)] text-[var(--header-text-color)]": type !== "bordered",
          },
          className
        )
      )}
    >
      <div className="flex gap-4 items-center line-clamp-1 text-ellipsis">
        {back && (
          <Button
            outline={true}
            onClick={back}
            icon={<GoChevronLeft size={18} />}
            className="p-2 border-none bg-transparent text-[var(--header-text-color)] hover:bg-[var(--header-button-hover-background-color)] hover:text-[var(--header-button-hover-text-color)]"
          />
        )}
        {steps &&
          steps.map((step) => (
            <>
              <p onClick={step.onClick} className={`opacity-70 ${step.onClick && "hover:scale-95 cursor-pointer"}`}>
                {step.name}
              </p>
              <BiChevronRight size={18} className="opacity-70" />
            </>
          ))}
        {typeof title === "string" ? <h1 className="md:text-lg">{title}</h1> : title}
      </div>

      <div className="flex gap-4 items-center">
        {refreshing ? (
          <PiArrowArcRight size={18} className="animate-spin" />
        ) : onRefresh ? (
          <Button
            outline={true}
            onClick={onRefresh}
            icon={refreshIcon || <PiArrowArcRight size={18} />}
            className="p-2 border-none  bg-transparent text-[var(--header-text-color)] hover:bg-[var(--header-button-hover-background-color)] hover:text-[var(--header-button-hover-text-color)]"
          />
        ) : null}
        {setQuery && <InputComponent type="search" value={query} onChange={setQuery} />}
        {children}
        {onEdit && (
          <Button
            outline={true}
            onClick={onEdit}
            icon={editIcon || <PiPencil size={18} />}
            className="p-2 border-none  bg-transparent text-[var(--header-text-color)] hover:bg-[var(--header-button-hover-background-color)] hover:text-[var(--header-button-hover-text-color)]"
          />
        )}
        {onCopy && (
          <Button
            outline={true}
            onClick={onCopy}
            icon={copyIcon || <PiCopy size={18} />}
            className="p-2 border-none text-[var(--header-text-color)] hover:bg-[var(--header-button-hover-background-color)] hover:text-[var(--header-button-hover-text-color)]"
          />
        )}
        {onDelete && (
          <Button
            outline={true}
            onClick={onDelete}
            icon={deleteIcon || <PiTrash size={18} />}
            className="p-2 border-none  bg-transparent text-[var(--header-text-color)] hover:bg-[var(--header-button-hover-background-color)] hover:text-[var(--header-button-hover-text-color)]"
          />
        )}
        {onOptionsClicked && (
          <Button
            outline={true}
            onClick={onOptionsClicked}
            icon={optionsIcon || <PiDotsThreeVertical size={18} />}
            className="p-2 border-none  bg-transparent text-[var(--header-text-color)] hover:bg-[var(--header-button-hover-background-color)] hover:text-[var(--header-button-hover-text-color)]"
          />
        )}
        {onClose && (
          <Button
            outline={true}
            onClick={onClose}
            icon={closeIcon || <MdClose size={18} />}
            className="p-2 border-none  bg-transparent text-[var(--header-text-color)] hover:bg-[var(--header-button-hover-background-color)] hover:text-[var(--header-button-hover-text-color)]"
          />
        )}
        {onAction ? (
          actionIcon || actionLabel ? (
            <Button
              onClick={onAction}
              icon={actionIcon}
              label={actionLabel}
              className="p-2 py-1 border-none bg-transparent text-[var(--header-text-color)] hover:bg-[var(--header-button-hover-background-color)] hover:text-[var(--header-button-hover-text-color)]"
            />
          ) : null
        ) : null}
      </div>
    </div>
  );
};
