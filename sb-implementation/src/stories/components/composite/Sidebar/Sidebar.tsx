import React, { useState } from "react";
import classNames from "classnames";

import "./sidebar.scss";
import { Button } from "../../base/button/Button";

export type SidebarProps = {
  title: string;
  optionItems: string[];
};

export const Sidebar = ({ title, optionItems }: SidebarProps) => {
  const [linkSelected, setLink]: [number, Function] = useState(0);

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
          return (
            <Button
              label={item}
              variant={linkSelected === index ? "primary" : "secondary"}
              onClick={() => setLink(index)}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
