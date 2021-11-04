import React from "react";

import "./header.css";

export type HeaderProps = {
  user: string;
  title: string;
};

export const Header = ({ user, title }: HeaderProps) => (
  <header>
    <div className="wrapper">
      <h1>{title}</h1>
      <h2>{user}</h2>
    </div>
  </header>
);
