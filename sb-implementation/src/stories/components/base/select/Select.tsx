import React, { ChangeEvent, useEffect, useState } from "react";
import classNames from "classnames";
import "./select.scss";
/**
 * Primary UI component for user interaction
 */

export type optionItem = {
  label: string;
  value: string;
};

export type SelectProps = {
  variant: "primary" | "secondary";
  label: string;
  optionItems: optionItem[];
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  defaultValue?: string;
  hasError?: boolean;
  onChange?: Function;
};

export const Select = ({
  variant,
  size = "medium",
  label,
  disabled,
  defaultValue,
  hasError,
  onChange,
  optionItems,
}: SelectProps) => {
  const [value, setValue]: [string, Function] = useState(defaultValue || "");

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    onChange && onChange(e);
    e.target.blur();
  };

  const inputContainerClassName = classNames({
    ["select-container"]: true,
    filled: value,
    disabled,
    error: hasError,
  });

  const inputClassname = classNames({
    [`select-${variant}`]: true,
    [`select-${size}`]: true,
  });

  const labelClassname = classNames({
    [`label-${size}`]: true,
  });

  return (
    <div className={inputContainerClassName}>
      <label className={labelClassname} htmlFor={`select-${label}`}>
        {label}
      </label>
      <select
        name={label}
        className={inputClassname}
        disabled={disabled}
        id={`select-${label}`}
        defaultValue={defaultValue}
        onChange={(e) => handleOnChange(e)}
      >
        <option disabled={true} selected={true} />
        {optionItems.map((option: optionItem) => {
          return <option value={option.value}>{option.label}</option>;
        })}
      </select>
    </div>
  );
};
