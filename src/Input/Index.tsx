import React, { KeyboardEventHandler, useState } from "react";
import { PiEye, PiEyeClosed, PiMagnifyingGlass } from "react-icons/pi";
import { BiCopy } from "react-icons/bi";
import { copyToClipboard } from "../utils";
import classNames from "classnames";
import passwordGenerator from "generate-password";
import { Button } from "../Button/Index";
import { twMerge } from "tailwind-merge";

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
}: {
  label?: string;
  name?: string;
  type?: string;
  readOnly?: boolean;
  required?: boolean;
  options?: Array<{ id: string; disabled?: boolean; value?: string; selected?: boolean }>;
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
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex flex-col items-start w-full gap-4">
      {label && <h4 className={classNames("md:text-lg", labelClasses)}>{label}</h4>}
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
              "w-full p-3 md:p-4 border border-black/20 bg-transparent rounded placeholder:text-gray-600",
              inputClasses
            )
          )}
        />
      ) : type === "select" ? (
        <select
          onChange={(e) => onChange && onChange(e.target.value)}
          className={twMerge(
            classNames(
              "w-full p-3 md:p-4 border border-black/20 bg-transparent rounded placeholder:text-gray-600",
              inputClasses
            )
          )}
          name={name}
          disabled={readOnly}
          required={required}
          aria-placeholder={placeholder}
          defaultValue={defaultValue}
        >
          {options?.map((option) => (
            <option selected={option.selected} disabled={option.disabled} key={option.id} value={option.id}>
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
                  className="p-2 hover:opacity-70 border-none rounded-full"
                  outline={true}
                  icon={<PiMagnifyingGlass size={18} />}
                />
              </div>
            )}
            <input
              type={type === "number" || (type === "password" && passwordVisible) ? "text" : type}
              multiple={multiple}
              name={name}
              value={value}
              step={step}
              min={minNumber}
              max={maxNumber}
              required={required}
              maxLength={maxLength}
              minLength={minLength}
              onKeyDown={onKeyDown}
              onChange={(e) => onChange && onChange(e.target.value)}
              readOnly={readOnly}
              placeholder={placeholder}
              defaultValue={defaultValue}
              className={twMerge(
                classNames(
                  "w-full p-3 md:p-4 border border-black/20 rounded placeholder:text-gray-600 bg-transparent",
                  { "p-2 pl-11 md:p-2 md:pl-11 rounded-full": type === "search", inputClasses }
                )
              )}
            />
            <div className="flex gap-2 items-center absolute right-2 top-0 bottom-0">
              {copyPassword && value && value.length > 7 && (
                <Button
                  onClick={() => copyToClipboard(value)}
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
          {copyPassword || generatePassword ? (
            <div className="flex gap-2 items-center">
              {generatePassword && (
                <Button
                  onClick={() =>
                    onChange &&
                    onChange(
                      passwordGenerator.generate({
                        length: 15,
                        numbers: true,
                      })
                    )
                  }
                  className="border-none"
                  label="Generate Password"
                  outline={true}
                />
              )}
            </div>
          ) : null}
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
    </div>
  );
};
