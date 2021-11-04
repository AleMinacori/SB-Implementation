import React from "react";
import classNames from "classnames";

import "./content.scss";

export type ContentProps = {
  children: Node;
};

export const Content = ({ children }: ContentProps) => {
  const contentContainerClassname = classNames({
    ["content-container"]: true,
  });

  return <div className={contentContainerClassname}>{children}</div>;
};
