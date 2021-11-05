import React from "react";

import "./card.scss";
import classNames from "classnames";

export type CardProps = {
  variant: "primary" | "secondary";
  children: any;
  title: string;
  subtitle?: string;
  size?: "small" | "medium" | "big" | "large";
};

export const Card = ({
  children,
  title,
  size = "medium",
  variant,
  subtitle,
}: CardProps) => {
  const cardClassname = classNames({
    card: true,
    [`card-${size}`]: true,
  });

  const cardTitleClassname = classNames({
    ["card-title"]: true,
    [`card-${variant}`]: true,
  });

  return (
    <div className={"card-wrapper"}>
      <div className={cardClassname}>
        <div className={cardTitleClassname}>
          <h1>{title}</h1>
          {subtitle && <h6>{subtitle}</h6>}
        </div>
        <div className={"card-body"}>{children}</div>
      </div>
    </div>
  );
};
