import React from "react";
import PropTypes from "prop-types";

import { Header, HeaderProps } from "../../composite/Header/Header";
import "./page.scss";
import { Sidebar, SidebarProps } from "../../composite/Sidebar/Sidebar";
import { Content } from "../../composite/Content/Content";
import { Button } from "../../base/button/Button";

export type PageProps = {
  sidebarProps: SidebarProps;
  headerProps: HeaderProps;
};

export const Page = ({ sidebarProps, headerProps }: PageProps) => (
  <article>
    <Sidebar
      title={sidebarProps.title}
      optionItems={sidebarProps.optionItems}
    />
    <div>
      <Header user={headerProps.user} title={headerProps.title} />
      <Content>
        <Button
          variant={"primary"}
          label={"Crear"}
          onClick={() => console.log("clicked!")}
        />
      </Content>
    </div>
  </article>
);
