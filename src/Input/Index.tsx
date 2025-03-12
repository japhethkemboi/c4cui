import React, { KeyboardEventHandler, useState } from "react";
import { PiEye, PiEyeClosed, PiMagnifyingGlass } from "react-icons/pi";
import { BiCopy } from "react-icons/bi";
import { passwordGenerator } from "../utils";
import classNames from "classnames";
import { Button } from "../Button/Index";
import { twMerge } from "tailwind-merge";
import { toast } from "../Toast/Index";

export const InputComponent = ({
  label,
  name,
  type,
  labelClasses,
  readOnly,
  value,
  onChange,
  inputClasses = "",
  placeholder,
  options,
  defaultValue,
  required = true,
  maxLength,
  minLength,
  maxNumber,
  minNumber,
  copyPassword,
  generatePassword,
  rows,
  suggestions,
  onSelectSuggestion,
  onKeyDown,
  multiple,
  step,
  onSearch,
  error,
}: {
  label?: string;
  name?: string;
  type?: string;
  readOnly?: boolean;
  required?: boolean;
  options?: Array<{ id: string; disabled?: boolean; value?: string }>;
  labelClasses?: string;
  inputClasses?: string;
  placeholder?: string;
  defaultValue?: string;
  maxLength?: number;
  minLength?: number;
  value?: string;
  maxNumber?: number;
  minNumber?: number;
  step?: number;
  copyPassword?: boolean;
  generatePassword?: boolean;
  suggestions?: Array<{ id: string; value?: string }>;
  onSelectSuggestion?: (id: string) => void;
  multiple?: boolean;
  rows?: number;
  onChange?: (value: string) => void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
  onSearch?: () => void;
  error?: string;
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex flex-col items-start w-full gap-4">
      {label && <label className={classNames(labelClasses)}>{label}</label>}
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          maxLength={maxLength}
          minLength={minLength}
          readOnly={readOnly}
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
          rows={rows || 4}
          className={twMerge(
            classNames(
              "w-full p-2 md:p-3 border border-[var(--border-color)] bg-transparent rounded-xl placeholder:text-[var(--placeholder-color)]",
              inputClasses
            )
          )}
        />
      ) : type === "select" ? (
        <select
          onChange={(e) => onChange && onChange(e.target.value)}
          className={twMerge(
            classNames(
              "w-full p-2 md:p-3 border border-[var(--border-color)] bg-transparent rounded-xl placeholder:text-[var(--placeholder-color)]",
              inputClasses
            )
          )}
          name={name}
          disabled={readOnly}
          required={required}
          aria-placeholder={placeholder}
          value={value || ""}
        >
          <option disabled value="">
            SELECT
          </option>
          {options?.map((option) => (
            <option key={option.id} value={option.id} disabled={option.disabled}>
              {option.value || option.id}
            </option>
          ))}
        </select>
      ) : (
        <div className={classNames(type !== "checkbox" && "w-full", "flex flex-col md:flex-row items-center gap-2")}>
          <div className={classNames(type !== "checkbox" && "w-full", "flex items-center gap-2 relative")}>
            {type === "search" && (
              <div className="flex gap-2 items-center absolute left-2 top-0 bottom-0">
                <Button
                  onClick={onSearch}
                  className="p-2 hover:opacity-70 border-none rounded-xl-full"
                  outline={true}
                  icon={<PiMagnifyingGlass size={18} />}
                />
              </div>
            )}
            <input
              type={type === "number" || passwordVisible ? "text" : type}
              multiple={multiple}
              name={name}
              value={value}
              step={step}
              min={minNumber}
              max={maxNumber}
              required={required}
              maxLength={maxLength}
              minLength={!minLength && type === "password" ? 5 : minLength}
              onKeyDown={onKeyDown}
              onChange={(e) => onChange && onChange(e.target.value)}
              readOnly={readOnly}
              placeholder={placeholder}
              defaultValue={defaultValue}
              onKeyPress={(e) => {
                if (type === "number") {
                  if (
                    e.key !== "Backspace" &&
                    e.key !== "Delete" &&
                    ((maxNumber && parseInt(e.key) > maxNumber) ||
                      (minNumber && parseInt(e.key) < minNumber) ||
                      !/^[0-9]$/.test(e.key))
                  ) {
                    e.preventDefault();
                  }
                } else if (type === "puretext") {
                  if (!/^[a-z]$/.test(e.key.toLowerCase())) {
                    e.preventDefault();
                  }
                }
              }}
              className={twMerge(
                classNames(
                  "w-full p-2 md:p-3 border border-[var(--border-color)] rounded-xl placeholder:text-[var(--placeholder-color)] bg-transparent",
                  { "p-2 pl-11 md:p-2 md:pl-11 rounded-full": type === "search" },
                  inputClasses
                )
              )}
            />
            <div className="flex gap-2 items-center absolute right-2 top-0 bottom-0">
              {copyPassword && value && value.length > 5 && (
                <Button
                  onClick={() =>
                    navigator.clipboard
                      .writeText(value)
                      .then(() => {
                        toast.info("Copied to clipboard.");
                      })
                      .catch((err) => {
                        toast.info(err.messge || "Failed to copy to clipboard.");
                      })
                  }
                  outline={true}
                  className="p-2 hover:opacity-70 border-none"
                  icon={<BiCopy />}
                />
              )}
              {type === "password" && (
                <Button
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="p-2 hover:opacity-70 border-none"
                  outline={true}
                  icon={passwordVisible ? <PiEye size={18} /> : <PiEyeClosed size={18} />}
                />
              )}
            </div>
          </div>
          {generatePassword && (
            <Button
              onClick={() => {
                const newPassword = passwordGenerator({
                  length: 16,
                  includeNumbers: true,
                  includeSymbols: true,
                  excludeSimilarCharacters: true,
                });
                onChange && onChange(newPassword);
              }}
              className="border-none"
              label="Generate Password"
              outline={true}
            />
          )}
        </div>
      )}
      {suggestions && suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              onClick={() => onSelectSuggestion && onSelectSuggestion(suggestion.id)}
              className="suggestion-item"
            >
              {suggestion.value}
            </div>
          ))}
        </div>
      )}
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};
