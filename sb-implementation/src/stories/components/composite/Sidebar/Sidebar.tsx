import React from "react";
import classNames from "classnames";

import "./sidebar.scss";

export type SidebarProps = {
  title: string;
  optionItems: string[];
};

export const Sidebar = ({ title, optionItems }: SidebarProps) => {
  const sidebarContainerClassname = classNames({
    ["sidebar-container"]: true,
  });

  return (
    <div className={sidebarContainerClassname}>
      <div className="sidebar-title">
        <h1>{title}</h1>
      </div>
      <div className={"sidebar-link-container"}>
        {optionItems.map((item, index: number) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
};
