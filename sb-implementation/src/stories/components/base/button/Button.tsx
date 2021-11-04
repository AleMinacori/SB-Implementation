import React from "react";
import classNames from "classnames";
import "./button.scss";
/**
 * Primary UI component for user interaction
 */

export type ButtonProps = {
  variant: "primary" | "secondary";
  label: string;
  onClick: Function;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
};

export const Button = ({
  variant,
  size = "medium",
  label,
  disabled,
  onClick,
}: ButtonProps) => {
  const buttonClassname = classNames({
    [`button-${variant}`]: true,
    [`button-${size}`]: true,
    disabled,
  });

  return (
    <button
      type="button"
      className={buttonClassname}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};
