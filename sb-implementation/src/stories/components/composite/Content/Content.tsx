import React from "react";

import "./content.scss";

export type ContentProps = {
  children: any;
};

export const Content = ({ children }: ContentProps) => {
  return (
    <div className={"content-container"}>
      <div className={"content"}>{children}</div>
    </div>
  );
};
