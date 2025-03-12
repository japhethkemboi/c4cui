import React from "react";
import { Button } from "../Button/Index";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";

export const ConfirmDialog = ({
  message,
  confirmLabel,
  cancelLabel,
  neutralLabel,
  confirmLabelClasses,
  cancelLabelClasses,
  neutralLabelClasses,
  onConfirm,
  onCancel,
  onNeutral,
}: {
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  neutralLabel?: string;
  onConfirm: () => void;
  onCancel?: () => void;
  onNeutral?: () => void;
  confirmLabelClasses?: string;
  cancelLabelClasses?: string;
  neutralLabelClasses?: string;
}) => {
  return (
    <div className="flex flex-col gap-8 bg-[var(--background-color)] text-[var(--text-color)] p-4 rounded-xl max-w-[300px] sm:max-w-2xl">
      <p className="text-lg font-semibold">{message}</p>
      <div className="flex gap-4 w-full justify-end">
        {onCancel && (
          <Button
            label={cancelLabel || "No"}
            onClick={onCancel}
            outline
            className={twMerge(classNames("hover:bg-red-500 hover:border-red-500", cancelLabelClasses))}
          />
        )}
        {onNeutral && (
          <Button
            label={neutralLabel || "Neutral"}
            onClick={onNeutral}
            outline
            className={twMerge(classNames(neutralLabelClasses))}
          />
        )}
        {onConfirm && (
          <Button
            label={confirmLabel || "Yes"}
            onClick={onConfirm}
            className={twMerge(classNames(confirmLabelClasses))}
          />
        )}
      </div>
    </div>
  );
};
