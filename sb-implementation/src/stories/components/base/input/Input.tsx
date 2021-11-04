import React, { ChangeEvent, useEffect, useState } from "react";
import classNames from "classnames";
import "./input.scss";
/**
 * Primary UI component for user interaction
 */

export type InputProps = {
  variant: "primary" | "secondary";
  label: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  defaultValue?: string;
  hasError?: boolean;
  onChange?: Function;
};

export const Input = ({
  variant,
  size = "medium",
  label,
  disabled,
  defaultValue,
  hasError,
  onChange,
}: InputProps) => {
  const [value, setValue]: [string, Function] = useState(defaultValue || "");

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };

  const inputContainerClassName = classNames({
    ["input-container"]: true,
    filled: value,
    disabled,
    error: hasError,
  });

  const inputClassname = classNames({
    [`input-${variant}`]: true,
    [`input-${size}`]: true,
  });

  const labelClassname = classNames({
    [`label-${size}`]: true,
  });

  return (
    <div className={inputContainerClassName}>
      <label className={labelClassname} htmlFor={`input-${label}`}>
        {label}
      </label>
      <input
        name={label}
        type="text"
        className={inputClassname}
        disabled={disabled}
        id={`input-${label}`}
        defaultValue={defaultValue}
        onChange={(e) => handleOnChange(e)}
      />
    </div>
  );
};
